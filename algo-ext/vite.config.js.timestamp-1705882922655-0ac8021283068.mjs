// vite.config.js
import { defineConfig } from "file:///C:/Users/SSAFY/Desktop/S10P12B108/algo-ext/node_modules/vite/dist/node/index.js";
import { crx } from "file:///C:/Users/SSAFY/Desktop/S10P12B108/algo-ext/node_modules/@crxjs/vite-plugin/dist/index.mjs";
import vue from "file:///C:/Users/SSAFY/Desktop/S10P12B108/algo-ext/node_modules/@vitejs/plugin-vue/dist/index.mjs";

// src/manifest.js
import { defineManifest } from "file:///C:/Users/SSAFY/Desktop/S10P12B108/algo-ext/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// package.json
var package_default = {
  name: "algo-ext",
  version: "0.0.0",
  author: "E1I5",
  description: "",
  type: "module",
  license: "MIT",
  keywords: [
    "chrome-extension",
    "vue",
    "vite",
    "create-chrome-ext"
  ],
  engines: {
    node: ">=14.18.0"
  },
  scripts: {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
    fmt: "prettier --write '**/*.{vue,js,json,css,scss,md}'"
  },
  dependencies: {
    axios: "^1.6.5",
    vue: "^3.2.37"
  },
  devDependencies: {
    "@crxjs/vite-plugin": "^2.0.0-beta.19",
    "@vitejs/plugin-vue": "^4.4.0",
    prettier: "^3.0.3",
    vite: "^4.4.11"
  }
};

// src/manifest.js
var manifest_default = defineManifest({
  name: package_default.name,
  description: package_default.description,
  version: package_default.version,
  manifest_version: 3,
  icons: {
    16: "img/logo-16.png",
    32: "img/logo-34.png",
    48: "img/logo-48.png",
    128: "img/logo-128.png"
  },
  action: {
    default_popup: "popup.html",
    default_icon: "img/logo-48.png"
  },
  options_page: "options.html",
  devtools_page: "devtools.html",
  background: {
    service_worker: "src/background/index.js",
    type: "module"
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
        "src/contentScript/baekjoon/util.js"
      ],
      run_at: "document_idle"
    },
    {
      matches: [
        "https://school.programmers.co.kr/learn/courses/30/lessons/*"
      ],
      js: ["src/contentScript/programmers/getPageInfo.js"],
      run_at: "document_idle"
    }
  ],
  side_panel: {
    default_path: "sidepanel.html"
  },
  web_accessible_resources: [
    {
      resources: ["img/logo-16.png", "img/logo-34.png", "img/logo-48.png", "img/logo-128.png"],
      matches: []
    }
  ],
  permissions: ["sidePanel", "storage", "declarativeNetRequest", "declarativeNetRequestWithHostAccess"],
  host_permissions: [
    "https://www.acmicpc.net/",
    "https://school.programmers.co.kr/",
    "https://github.com/",
    "https://swexpertacademy.com/",
    "https://solved.ac/api/v3/*"
  ]
  // chrome_url_overrides: {
  //   newtab: 'newtab.html',
  // },
});

