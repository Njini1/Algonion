import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json' assert { type: 'json' }

export default defineManifest({
  name: packageData.name,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'img/logo-16.png',
    32: 'img/logo-34.png',
    48: 'img/logo-48.png',
    128: 'img/logo-128.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'img/logo-48.png',
  },
  options_page: 'options.html',
  devtools_page: 'devtools.html',
  background: {
    service_worker: 'src/background/index.js',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/contentScript/index.js'],
    },
    {
      matches: [
        "https://www.acmicpc.net/*"
      ],
      js: [
        "src/contentScript/index.js",
        "src/contentScript/boj/submission.js",
      ],
      run_at: "document_idle"
    },
    {
      matches: [
        "https://school.programmers.co.kr/learn/courses/30/lessons/*"
      ],
      js: ['src/contentScript/programmers/getPageInfo.js'],
      run_at: "document_idle"
    },
    {
      matches: [
        "https://swexpertacademy.com/*"
      ],
      js: [
        "src/contentScript/swea/enable.js",
        "src/contentScript/swea/storage.js",
        "src/contentScript/swea/variables.js",
        "src/contentScript/swea/util.js",
        "src/contentScript/swea/parsing.js",
        "src/contentScript/swea/swexpertacademy.js",
      ],
      run_at: "document_idle"
    }
  ],
  side_panel: {
    default_path: 'sidepanel.html',
  },
  web_accessible_resources: [
    {
      resources: [
        // "library/jquery-3.3.1.min.js",
        // "library/semantic.min.js",
        // "popup.html",
        // "popup.js",
        // "welcome.html",
        // "welcome.js"
      ],
      matches: [
        "<all_urls>"
      ],
    },
  ],
  permissions: [
    'sidePanel', 
    "unlimitedStorage",
    "storage",
    "declarativeNetRequest",
    "declarativeNetRequestWithHostAccess"
  ],
  host_permissions: [
    "https://www.acmicpc.net/",
    "https://school.programmers.co.kr/",
    "https://swexpertacademy.com/",
    "https://solved.ac/api/v3/*"
  ],
  // chrome_url_overrides: {
  //   newtab: 'newtab.html',
  // },
})
