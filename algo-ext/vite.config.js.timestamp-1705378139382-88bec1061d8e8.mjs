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
    jquery: "^3.7.1",
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
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*"],
      js: ["src/contentScript/index.js"]
    },
    {
      matches: [
        "https://www.acmicpc.net/*"
      ],
      js: [
        "src/contentScript/index.js"
      ],
      "run_at": "document_idle"
    }
  ],
  side_panel: {
    default_path: "sidepanel.html"
  },
  // web_accessible_resources: [
  //   {
  //     resources: ['img/logo-16.png', 'img/logo-34.png', 'img/logo-48.png', 'img/logo-128.png'],
  //     matches: [],
  //   },
  // ],
  // permissions: ['sidePanel', 'storage'],
  // chrome_url_overrides: {
  //   newtab: 'newtab.html',
  // },
  permissions: [
    "unlimitedStorage",
    "storage"
    // "declarativeNetRequest",
    // "declarativeNetRequestWithHostAccess"
  ],
  host_permissions: [
    "https://www.acmicpc.net/",
    // "https://school.programmers.co.kr/",
    // "https://github.com/",
    // "https://swexpertacademy.com/",
    "https://solved.ac/api/v3/*"
  ],
  web_accessible_resources: [
    {
      matches: [
        "<all_urls>"
      ],
      resources: [
        // "library/jquery-3.3.1.min.js",
        // "library/semantic.min.js",
        "src/popup/index.js",
        "src/popup/popup.vue"
      ]
    }
  ]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL21hbmlmZXN0LmpzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFNTQUZZXFxcXERlc2t0b3BcXFxcUzEwUDEyQjEwOFxcXFxhbGdvLWV4dFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcU1NBRllcXFxcRGVza3RvcFxcXFxTMTBQMTJCMTA4XFxcXGFsZ28tZXh0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9TU0FGWS9EZXNrdG9wL1MxMFAxMkIxMDgvYWxnby1leHQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBjcnggfSBmcm9tICdAY3J4anMvdml0ZS1wbHVnaW4nXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi9zcmMvbWFuaWZlc3QuanMnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgcHJvZHVjdGlvbiA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJ1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICAgIG91dERpcjogJ2J1aWxkJyxcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvY2h1bmstW2hhc2hdLmpzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtjcngoeyBtYW5pZmVzdCB9KSwgdnVlKCldLFxyXG4gIH1cclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTU0FGWVxcXFxEZXNrdG9wXFxcXFMxMFAxMkIxMDhcXFxcYWxnby1leHRcXFxcc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTU0FGWVxcXFxEZXNrdG9wXFxcXFMxMFAxMkIxMDhcXFxcYWxnby1leHRcXFxcc3JjXFxcXG1hbmlmZXN0LmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9TU0FGWS9EZXNrdG9wL1MxMFAxMkIxMDgvYWxnby1leHQvc3JjL21hbmlmZXN0LmpzXCI7aW1wb3J0IHsgZGVmaW5lTWFuaWZlc3QgfSBmcm9tICdAY3J4anMvdml0ZS1wbHVnaW4nXHJcbmltcG9ydCBwYWNrYWdlRGF0YSBmcm9tICcuLi9wYWNrYWdlLmpzb24nIGFzc2VydCB7IHR5cGU6ICdqc29uJyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVNYW5pZmVzdCh7XHJcbiAgbmFtZTogcGFja2FnZURhdGEubmFtZSxcclxuICBkZXNjcmlwdGlvbjogcGFja2FnZURhdGEuZGVzY3JpcHRpb24sXHJcbiAgdmVyc2lvbjogcGFja2FnZURhdGEudmVyc2lvbixcclxuICBtYW5pZmVzdF92ZXJzaW9uOiAzLFxyXG4gIGljb25zOiB7XHJcbiAgICAxNjogJ2ltZy9sb2dvLTE2LnBuZycsXHJcbiAgICAzMjogJ2ltZy9sb2dvLTM0LnBuZycsXHJcbiAgICA0ODogJ2ltZy9sb2dvLTQ4LnBuZycsXHJcbiAgICAxMjg6ICdpbWcvbG9nby0xMjgucG5nJyxcclxuICB9LFxyXG4gIGFjdGlvbjoge1xyXG4gICAgZGVmYXVsdF9wb3B1cDogJ3BvcHVwLmh0bWwnLFxyXG4gICAgZGVmYXVsdF9pY29uOiAnaW1nL2xvZ28tNDgucG5nJyxcclxuICB9LFxyXG4gIG9wdGlvbnNfcGFnZTogJ29wdGlvbnMuaHRtbCcsXHJcbiAgZGV2dG9vbHNfcGFnZTogJ2RldnRvb2xzLmh0bWwnLFxyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIHNlcnZpY2Vfd29ya2VyOiAnc3JjL2JhY2tncm91bmQvaW5kZXguanMnLFxyXG4gICAgdHlwZTogJ21vZHVsZScsXHJcbiAgfSxcclxuICBjb250ZW50X3NjcmlwdHM6IFtcclxuICAgIHtcclxuICAgICAgbWF0Y2hlczogWydodHRwOi8vKi8qJywgJ2h0dHBzOi8vKi8qJ10sXHJcbiAgICAgIGpzOiBbJ3NyYy9jb250ZW50U2NyaXB0L2luZGV4LmpzJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtYXRjaGVzOiBbXHJcbiAgICAgICAgXCJodHRwczovL3d3dy5hY21pY3BjLm5ldC8qXCJcclxuICAgICAgXSxcclxuICAgICAganM6IFtcclxuICAgICAgICBcInNyYy9jb250ZW50U2NyaXB0L2luZGV4LmpzXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIFwicnVuX2F0XCI6IFwiZG9jdW1lbnRfaWRsZVwiXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgc2lkZV9wYW5lbDoge1xyXG4gICAgZGVmYXVsdF9wYXRoOiAnc2lkZXBhbmVsLmh0bWwnLFxyXG4gIH0sXHJcbiAgLy8gd2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzOiBbXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHJlc291cmNlczogWydpbWcvbG9nby0xNi5wbmcnLCAnaW1nL2xvZ28tMzQucG5nJywgJ2ltZy9sb2dvLTQ4LnBuZycsICdpbWcvbG9nby0xMjgucG5nJ10sXHJcbiAgLy8gICAgIG1hdGNoZXM6IFtdLFxyXG4gIC8vICAgfSxcclxuICAvLyBdLFxyXG4gIC8vIHBlcm1pc3Npb25zOiBbJ3NpZGVQYW5lbCcsICdzdG9yYWdlJ10sXHJcbiAgLy8gY2hyb21lX3VybF9vdmVycmlkZXM6IHtcclxuICAvLyAgIG5ld3RhYjogJ25ld3RhYi5odG1sJyxcclxuICAvLyB9LFxyXG4gIHBlcm1pc3Npb25zOiBbXHJcbiAgICBcInVubGltaXRlZFN0b3JhZ2VcIixcclxuICAgIFwic3RvcmFnZVwiLFxyXG4gICAgLy8gXCJkZWNsYXJhdGl2ZU5ldFJlcXVlc3RcIixcclxuICAgIC8vIFwiZGVjbGFyYXRpdmVOZXRSZXF1ZXN0V2l0aEhvc3RBY2Nlc3NcIlxyXG4gIF0sXHJcbiAgaG9zdF9wZXJtaXNzaW9uczogW1xyXG4gICAgXCJodHRwczovL3d3dy5hY21pY3BjLm5ldC9cIixcclxuICAgIC8vIFwiaHR0cHM6Ly9zY2hvb2wucHJvZ3JhbW1lcnMuY28ua3IvXCIsXHJcbiAgICAvLyBcImh0dHBzOi8vZ2l0aHViLmNvbS9cIixcclxuICAgIC8vIFwiaHR0cHM6Ly9zd2V4cGVydGFjYWRlbXkuY29tL1wiLFxyXG4gICAgXCJodHRwczovL3NvbHZlZC5hYy9hcGkvdjMvKlwiXHJcbiAgXSxcclxuICB3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXM6IFtcclxuICAgIHtcclxuICAgICAgbWF0Y2hlczogW1xyXG4gICAgICAgIFwiPGFsbF91cmxzPlwiXHJcbiAgICAgIF0sXHJcbiAgICAgIHJlc291cmNlczogW1xyXG4gICAgICAgIC8vIFwibGlicmFyeS9qcXVlcnktMy4zLjEubWluLmpzXCIsXHJcbiAgICAgICAgLy8gXCJsaWJyYXJ5L3NlbWFudGljLm1pbi5qc1wiLFxyXG4gICAgICAgIFwic3JjL3BvcHVwL2luZGV4LmpzXCIsXHJcbiAgICAgICAgXCJzcmMvcG9wdXAvcG9wdXAudnVlXCIsXHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdLFxyXG59KVxyXG4iLCAie1xyXG4gIFwibmFtZVwiOiBcImFsZ28tZXh0XCIsXHJcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjBcIixcclxuICBcImF1dGhvclwiOiBcIkUxSTVcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXHJcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXHJcbiAgXCJrZXl3b3Jkc1wiOiBbXHJcbiAgICBcImNocm9tZS1leHRlbnNpb25cIixcclxuICAgIFwidnVlXCIsXHJcbiAgICBcInZpdGVcIixcclxuICAgIFwiY3JlYXRlLWNocm9tZS1leHRcIlxyXG4gIF0sXHJcbiAgXCJlbmdpbmVzXCI6IHtcclxuICAgIFwibm9kZVwiOiBcIj49MTQuMTguMFwiXHJcbiAgfSxcclxuICBcInNjcmlwdHNcIjoge1xyXG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXHJcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxyXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCIsXHJcbiAgICBcImZtdFwiOiBcInByZXR0aWVyIC0td3JpdGUgJyoqLyoue3Z1ZSxqcyxqc29uLGNzcyxzY3NzLG1kfSdcIlxyXG4gIH0sXHJcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJqcXVlcnlcIjogXCJeMy43LjFcIixcclxuICAgIFwidnVlXCI6IFwiXjMuMi4zN1wiXHJcbiAgfSxcclxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkBjcnhqcy92aXRlLXBsdWdpblwiOiBcIl4yLjAuMC1iZXRhLjE5XCIsXHJcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl40LjQuMFwiLFxyXG4gICAgXCJwcmV0dGllclwiOiBcIl4zLjAuM1wiLFxyXG4gICAgXCJ2aXRlXCI6IFwiXjQuNC4xMVwiXHJcbiAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsU0FBUyxvQkFBb0I7QUFDelYsU0FBUyxXQUFXO0FBQ3BCLE9BQU8sU0FBUzs7O0FDRm9ULFNBQVMsc0JBQXNCOzs7QUNBblc7QUFBQSxFQUNF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
