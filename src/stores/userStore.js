import { defineStore } from 'pinia'
import { postUserJoin, postUserLogin, getProfile, getRefreshToken } from '@/api/userApi';
import router from '../router';

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    isJoined: false,  // 회원가입완료 여부
    isLogined: false, // 로그인완료 여부
    userProfie: {},
  }),
  getters: {
    
  },
  actions: {
    increment() {
      this.counter++
    },

    // 회원가입
    async userJoin(joinObj) {
      try {        
        const res = await postUserJoin(joinObj);    
        this.isJoined = true;            
        alert("회원가입 성공");        
      } catch (error) {
        this.isJoined = false;
        alert(error.response.data.code);
      }
    },

    // 로그인
    async userLogin(loginObj) {
      try {

        // 로그인 인증 토큰을 가져온다
        const res = await postUserLogin(loginObj);
        const accessToken = res.data.token;
        console.log('accessToken : ', accessToken);
        
        localStorage.setItem("accessToken", accessToken);
        this.isLogined = true;
        
        // 로그인 사용자 프로필정보를 조회한다.
        await this.getUserProfile();
        
        // alert("로그인 완료");
      } catch (error) {
        this.isLogined = false;
        alert(error.response.data.code);
      }
    },

    // 로그아웃
    async userLogout() {
      this.isLogined = false;
      this.userProfie = false;
      localStorage.removeItem("accessToken");
      router.push({name: "home"});
    },

    // 로그인 프로필 조회
    async getUserProfile() {
      try {
        const res = await getProfile();
        this.userProfie = res.data;
        this.isLogined = true;
      } catch (error) {
        // alert(error.response.data.code);
        this.userLogout();
      }  
    },

    // 토큰 리프레시
    async getUserRefreshToken() {
      try {
        const res = await getRefreshToken();
        const accessToken = res.data.token;
        console.log('refreshToken #### ', accessToken);
        localStorage.setItem("accessToken", accessToken); 
        this.isLogined = true;        
      } catch (error) {
        // alert(error.response.data.code);
        this.userLogout();
      }
    }
  }
})
