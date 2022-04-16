<script setup>
import StudyHeaderTab from "../../components/study/create/StudyHeaderTab.vue";
import StudyDetailSetting from "../../components/study/create/StudyDetailSetting.vue";
import StudyItems from "../../components/study/create/StudyItems.vue";
import StudyGrid from "../../components/study/create/StudyGrid.vue";
import StudyNext from "../../components/study/create/StudyNext.vue";
import PageTitle from "../../components/common/PageTitle.vue";

import { reactive } from '@vue/reactivity';
import { provide } from '@vue/runtime-core';

const pageData = reactive({
	title: "연구추가",
	path: "연구관리 / 연구추가",
});

provide('pageData', pageData);

</script>


<template>
	<PageTitle />
	<div>
		<div class="pb-5">
			<!-- 헤더탭 -->
			<StudyHeaderTab />

			<div class="tab-content" id="pills-tabContent">

				<StudyDetailSetting />
				
				<StudyItems />

				<StudyGrid />

				<StudyNext />
			</div>

		</div>

	</div>

</template>
