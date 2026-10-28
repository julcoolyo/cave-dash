const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('caveDashApp', {
  version: '1.0.0',
  platform: process.platform
});
