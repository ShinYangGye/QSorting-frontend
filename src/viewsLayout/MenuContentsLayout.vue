<script setup>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import MobileMenuBtn from '@/components/common/MobileMenuBtn.vue';
import SideMenu from '@/components/common/SideMenu.vue';
import StudyList from '../views/study/StudyListView.vue';

import { useRoute, useRouter } from 'vue-router';

const router =useRouter();
const route = useRoute();
const routeName = route.name;


console.log(routeName);

</script>

<template>
	<!-- 상단 네비게이션 메뉴 바 -->
	<Header />

	<!-- 모바일 사이드 메뉴 확장 아이콘 버튼 -->
	<MobileMenuBtn />

	<!-- 로그인 완료 후 컨텐츠 -->
	<div class="container-xxl bd-layout">

		<!-- 왼쪽 사이드 메뉴 -->
		<SideMenu />

		<main class="order-1">
			<div class="bd-content ps-lg-4">
			
        		<router-view />

			</div>
		</main>		
	</div>

	<!-- Footer -->
	<Footer />

</template>

<style lang="scss">
/* @import '@/assets/docs.scss'; */

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

</style>