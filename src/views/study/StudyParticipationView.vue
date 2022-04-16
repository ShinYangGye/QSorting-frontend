<script setup>
import { reactive } from '@vue/reactivity';
import { provide } from '@vue/runtime-core';
import PageTitle from '../../components/common/PageTitle.vue';

const pageData = reactive({
	title: "참여코드",
	path: "연구관리 / 참여코드",
});

provide('pageData', pageData);

</script>

<template>
	<PageTitle />
</template>