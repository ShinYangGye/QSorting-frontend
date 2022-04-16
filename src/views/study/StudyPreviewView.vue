<script setup>
import { reactive } from '@vue/reactivity';
import { provide } from '@vue/runtime-core';
import PageTitle from '../../components/common/PageTitle.vue';

const pageData = reactive({
	title: "연구미리보기",
	path: "연구관리 / 연구미리보기",
});

provide('pageData', pageData);

</script>

<template>
	<PageTitle />
</template>