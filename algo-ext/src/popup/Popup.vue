<script setup lang="js">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const count = ref(0)
const link = ref('https://github.com/guocaoyi/create-chrome-ext')

const minus = () => {
  if (count.value > 0) count.value--
}
const add = () => count.value++

onMounted(() => {
  chrome.storage.sync.get(['count'], (result) => {
    count.value = result.count || 0
  })
})

watch(count, (newCount) => {
  chrome.storage.sync.set({ count: newCount })

  chrome.runtime.sendMessage({ type: 'COUNT', count: count.value })
})
</script>

<template>
  <main>
    <a href="https://edu.ssafy.com/">
      <img class="logo" src="../assets/logo2.png"  alt="logo">
    </a>

    <div class="info-box">
      <span class="tier">
        <svg xmlns="http://www.w3.org/2000/svg" height="70" width="70" viewBox="0 0 576 512">
          <path fill="#a600ff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        </svg>
        <p class="bold">Master</p>
      </span>
      <span class="info">
        <p>김싸피싸피 님</p>
        <span class="bold">3일</span>
        <span>째 달리는 중!</span>
      </span>
    </div>
    <div class="strick">
      <!-- <span class="strick-item" v-for="item in 7"></span> -->
      <p class="strick-activate"></p>
      <p class="strick-activate"></p>
      <p class="strick-activate"></p>
      <p class="strick-deactivate"></p>
      <p class="strick-deactivate"></p>
      <p class="strick-deactivate"></p>
      <p class="strick-deactivate"></p>
    </div>
  </main>
</template>

<style>
:root {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;

  color-scheme: light dark;
  background-color: #242424;
}

@media (prefers-color-scheme: light) {
  :root {
    background-color: #fafafa;
  }

  a:hover {
    color: #42b983;
  }
}

.bold {
  font-weight: bold;
}

body {
  min-width: 20rem;
  color-scheme: light dark;
}

main {
  text-align: center;
  padding: 1em;
  margin: 0 auto;
}

.logo {
  margin: 1.5rem 0;
}

.info-box{
  display: flex;
  /* text-align: left; */
  flex-direction: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}
.tier {
  > p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
}
.info {
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  text-align: left;
  font-size: 1.2rem;
  > p {
    text-align: left;
    padding: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
  }
  > span {
    text-align: left;
    padding: 0;
    margin: 0rem;
  }
}

.strick{
  display: flex;
  justify-content: center;
  flex-direction: wrap;
}

.strick-activate {
  width: 2rem;
	height: 2rem;
  margin: 0.2rem;
  background-color: #9981b1;
  border-radius: 10%;
}

.strick-deactivate {
  width: 2rem;
	height: 2rem;
  margin: 0.2rem;
  background-color: #c8c8c8;
  border-radius: 10%;
}
</style>
