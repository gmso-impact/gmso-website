# gmso
## Kiosk mode
[Windows 10 Enterprise Documentation](https://docs.microsoft.com/en-us/deployedge/microsoft-edge-configure-kiosk-mode)
```
MicrosoftEdge.exe --kiosk https://bbudnicki.github.io/gmso-website/ --edge-kiosk-type=fullscreen --no-first-run

```

### Domains
The following URLs represent the domains & paths of files used by this appllication. For restricting the Kiock, the root domains are likely to work. It is unknown if the domains of other assets must be white listed.

[Policy for URLS resricting](https://docs.microsoft.com/en-us/DeployEdge/edge-learnmmore-url-list-filter%20format)


```
[scheme://][.]host[:port][/path][@query]
```

#### Root domains
```
https://impact.csusystem.edu/
https://bbudnicki.github.io/gmso-website/
```

#### Story list images
```
https://dl.airtable.com/
```
#### Map Tile layers
```
https://server.arcgisonline.com/ArcGIS/rest/services
https://tile.openstreetmap.org/
```
#### ESRI StoryMap
```
https://storymaps.arcgis.com/
https://www.arcgis.com/sharing/
```
#### Youtube
```
https://fonts.gstatic.com/s
https://cdn.embedly.com/css/
https://cdn.embedly.com/js/
https://cdn.embedly.com/widgets/
https://i-cdn.embed.ly/
https://i.ytimg.com/sb/
https://jnn-pa.googleapis.com/

https://rr2---sn-qxoedn7z.googlevideo.com/
https://www.google.com/js/
https://www.gstatic.com/cv/js/
https://www.gstatic.com/eureka/
https://www.youtube.com/api/
https://www.youtube.com/embed/

https://www.youtube.com/generate_204?8J4VVQ
https://www.youtube.com/iframe_api
https://www.youtube.com/ptracking
https://www.youtube.com/s/
https://www.youtube.com/youtubei
https://yt3.ggpht.com/

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

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
