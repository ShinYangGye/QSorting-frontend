<script setup>
import { reactive, ref } from '@vue/reactivity';
import { computed, watch } from '@vue/runtime-core';
import { useUserStore } from './stores/userStore';

// 사용자 상태정보
const userStore = useUserStore();

// 일정시간 간격으로 권한 토큰을 갱신한다.
const setTokenRefreshTimer = () => {
    
    let tokenRefreshTimer = setInterval(() => {
      userStore.getUserRefreshToken();

      // 로그아웃일 경우 토큰갱신 타이머를 비활성화
      if (!userStore.isLogined) {
        clearInterval(tokenRefreshTimer);
      }
      
    }, 1000*60*55); // 토큰만료시간 1시간 이내에 갱신(55분)
};

// 새로고침 할 경우 로컬스토리지에 토큰이 존재하면 토큰을 새로 갱신하고 사용자 프로필을 조회한다.
let accessToken = localStorage.getItem("accessToken");
if (accessToken != null) {
  setTokenRefreshTimer();
  userStore.getUserProfile();
}

watch(
  () => userStore.isLogined,
  (curVal, preVal) => {

    // 로그인 할 경우 토큰갱신 타이머를 활성화 한다.
    if (curVal) {
        setTokenRefreshTimer();
    }

  }
)

</script>

<template>
  <router-view />
</template>

<style>
@import '@/assets/docs.css';

.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    margin-right: 0;
    margin-left: 0;
}

@media (min-width: 1400px) {
  .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
      /* max-width: 1320px; */
      max-width: 100%;
  }
}

body {
  font-size: 11pt;
}

.form-control, .btn {
  font-size: 11pt;
}


.setting_guide_text {
  font-style: italic;  
}

</style>
