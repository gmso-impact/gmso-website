# gmso

## Local Development of Website

### Software

1. Install Visual Studio Code
2. Install Node.js
3. Install Yarn (via NPM as global)

```
npm install --global yarn 
```

4. Add Extensions to Visual Studio Code (publisher)
    This step is purely for convience

    - vue-format (fe_bean)
    - Vue 3 Snippets (hollowtree)
    - SVG (Jock)


### Developer setup (first run)

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Retrieves Stories
***Requires AIRTABLE_AUTHORIZATION= API Key in ENV file*** 
```
yarn fetch
```

### Lints and fixes files
```
yarn lint
```


### Old content to move elsewhere

4. Sign in with Kiosk by restarting machine
- First time may take a while to create the account
- user: SPURLT-GMSO\kiosk
5. Exit Kiosk mode using CTRL + ALT + DELETE & enter local admin password
- user: SPURLT-GMSO\gmso_admin
