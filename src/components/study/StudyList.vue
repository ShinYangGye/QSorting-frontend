<script setup>
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();


</script>

<template>
	<h1>연구목록</h1>
	<div>{{ userStore.userProfie }}</div>
</template>