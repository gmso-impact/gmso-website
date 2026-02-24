# Build stage
FROM node:20 AS builder

# Install build dependencies for native modules
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Enable corepack for yarn
RUN corepack enable

WORKDIR /app

# Copy package files
COPY package.json yarn.lock* ./

# Install dependencies
RUN yarn install --network-timeout 100000 

# Copy source code
COPY . .

# Build the application
RUN yarn build


# Production stage
FROM node:20 AS production

# Enable corepack for yarn
RUN corepack enable

WORKDIR /app

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Install serve to run the production build
RUN yarn global add serve

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]


# Development stage
FROM node:20 AS development

# Install build dependencies for native modules
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Enable corepack for yarn
RUN corepack enable

WORKDIR /app

# Copy package files
COPY package.json yarn.lock* ./
   
# Install all dependencies
RUN yarn install --network-timeout 100000

# Copy source code
COPY . .

# Create entrypoint script
RUN echo '#!/bin/sh\n\
if [ ! -d "node_modules/.bin" ]; then\n\
  echo "Installing dependencies..."\n\
  yarn install --network-timeout 100000\n\
fi\n\
echo "Running lint..."\n\
yarn lint\n\
exec "$@"' > /entrypoint.sh && chmod +x /entrypoint.sh

EXPOSE 8080

ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

ENTRYPOINT ["/entrypoint.sh"]
CMD ["sh", "-c", "/app/node_modules/.bin/vue-cli-service serve --host 0.0.0.0"]
