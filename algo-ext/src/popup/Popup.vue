<script setup lang="js">

</script>

<template>
  <main class="container">
    <div class="tier-box">
      <p class="tier-title">TIER</p>
      <img src="../assets/tier/star_master.svg" alt="tier-master" />
      <p class="tier-username">SSAFY</p>
      <p class="tier-tier">MASTER</p>
    </div>
    <div class="logo-box">
      <img src="../assets/logo/logo_dark.svg" alt="logo" />
    </div>
    <div class="today-box">
      <p class="today-title">TODAY</p>
      <div class="today-solved">
        <p class="today-solved-count1">5</p>
        <p class="today-solved-count2">문제</p>
      </div>
    </div>
    <div class="box">
    </div>
    <div class="streak-box">
    </div>
  </main>
</template>

<style>
@font-face {
  font-family: "던파 연단된 칼날 L";
  src: url("../assets/font/DNFForgedBlade-Light.ttf");
}
@font-face {
  font-family: "던파 연단된 칼날 M";
  src: url("../assets/font/DNFForgedBlade-Medium.ttf");
}
@font-face {
  font-family: "던파 연단된 칼날 B";
  src: url("../assets/font/DNFForgedBlade-ExtraBold.ttf");
}


:root {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  width: 18.5rem;
  height: 16.3rem;
  background-color: #3E4058;
}

.container {
  display: flex;
}

/* 티어 */
.tier-box {
  width: 8rem;
  height: 8rem;
  flex-shrink: 0;
  
  border-radius: 0.5rem;
  background: #302D41;
  border: 1px solid #6901b9;
  position: absolute;
  top: 1.12rem;
  left: 1rem;
  
  display: flex;
  flex-direction: column;

  img {
    width: 60%;
    margin: 18% auto;
  };
  
  .tier-title {
    z-index: 10;
    position: absolute;
    margin: 0.5rem;

    color: #CDD6F4;
    font-family: "던파 연단된 칼날 L";
    font-size: 0.75rem;
    font-weight: 500;
    text-shadow: -1px 0 #302D41, 0 1px #302D41, 1px 0 #302D41, 0 -1px #302D41;
  };

  .tier-username {
    z-index: 10;
    position: absolute;
    margin: 0.5rem;
    top: 4.5rem;
    
    
    color: #CDD6F4;
    font-family: "던파 연단된 칼날 B";
    font-size: 1.25rem;
    font-weight: 700;
    text-shadow: -1px 0 #302D41, 0 1px #302D41, 1px 0 #302D41, 0 -1px #302D41;
  }

  .tier-tier {
    z-index: 10;
    position: absolute;
    margin: 0.5rem;
    top: 6rem;

    color: #CDD6F4;
    font-family: "던파 연단된 칼날 L";
    font-size: 0.75rem;
    font-weight: 500;
    font-style: italic;
    text-shadow: -1px 0 #302D41, 0 1px #302D41, 1px 0 #302D41, 0 -1px #302D41;
  }
}

/* 티어-hover */
.tier-box:hover{
  box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.2);
  img {
    transform: scale(1.5, 1.5) rotate(60deg);
    transform-origin: 50% 56%;
    transition: transform 0.5s ease-in-out;
  }
  .tier-title {
    font-weight: 700;
  }
  .tier-username {
    transform: scale(1.05, 1.05);
    transform-origin: 0% 50%;
  }
  .tier-tier {
    transform: scale(1.05, 1.05);
    transform-origin: 0% 50%;
  }

}

/* 로고 */
.logo-box {
  width: 8rem;
  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #8F00FF;
  border: 1px solid #333044;
  position: absolute;
  top: 1.12rem;
  /* left: 1rem + 8rem + 0.5rem; */
  left: 9.5rem;

  display: flex;

  img {
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    width: 70%;
    margin: auto;
  }
}

/* 로고-hover */
.logo-box:hover {
  box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.3);
  border: 0px;

  background: #9f22ff;
  img {
    transform: scale(1.14, 1.14);
    transform-origin: 50% 50%;
    transition: transform 0.3s ease-in-out;
  }
}

/* 투데이 */
.today-box {
  width: 3.75rem;
  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #302D41;
  border: 1px solid #6901b9;

  position: absolute;
  /* top: 1.12rem + 3.75rem + 0.5rem; */
  top: 5.37rem;
  /* left: 1rem + 8rem + 0.5rem; */
  left: 9.5rem;

  .today-title{
    z-index: 10;
    position: absolute;
    margin: 0.3rem;
    
    color: #CDD6F4;
    font-family: "던파 연단된 칼날 L";
    font-size: 0.6rem;
    font-weight: 500;
    text-shadow: -1px 0 #302D41, 0 1px #302D41, 1px 0 #302D41, 0 -1px #302D41;
  }
  
  .today-solved{  
    color: #CDD6F4;
    text-shadow: -1px 0 #302D41, 0 1px #302D41, 1px 0 #302D41, 0 -1px #302D41;
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: -0.8rem;
  }
  
  .today-solved-count1{
    font-family: "던파 연단된 칼날 B";
    font-weight: 600;

    z-index: 10;
    font-size: 1.8rem;
 }

  .today-solved-count2{
    font-family: "던파 연단된 칼날 M";
    z-index: 10;
    font-size: 0.8rem;
    margin-top: 1.51rem;
    margin-left: 0.1rem;
  }
}

/* 투데이-hover */
.today-box:hover {
  box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.2);

  .today-title {
    font-weight: 700;
  }

  .today-solved-count1{
    transform: scale(1.05, 1.05);
    transform-origin: 0% 50%;
  }

  .today-solved-count2{
    transform: scale(1.05, 1.05);
    transform-origin: 0% 50%;
  }

}

.box {
  width: 3.75rem;
  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #302D41;
  border: 1px solid #6901b9;

  position: absolute;
  /* top: 1.12rem + 3.75rem + 0.5rem; */
  top: 5.37rem;
  /* left: 1rem + 8rem + 0.5rem + 3.75rem + 0.5rem; */
  left: 13.75rem;

}

.streak-box {
  width: 16.5rem;
  height: 5.5rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #302D41;
  border: 1px solid #6901b9;

  position: absolute;
  /* top: 1.12rem + 8rem + 0.5rem; */
  top: 9.63rem;
  left: 1rem;
}
</style>
