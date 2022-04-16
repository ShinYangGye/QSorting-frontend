<script setup>
import StudyList from '@/components/study/StudyList.vue';
import PageTitle from '../../components/common/PageTitle.vue';
import { reactive } from '@vue/reactivity';
import { provide } from '@vue/runtime-core';

const pageData = reactive({
	title: "연구목록",
	path: "연구관리 / 연구목록",
});

provide('pageData', pageData);

</script>

<template>
	<PageTitle />
	<StudyList />
</template>
