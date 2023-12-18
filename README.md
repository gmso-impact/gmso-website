# GMSO Impact(o)
GMSO Impact is a website showcasing the stories of research and advancement of the public good at Colorado State University hosted at [impact.csusystem.edu](https://impact.csusystem.edu/). At the [Spur campus](https://csuspur.org/) in Denver, Colorado there is an exhibit on the 2nd floor of the Tera building displaying this website on a 16ft wide touch screen and accessibility friendly podiums for the public to experience. This GitHub repository contains the code for the website.

# Production Server

This website [https://impact.csusystem.edu/#/kiosk](https://impact.csusystem.edu/#/kiosk) is hosted on GitHub pages. Every day at [5 am MTN](https://github.com/gmso-impact/gmso-website/blob/main/.github/workflows/deploy.yml) new data is downloaded from [Airtable](https://airtable.com/appyTc8xRR9nR9sSB/tblK3OK25QMtimezC/viwejFXIvDwE3ZCMT?blocks=hide) and then copied to the [GitHub pages](https://docs.github.com/en/pages) content delivery network. Changes to stories will apear at that time on the website. Changes will then apear on the Impacto Kiosks when one of these criteria are met:

1. The kiosk has been inactive for more than 1 hour
1. The kiosk has the `reset` button pressed in the lower right hand corner of the screen
1. The kiosk is power cycled or otherwise re-started

If content changes are made in Airtable, they will be reflected at 5am the next day. If you need them sooner, contact Brandon B to have the GitHub deploy action re-run (a 5 minute task). **Best practice** is to check if those changes made it into the website the next day.

Structural **changes in AirTable to the column names, datatypes or the [PublicWebsite view](https://airtable.com/appyTc8xRR9nR9sSB/tblK3OK25QMtimezC/viwsWb12QV9KFBNa3?blocks=hide) may cause issues**, if used by the website. That view is an indicator of the fields used by the website. Adding fields in Airtable is generally OK, but ask Lauren W or Greg N. If you are unsure if a column is directly used by the exhbit or how it is used, contact Brandon B to double check.

# Spur Exhibit
There are 3 kiosks at Spur that make up the Impact(o) exhbit. The wall and 2 podiums. They are all windows 11 machines running the Microsoft Edge browser to display the kiosk version of the website [https://impact.csusystem.edu/#/kiosk](https://impact.csusystem.edu/#/kiosk). These exhbits use a slightly diffrent URL to the public website [https://impact.csusystem.edu/](https://impact.csusystem.edu/). the reason for diffrent URLs are to display / hide elements specific to the exhibit. For example, QR codes are only displayed in the exhibit. 

## Simulating as kiosk
There are 3 kiosks located at Spur. Each can be interacted with via touch inputs. You can use the Micrsoft Edge OR Google Chrome developer tools to simulate these screen sizes and touch input through [add a custom mobile device](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/device-mode/#add-a-custom-mobile-device).

- Wall - Screen resolution 7680x2160 16ft wide 5ft tall
- Short Podium - Screen resolution 1920x1080 24in diagonal
- Tall Podium - Screen resolution 1920x1080 24in diagonal

If you don't have a touch screen windows device, try the touch interaction on your phone.

# Local Development of Website

If you are new to this code, please first complete the 'required software' section and then 'Developer Setup'
## Start Development Server
This runs the a local copy of the website.
```
yarn serve
```

By default it will serve the **website** from [http://localhost:8080/](http://localhost:8080/) to view **kiosk mode* visit [http://localhost:8080/#/kiosk](http://localhost:8080/#/kiosk). It will take 1-3 minutes to start. Changes you make within the `src` folders will automaticly be displayed. Other changes will require you to stop the server `ctrl + D` within powershell and then start it again using `yarn serve`.

If you have not run the code in a while or if you see an error from `yarn serve` try a `yarn install` to ensure you have the NPM latest packages. If you have missing images or stories try `yarn fetch` to get the latest data from Airtable.

## Retrieve Story data & images
***Requires AIRTABLE_AUTHORIZATION= API Key in ENV file*** 

```
yarn fetch
```
First this command downloads the data from airtable. Then it looks through that for image links. The data is stored in `src/assets/allStories.json`. The images are downloaded, and then re-sized for optimal page delivery in the folder `public/stories`





## Making Code Changes

Before committing changes to github, run `yarn lint`. This will give nice an consistent formatting of the code. This should be re-run before every git commit.

Changes to the main branch will automaticly be deployed to production and should appear in 5-7 minutes. Changes to other branches will not be (feel free to create new branches). The file that controls the deployment flow is `.github\workflows\deploy.yml`.

## Code Structure

`package.json` contains the core yarn commands. It defines **scripts**:
 - `yarn serve` Build the code locally and then starts a development server
 - `yarn build` Complies the code from typescript to javascript and puts it in the `public` folder
 - `yarn lint` Beautifies the code, this should be run before pushing changes to github
 - `yarn fetch` Downloads data and images from airtable
 - `yarn deploy` Used by the github build pipline to build the code, same as yarn build. Will not push from local machine, no need to worry if you accientaly run this
 - `yarn predeploy` runs `yarn fetch` before deploying
 - `yarn deploydev` runs the deployment with developer flags set to true. Used to troubleshoot issues in GitHub

`package.json` also defines the NPM javascript packages used by this code. Use `yarn install`, `yarn update`, and other commands defined by yarn [yarnpkg.com](https://yarnpkg.com/getting-started/usage).

### Folder structure
- `.github\workflows` scripts run to deploy to [GitHub pages](https://docs.github.com/en/pages/quickstart)
- `public` static images like geo and the imapcto logo
    - `public\icons` icons used by themes
    - `public\stories` story images once `yarn fetch` has been run
- `src` source code
    - `src\assets` story data generated by `yarn fetch`
    - `src\components` [vue2 js components](https://v2.vuejs.org/v2/guide/components.html) for everything you see on the page
    - `src\fetch` code for downloading data from airtable
    - `src\helper` simple functions to be re-used across any code
    - `src\mixins` [vue2 js mixins](https://v2.vuejs.org/v2/guide/mixins.html) for re-useable code across components.
    - `src\router` [vue2 router](https://github.com/vuejs/vue-router) handles page navigation
    - `src\scss`  [SCSS handles](https://sass-lang.com/documentation/) styling. Use [bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) styles whenever possible to avoid alot of custom css
        - `src\scss\variables.scss` defines theme colors, responsive breakpoints, and global font size
    - `src\store` [vuex](https://vuex.vuejs.org/guide/) store handles page state
    - `src\views` Used for high level pages by the router
    - `src\translations.ts` [vue-i18n](https://kazupon.github.io/vue-i18n/guide/formatting.html) manages translation of text from diffrent languages

## Required Software

1. Install [Visual Studio Code](https://code.visualstudio.com/)
1. Install [GIT SCM](https://git-scm.com/download/win)
    ```
    git config --global user.name "GMSO"
    git config --global user.email gmso_mailbox@mail.colostate.edu
    ```

1. Install [Node.js 18.x](https://nodejs.org/en/download)  **add choclatey when prompted**
    Version number will change based on bugfixes.
    If this fails, run the installer a second time and select 'repair' if it recognizes an existing install
    Node 18 is required because of Vue2. Vue2 is required because of vue-leaflet


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

## Developer setup (first run)
1. Install build tools. Requires admin powershell command line
    ```
    npm install --global windows-build-tools
    npm config set python "C:\Python310\python.exe" 
    ```
1. Install Yarn packages
    ```
    yarn install
    ```
1. Create Airtable Personal Access token
    This will be used by your local machine to access the Airtable data. You need this for the list of stories and the image files.
    >**Do not store personal access tokens or API keys in Github including the `.example.env` file**

    1. Copy '.env.example' to a file named '.env'
    1. Visit [airtable.com/create/tokens](https://airtable.com/create/tokens)
    1. Click create new token
    1. Name token "${John Doe} Local"
    1. Scope: `data.records:read` limits the potential impact of unauthroized token use
    1. Add Base: `GMSO Story Database`
    1. Copy Personal Token to `AIRTABLE_AUTHORIZATION="API Key"` in your new `.env` file
        **DO NOT SAVE IN `.example.env`**
    1. Retrieve airtable data
        ```
        yarn fetch
        ```

# End of documentation.

