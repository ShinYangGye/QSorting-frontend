<script setup>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
</script>

<template>
	<!-- 상단 네비게이션 메뉴 바 -->
	<Header />

	<!-- 컨텐츠 -->
	<div class="container-fluid">
        <router-view />
	</div>

	<!-- 하단 Footer -->
	<Footer />

</template>

<style>
@import '@/assets/docs.css';

@media (min-width: 768px) {
  .bd-layout {
      display: contents;   
  }
}
</style>