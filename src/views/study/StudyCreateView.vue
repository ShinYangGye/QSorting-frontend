<script setup>
import StudyHeaderTab from "../../components/study/create/StudyHeaderTab.vue";
import StudyDetailSetting from "../../components/study/create/StudyDetailSetting.vue";
import StudyItems from "../../components/study/create/StudyItems.vue";
import StudyGrid from "../../components/study/create/StudyGrid.vue";
import StudyNext from "../../components/study/create/StudyNext.vue";

</script>


<template>
	<div class="mt-2">
		<div class="d-flex justify-content-between mb-2">
			<h4>연구생성</h4>
			<span>연구생성 / 상세정보등록</span>
		</div>
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
