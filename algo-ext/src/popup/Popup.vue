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
        <p class="today-solved-count1">15</p>
        <p class="today-solved-count2">문제</p>
      </div>
    </div>
    <div class="box">
    </div>
    <div class="streak-box">
      <p class="streak-title">STREAK</p>
      <p class="streak-continuous">연속 <strong>5일 째</strong></p>
      <div class="streak-and-more-container">
        <ul class="streak-container">
          <li class="streak-deactive"></li>
          <li class="streak-deactive"></li>
          <li class="streak-active"></li>
          <li class="streak-active"></li>
          <li class="streak-active"></li>
          <li class="streak-active"></li>
          <li class="streak-active streak-today"></li>
        </ul>
        <p class="streak-more">. . .</p>
      </div>
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
  src: url("../assets/font/DNFForgedBlade-Bold.ttf");
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
    transition: font-weight 0.3s ease-in-out;
  }
  .tier-username {
    transform: scale(1.05, 1.05);
    transform-origin: 0% 50%;
    transition: transform 0.3s ease-in-out;
  }
  .tier-tier {
    transform: scale(1.05, 1.05);
    transform-origin: 0% 50%;
    transition: transform 0.3s ease-in-out;
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
    margin: 0.5rem;

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
  }
  
  .today-solved-count1{
    font-family: "던파 연단된 칼날 M";
    /* font-weight: 600; */
    
    z-index: 10;
    font-size: 1.4rem;
  }
  
  .today-solved-count2{
    font-family: "던파 연단된 칼날 L";
    z-index: 10;
    font-size: 0.7rem;
    margin-top: 1rem;
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
    font-family: "던파 연단된 칼날 B";
    transform: scale(1.05, 1.05);
    transform-origin: 100% 50%;
  }

  .today-solved-count2{
    transform: scale(1.05, 1.05);
    transform-origin: 0% 70%;
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

/* 스트릭 */
.streak-box {
  width: 16.5rem;
  height: 5.5rem;
  border-radius: 0.5rem;
  background: #302D41;
  border: 1px solid #6901b9;

  position: absolute;
  /* top: 1.12rem + 8rem + 0.5rem; */
  top: 9.63rem;
  left: 1rem;
  
  .streak-title{
    z-index: 10;
    position: absolute;
    margin: 0.5rem;
    color: #CDD6F4;
    font-family: "던파 연단된 칼날 L";
    font-size: 0.7rem;
    font-weight: 500;
    text-shadow: -1px 0 #302D41, 0 1px #302D41, 1px 0 #302D41, 0 -1px #302D41;
  }

  .streak-continuous{
    z-index: 10;
    position: absolute;
    margin: 0.4rem;
    top: 0.9rem;

    color: #CDD6F4;
    font-size: 1.4rem;

    font-family: "던파 연단된 칼날 L";
  }

  .streak-and-more-container {
    display: flex;
    position: relative;
    top: 3.1rem;
    justify-content: space-between;
  }

  .streak-container{
    padding-left: 0;
    display: flex;
    z-index: 10;
    margin: 0.55rem;
    justify-content: flex-start;
    gap: 0.2rem;
  }

  .streak-active {
    width: 1.2rem;
    height: 1.2rem;
    background-color: #CBA6F7;
    border-radius: 0.1875rem;
    list-style:none;
  }

  .streak-deactive {
    width: 1.2rem;
    height: 1.2rem;
    background-color: #D9E0EE;
    border-radius: 0.1875rem;
    list-style: none;
  }
  

  .streak-more {
    z-index: 10;
    margin-right: 1rem;

    top: 0.9rem;

    color: #CDD6F4;
    font-size: 0.8rem;

    font-family: "던파 연단된 칼날 L";

  }
}

.streak-box:hover {
  box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.2);

  .streak-title{
    font-weight: 700;
    transition: font-weight 0.3s ease-in-out;
  }

  .streak-continuous{
    transform: scale(1.03, 1.03);
    transform-origin: 50% 100%;
    transition: transform 0.3s ease-in-out;

  }

  .streak-today {
    z-index: 9;
    box-shadow: 0 0 3px 3px rgba(255, 255, 255, 0.5);
    transition: box-shadow 0.3s ease-in-out;

  }

}
</style>
