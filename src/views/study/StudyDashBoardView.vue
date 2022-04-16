<script setup>
import DashboardMain from '../../components/study/dashboard/DashboardMain.vue';
import { reactive } from '@vue/reactivity';
import { provide } from '@vue/runtime-core';
import PageTitle from '../../components/common/PageTitle.vue';

const pageData = reactive({
	title: "연구대시보드",
	path: "연구관리 / 대시보드",
});

provide('pageData', pageData);

</script>

<template>
	<PageTitle />
	<DashboardMain />
</template>