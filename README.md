# gmso
## Kiosk mode
[Edge Kiosk Mode](https://docs.microsoft.com/en-us/deployedge/microsoft-edge-configure-kiosk-mode) required Windows 10 Enterprise edition
```
MicrosoftEdge.exe --kiosk https://bbudnicki.github.io/gmso-website/ --edge-kiosk-type=fullscreen --no-first-run

```

This [youtube video](https://www.youtube.com/watch?v=blNSJxk9PtE) may be helpful if CSU does not already have a group policy for Windows 10 Kiosks

### Domains
The following URLs represent the domains & paths of files used by this appllication. For restricting the Kiosk, the root domains are likely to work. It is unknown if the domains of other assets must be white listed.

[Policy for URLS resricting](https://docs.microsoft.com/en-us/DeployEdge/edge-learnmmore-url-list-filter%20format)


```
[scheme://][.]host[:port][/path][@query]
```

#### Root domains (Required)
```
https://impact.csusystem.edu/
https://bbudnicki.github.io/gmso-website/
```

#### Story list images (Optional?)
```
https://dl.airtable.com/
```
#### Map Tile layers (Optional?)
```
https://server.arcgisonline.com/ArcGIS/rest/services
https://tile.openstreetmap.org/
```
#### ESRI StoryMap (Optional?)
```
https://storymaps.arcgis.com/
https://www.arcgis.com/sharing/
```
#### Youtube (Optional?)
```
https://www.youtube.com/api/
https://www.youtube.com/embed/
https://www.youtube.com/generate_204?8J4VVQ
https://www.youtube.com/iframe_api
https://www.youtube.com/ptracking
https://www.youtube.com/s/
https://www.youtube.com/youtubei

https://rr2---sn-qxoedn7z.googlevideo.com/
https://i.ytimg.com/sb/
https://fonts.gstatic.com/s/
https://jnn-pa.googleapis.com/
https://yt3.ggpht.com/

https://www.google.com/js/
https://www.gstatic.com/cv/js/
https://www.gstatic.com/eureka/

https://cdn.embedly.com/css/
https://cdn.embedly.com/js/
https://cdn.embedly.com/widgets/
https://i-cdn.embed.ly/

```

## Developer setup
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# Kiosk Config

1. Install Windows 11 Enterprise
2. Create local admin account
3. Connect to internet
3. Setup up a Kiosk
- account -> Other users -> get started
- Name: kiosk
- Choose app: Microsfot Edge
- How will this kiosk be used: As a digital sign or interactive display
- URL: https://impact.csusystem.edu/#/kiosk
- Restart Edge: 1 hour
5. Setup group policies using regedit
https://docs.microsoft.com/en-us/deployedge/microsoft-edge-policies#urlblocklist

Tested
- SOFTWARE\Policies\Microsoft\Edge\URLAllowlist\1 = "https://impact.csusystem.edu/#/kiosk"
- SOFTWARE\Policies\Microsoft\Edge\URLAllowlist\2 = "https://storymaps.arcgis.com/stories/"
- SOFTWARE\Policies\Microsoft\Edge\URLBlocklist\1 = "*"

Untested
https://docs.microsoft.com/en-us/windows/configuration/kiosk-prepare
- SOFTWARE\Policies\Microsoft\Edge\ShowHomeButton = 0x00000001
- SOFTWARE\Policies\Microsoft\Edge\HomepageLocation
- SOFTWARE\Policies\Microsoft\Edge\NewTabPageLocation

4. Sign in with Kiosk by restarting machine
- First time may take a while to create the account
- user: SPURLT-GMSO\kiosk
5. Exit Kiosk mode using CTRL + ALT + DELETE & enter local admin password
- user: SPURLT-GMSO\gmso_admin