// vite.config.js
var vite_config_default = defineConfig(({ mode }) => {
  const production = mode === "production";
  return {
    build: {
      emptyOutDir: true,
      outDir: "build",
      rollupOptions: {
        output: {
          chunkFileNames: "assets/chunk-[hash].js"
        }
      }
    },
    plugins: [crx({ manifest: manifest_default }), vue()]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL21hbmlmZXN0LmpzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFNTQUZZXFxcXERlc2t0b3BcXFxcUzEwUDEyQjEwOFxcXFxhbGdvLWV4dFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcU1NBRllcXFxcRGVza3RvcFxcXFxTMTBQMTJCMTA4XFxcXGFsZ28tZXh0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9TU0FGWS9EZXNrdG9wL1MxMFAxMkIxMDgvYWxnby1leHQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBjcnggfSBmcm9tICdAY3J4anMvdml0ZS1wbHVnaW4nXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi9zcmMvbWFuaWZlc3QuanMnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgcHJvZHVjdGlvbiA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJ1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICAgIG91dERpcjogJ2J1aWxkJyxcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvY2h1bmstW2hhc2hdLmpzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtjcngoeyBtYW5pZmVzdCB9KSwgdnVlKCldLFxyXG4gIH1cclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTU0FGWVxcXFxEZXNrdG9wXFxcXFMxMFAxMkIxMDhcXFxcYWxnby1leHRcXFxcc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTU0FGWVxcXFxEZXNrdG9wXFxcXFMxMFAxMkIxMDhcXFxcYWxnby1leHRcXFxcc3JjXFxcXG1hbmlmZXN0LmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9TU0FGWS9EZXNrdG9wL1MxMFAxMkIxMDgvYWxnby1leHQvc3JjL21hbmlmZXN0LmpzXCI7aW1wb3J0IHsgZGVmaW5lTWFuaWZlc3QgfSBmcm9tICdAY3J4anMvdml0ZS1wbHVnaW4nXHJcbmltcG9ydCBwYWNrYWdlRGF0YSBmcm9tICcuLi9wYWNrYWdlLmpzb24nIGFzc2VydCB7IHR5cGU6ICdqc29uJyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVNYW5pZmVzdCh7XHJcbiAgbmFtZTogcGFja2FnZURhdGEubmFtZSxcclxuICBkZXNjcmlwdGlvbjogcGFja2FnZURhdGEuZGVzY3JpcHRpb24sXHJcbiAgdmVyc2lvbjogcGFja2FnZURhdGEudmVyc2lvbixcclxuICBtYW5pZmVzdF92ZXJzaW9uOiAzLFxyXG4gIGljb25zOiB7XHJcbiAgICAxNjogJ2ltZy9sb2dvLTE2LnBuZycsXHJcbiAgICAzMjogJ2ltZy9sb2dvLTM0LnBuZycsXHJcbiAgICA0ODogJ2ltZy9sb2dvLTQ4LnBuZycsXHJcbiAgICAxMjg6ICdpbWcvbG9nby0xMjgucG5nJyxcclxuICB9LFxyXG4gIGFjdGlvbjoge1xyXG4gICAgZGVmYXVsdF9wb3B1cDogJ3BvcHVwLmh0bWwnLFxyXG4gICAgZGVmYXVsdF9pY29uOiAnaW1nL2xvZ28tNDgucG5nJyxcclxuICB9LFxyXG4gIG9wdGlvbnNfcGFnZTogJ29wdGlvbnMuaHRtbCcsXHJcbiAgZGV2dG9vbHNfcGFnZTogJ2RldnRvb2xzLmh0bWwnLFxyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIHNlcnZpY2Vfd29ya2VyOiAnc3JjL2JhY2tncm91bmQvaW5kZXguanMnLFxyXG4gICAgdHlwZTogJ21vZHVsZScsXHJcbiAgfSxcclxuXHJcbiAgZGVjbGFyYXRpdmVfbmV0X3JlcXVlc3Q6IHtcclxuICAgIHJ1bGVfcmVzb3VyY2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCJydWxlc2V0XCIsXHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBwYXRoOiBcInJ1bGVzLmpzb25cIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICBjb250ZW50X3NjcmlwdHM6IFtcclxuICAgIHtcclxuICAgICAgbWF0Y2hlczogW1xyXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvKlwiXHJcbiAgICAgIF0sXHJcbiAgICAgIGpzOiBbXHJcbiAgICAgICAgXCJzcmMvY29udGVudFNjcmlwdC9pbmRleC5qc1wiLFxyXG4gICAgICAgIFwic3JjL2NvbnRlbnRTY3JpcHQvYmFla2pvb24vYmFla2pvb24uanNcIixcclxuICAgICAgICBcInNyYy9jb250ZW50U2NyaXB0L2JhZWtqb29uL3VzZXIuanNcIixcclxuICAgICAgICBcInNyYy9jb250ZW50U2NyaXB0L2JhZWtqb29uL3N1Ym1pc3Npb24uanNcIixcclxuICAgICAgICBcInNyYy9jb250ZW50U2NyaXB0L2JhZWtqb29uL3N0b3JhZ2UuanNcIixcclxuICAgICAgICBcInNyYy9jb250ZW50U2NyaXB0L2JhZWtqb29uL3V0aWwuanNcIixcclxuICAgICAgXSxcclxuICAgICAgcnVuX2F0OiBcImRvY3VtZW50X2lkbGVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWF0Y2hlczogW1xyXG4gICAgICAgIFwiaHR0cHM6Ly9zY2hvb2wucHJvZ3JhbW1lcnMuY28ua3IvbGVhcm4vY291cnNlcy8zMC9sZXNzb25zLypcIlxyXG4gICAgICBdLFxyXG4gICAgICBqczogWydzcmMvY29udGVudFNjcmlwdC9wcm9ncmFtbWVycy9nZXRQYWdlSW5mby5qcyddLFxyXG4gICAgICBydW5fYXQ6IFwiZG9jdW1lbnRfaWRsZVwiXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgc2lkZV9wYW5lbDoge1xyXG4gICAgZGVmYXVsdF9wYXRoOiAnc2lkZXBhbmVsLmh0bWwnLFxyXG4gIH0sXHJcbiAgd2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzOiBbXHJcbiAgICB7XHJcbiAgICAgIHJlc291cmNlczogWydpbWcvbG9nby0xNi5wbmcnLCAnaW1nL2xvZ28tMzQucG5nJywgJ2ltZy9sb2dvLTQ4LnBuZycsICdpbWcvbG9nby0xMjgucG5nJ10sXHJcbiAgICAgIG1hdGNoZXM6IFtdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIHBlcm1pc3Npb25zOiBbJ3NpZGVQYW5lbCcsICdzdG9yYWdlJywgJ2RlY2xhcmF0aXZlTmV0UmVxdWVzdCcsICdkZWNsYXJhdGl2ZU5ldFJlcXVlc3RXaXRoSG9zdEFjY2VzcyddLFxyXG4gIGhvc3RfcGVybWlzc2lvbnM6IFtcclxuICAgICdodHRwczovL3d3dy5hY21pY3BjLm5ldC8nLFxyXG4gICAgJ2h0dHBzOi8vc2Nob29sLnByb2dyYW1tZXJzLmNvLmtyLycsXHJcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tLycsXHJcbiAgICAnaHR0cHM6Ly9zd2V4cGVydGFjYWRlbXkuY29tLycsXHJcbiAgICAnaHR0cHM6Ly9zb2x2ZWQuYWMvYXBpL3YzLyonXHJcbiAgXSxcclxuICAvLyBjaHJvbWVfdXJsX292ZXJyaWRlczoge1xyXG4gIC8vICAgbmV3dGFiOiAnbmV3dGFiLmh0bWwnLFxyXG4gIC8vIH0sXHJcbn0pXHJcbiIsICJ7XHJcbiAgXCJuYW1lXCI6IFwiYWxnby1leHRcIixcclxuICBcInZlcnNpb25cIjogXCIwLjAuMFwiLFxyXG4gIFwiYXV0aG9yXCI6IFwiRTFJNVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcclxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcclxuICBcImtleXdvcmRzXCI6IFtcclxuICAgIFwiY2hyb21lLWV4dGVuc2lvblwiLFxyXG4gICAgXCJ2dWVcIixcclxuICAgIFwidml0ZVwiLFxyXG4gICAgXCJjcmVhdGUtY2hyb21lLWV4dFwiXHJcbiAgXSxcclxuICBcImVuZ2luZXNcIjoge1xyXG4gICAgXCJub2RlXCI6IFwiPj0xNC4xOC4wXCJcclxuICB9LFxyXG4gIFwic2NyaXB0c1wiOiB7XHJcbiAgICBcImRldlwiOiBcInZpdGVcIixcclxuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXHJcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcclxuICAgIFwiZm10XCI6IFwicHJldHRpZXIgLS13cml0ZSAnKiovKi57dnVlLGpzLGpzb24sY3NzLHNjc3MsbWR9J1wiXHJcbiAgfSxcclxuICBcImRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcImF4aW9zXCI6IFwiXjEuNi41XCIsXHJcbiAgICBcInZ1ZVwiOiBcIl4zLjIuMzdcIlxyXG4gIH0sXHJcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJAY3J4anMvdml0ZS1wbHVnaW5cIjogXCJeMi4wLjAtYmV0YS4xOVwiLFxyXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNC40LjBcIixcclxuICAgIFwicHJldHRpZXJcIjogXCJeMy4wLjNcIixcclxuICAgIFwidml0ZVwiOiBcIl40LjQuMTFcIlxyXG4gIH1cclxufVxy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
