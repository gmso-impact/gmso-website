# gmso

## Local Development of Website

### Software

1. Install [Visual Studio Code](https://code.visualstudio.com/)
1. Install [GIT SCM](https://git-scm.com/download/win)
    ```
    git config --global user.name "GMSO"
    git config --global user.email gmso_mailbox@mail.colostate.edu
    ```

1. Install [Node.js 14.x](https://nodejs.org/dist/latest-v14.x/)  **add choclatey when prompted**
    node-v14.20.0-x64.msi is an installer package. Version number will change based on bugfixes.
    If this fails, run the installer a second time and select 'repair' if it recognizes an existing install
    Node 14 is required because of Vue2. Vue2 is required because of vue-leaflet


1. Set ExecutionPolicy to run Powershell scripts
    This requires running the following command in powershell
    ```
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```


1. Install Yarn (via NPM as global in terminal)
    ```
    npm install --global yarn 
    ```


1. Add Extensions to Visual Studio Code (publisher)
    This step is purely for convience
    - vue-format (fe_bean)
    - Vue 3 Snippets (hollowtree)
    - SVG (Jock)


1. Clone Repository to local machine
    Keep files anywhere on the filesystem. Documents or desktop reccomended for easy development. Ensure the folder is **not** backed up (onedrive or dropbox) as it will cause slow performance.
    ```
    git clone https://github.com/gmso-impact/gmso-website.git
    ```

### Developer setup (first run)
1. Install build tools. Requires admin powershell command line
    ```
    npm install --global windows-build-tools
    npm config set python "C:\Python310\python.exe" 
    ```
1. Install Yarn packages
    ```
    yarn install
    ```
1. Set Airtable API Key
    Generate Key on [airtable.com/api](https://airtable.com/api)
    Copy '.env.example' to a file named '.env'
    AIRTABLE_AUTHORIZATION="API Key" in ENV file

1. Retrieve airtable data
    Images will not load until you complete this step
    ```
    yarn fetch
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
This will give nice an consistent formatting
```
yarn lint
```

