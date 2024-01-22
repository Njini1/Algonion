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

  declarative_net_request: {
    rule_resources: [
      {
        id: "ruleset",
        enabled: true,
        path: "rules.json"
      }
    ]
  },
  content_scripts: [
    {
      matches: [
        "https://www.acmicpc.net/*"
      ],
      js: [
        "src/contentScript/index.js",
        "src/contentScript/baekjoon/baekjoon.js",
        "src/contentScript/baekjoon/user.js",
        "src/contentScript/baekjoon/submission.js",
        "src/contentScript/baekjoon/storage.js",
        "src/contentScript/baekjoon/util.js",
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
  ],
  side_panel: {
    default_path: 'sidepanel.html',
  },
  web_accessible_resources: [
    {
      resources: ['img/logo-16.png', 'img/logo-34.png', 'img/logo-48.png', 'img/logo-128.png'],
      matches: [],
    },
  ],
  permissions: ['sidePanel', 'storage', 'declarativeNetRequest', 'declarativeNetRequestWithHostAccess'],
  host_permissions: [
    'https://www.acmicpc.net/',
    'https://school.programmers.co.kr/',
    'https://github.com/',
    'https://swexpertacademy.com/',
    'https://solved.ac/api/v3/*'
  ],
  // chrome_url_overrides: {
  //   newtab: 'newtab.html',
  // },
})