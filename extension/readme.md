# Kiosk Edge extension

The GMSO Impact extension for the Edge browser is intented for use on the publicly available kiosk machines. This extension prevents opening links that would take a user outside of the impact website including the story refrences and youtube link.

## Installation

Group Policy
```
SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallForcelist\1 =  "ckjbkailafbelecgkfgkebgkhendegda;https://github.com/gmso-impact/gmso-website/tree/main/extension/gmso-impact.xml"

```

This policy is based on the [ExtensionInstallForcelist](https://docs.microsoft.com/en-us/DeployEdge/microsoft-edge-policies#extensioninstallforcelist) registery value 

## Updates

The extension should auto updated with Edge on the kiosk machines. To make code changes [follow these instructions](https://docs.microsoft.com/en-us/deployedge/microsoft-edge-manage-extensions-webstore). You will need a copy of the gmso-impact.pem for auto updates, or the extension will need to be re-assigned and installed on the kiosk machines.


