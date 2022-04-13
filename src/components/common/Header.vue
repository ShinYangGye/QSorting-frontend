<script setup>
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

</script>

<template>
	<header class="navbar navbar-expand-md navbar-dark bd-navbar">
		<nav class="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">
			
			<!-- 로고 아이콘 버튼 -->
			<router-link class="navbar-brand p-0 me-2" to="/">
				<i class="bi bi-app-indicator" style="font-size: 2rem; color: white;"></i> 
				<span class="px-2">Q-Sorting Software</span>
			</router-link>				
			
			<!-- 모바일 탑메뉴 아이콘 버튼 -->
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
				<i class="bi bi-list" style="font-size: 2rem; color: white;"></i>
			</button>

			<div class="collapse navbar-collapse" id="bdNavbar">
				
				<ul class="navbar-nav flex-row flex-wrap ms-md-auto">
					<li class="nav-item col-6 col-md-auto">
						<router-link class="nav-link p-2" :to="{name: 'guide'}">사용가이드</router-link>
					</li>					
					<li class="nav-item col-6 col-md-auto">
						<router-link class="nav-link p-2 active" aria-current="true" :to="{name: 'qna'}">문의사항</router-link>
					</li>
				</ul>

				<hr class="d-md-none text-white-50">

				<ul class="navbar-nav flex-row flex-wrap ms-md-auto" v-if="!userStore.isLogined">
					<li class="nav-item col-6 col-md-auto">
						<router-link class="nav-link p-2" :to="{name: 'register'}">회원가입</router-link>
					</li>	
					<li class="nav-item col-6 col-md-auto">
						<router-link class="nav-link p-2" :to="{name: 'login'}">로그인</router-link>
					</li>								
				</ul>

				<ul class="navbar-nav flex-row flex-wrap ms-md-auto" v-else>
					<li class="nav-item col-6 col-md-auto">
						<router-link class="nav-link p-2" :to="{name: 'study-list'}">{{ userStore.userProfie.name }}</router-link>
					</li>
					<li class="nav-item col-6 col-md-auto">
						<a type="button" class="nav-link p-2" @click="userStore.userLogout">로그아웃</a>
					</li>

				</ul>

			</div>
		</nav>
	</header>	
</template>