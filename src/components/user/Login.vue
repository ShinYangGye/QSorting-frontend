<script setup>
import { reactive, ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

// 라우터
const router = useRouter();

// 사용자정보 상태관리
const userStore = useUserStore();

// 진행중 버튼 상태
const isGoing = ref(false);

// 로그인 정보
const loginObj = reactive({
	email: '',
	password: ''
});

// 로그인 처리
const submitLogin = async () => {
	isGoing.value = true;
	await userStore.userLogin(loginObj);
	isGoing.value = false;

	if (userStore.isLogined) {
		router.push({name: "study-list"});
	}
}

</script>

<template>

	<div class="row align-items-center justify-content-center p-2">

		<div class="col-md-7 col-lg-4 col-xl-3 p-2">
			<h2>로그인</h2>
			<form @submit.prevent="submitLogin">
				<!-- 이메일 -->
				<div class="form-outline mb-4">
					<label class="form-label" for="email">이메일</label>
					<input type="email" id="email" class="form-control" v-model="loginObj.email" />
					
				</div>

				<!-- 비밀번호 -->
				<div class="form-outline mb-4">
					<label class="form-label" for="password">비밀번호</label>
					<input type="password" id="passowrd" class="form-control" v-model="loginObj.password" />
					
				</div>

				<div class="d-flex justify-content-around align-items-center mb-4">
					<!-- Checkbox -->
					<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="saveId" checked />
					<label class="form-check-label" for="saveId"> 아이디 저장 </label>
					</div>
					<a href="#">아이디/비밀번호 찾기</a>
				</div>

				<!-- Submit button -->
				<div class="d-grid">
					<button type="submit" class="btn btn-primary" :disabled="isGoing">로그인</button>
				</div>       

			</form>
		</div>
	</div>


</template>