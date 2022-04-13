<script setup>

import { reactive, ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

// 라우터
const router = useRouter();

// 사용자정보 상태괸리
const userStore = useUserStore();

// 진행중 버튼 상태
const isGoing = ref(false);



// 회원가입정보
const joinObj = reactive({
	name: 'bbbb',
	email: 'bbbb@test.com',
	password: 'bbbb',
	passwordConfirm: 'bbbb'
});

// 회원가입
const submitJoin = async () => {	
	isGoing.value = true;
	await userStore.userJoin(joinObj);	
	isGoing.value = false;

	initJoinObj();	

	// 회원가입 성공 후 로그인 페이지로 이동
	if(userStore.isJoined) {
		router.push({name: 'login'});
	} 
	
}

// 가입정보 초기화
const initJoinObj = () => {
	joinObj.name = '';
	joinObj.email = '';
	joinObj.password = '';
	joinObj.passwordConfirm = '';
}

</script>

<template>

	<div class="row align-items-center justify-content-center p-2">

		<div class="col-md-7 col-lg-4 col-xl-3 p-2">
			<h2>회원가입</h2>

			<form @submit.prevent="submitJoin">		
			<!-- 사용자 이름 -->
			<div class="form-outline mb-4">
				<label class="form-label" for="name">사용자 이름</label>
				<input type="text" id="name" class="form-control" v-model="joinObj.name" />				
			</div>

			<!-- 이메일 -->
			<div class="form-outline mb-4">
				<label class="form-label" for="email">이메일</label>
				<input type="email" id="email" class="form-control" v-model="joinObj.email" />				
			</div>

			<!-- 패스워드 -->
			<div class="form-outline mb-4">
				<label class="form-label" for="password">비밀번호</label>
				<input type="password" id="password" class="form-control" v-model="joinObj.password" />
			</div>

			<!-- 패스워드 -->
			<div class="form-outline mb-4">
				<label class="form-label" for="passwordConfirm">비밀번호 확인</label>
				<input type="password" id="passwordConfirm" class="form-control" v-model="joinObj.passwordConfirm" />
			</div>
			
			<!-- Submit button -->
			<div class="d-grid">
				<button type="submit" class="btn btn-primary" :disabled="isGoing">회원가입</button>
			</div>       
			</form>

		</div>
	</div>


</template>