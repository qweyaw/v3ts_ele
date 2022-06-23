<!--
 * @Description: 
 * @Author: 
-->
# Vue 3 + TypeScript + Vite + electron

### install:
`npm install electron -D`
`npm install electron-builder -D  打包`
`npm install electron-devtools-installer -D  开发调试`
`npm install vite-plugin-electron -D  渲染进程使用node API 或 electron API`
`npm install rimraf -D  快速删除某些文件和文件夹`

### 新建 electron 文件夹
main.js 主进程、 preload.js 预加载文件

package.json
```json
"build": "rimraf dist && vite build && electron-builder",
"build": {
    "appId": "desktop",
    "productName": "smallpig",
    "asar": true,
    "copyright": "Copyright © 2022 smallpig",
    "directories": {
        "output": "release/${version}"
    },
    "files": [
        "dist"
    ],
    "mac": {
        "artifactName": "${productName}_${version}.${ext}",
        "target": [
        "dmg"
        ]
    },
    "win": {
        "target": [
        {
            "target": "nsis",
            "arch": [
            "x64"
            ]
        }
        ],
        "artifactName": "${productName}_${version}.${ext}"
    },
    "nsis": {
        "oneClick": false,
        "perMachine": false,
        "allowToChangeInstallationDirectory": true,
        "deleteAppDataOnUninstall": false
    },
    "publish": [
        {
        "provider": "generic",
        "url": "http://127.0.0.1:8080"
        }
    ],
    "releaseInfo": {
        "releaseNotes": "版本更新的具体内容"
    }
}
```

### 主进程与渲染进程通信
`npm install @vueuse/electron -D`