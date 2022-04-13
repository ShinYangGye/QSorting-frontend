<script setup>
import { ref } from '@vue/reactivity';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const currentDate = new Date();
const nextDate = new Date();
nextDate.setDate(nextDate.getDate() + 30); // 초기 종료일은 오늘날짜 + 30일

const dateFrom = ref(currentDate); // 시작일
const dateEnd = ref(nextDate); // 종료일

const flow = ref(['year', 'month', 'calendar']); // DatePicker 선택방식

const formatFrom = (dateFrom) => {
	return format(dateFrom);
}

const formatEnd = (dateEnd) => {
	return format(dateEnd);
}

// 날짜 포맷
const format = (date) => {
	const year = date.getFullYear();
	const org_month = date.getMonth();
	const month = org_month < 10 ? '0' + (org_month +1) : org_month + 1;
	const day = date.getDate();

	const org_hour = date.getHours();
	const org_min = date.getMinutes();

	const hour = org_hour < 10 ? '0' + org_hour : org_hour;
	const min = org_min < 10 ? '0' + org_min : org_min;

	return `${year}/${month}/${day} ${hour}:${min}`;
}

</script>

<template>
	<div class="tab-pane fade show active" id="step1" role="tabpanel" aria-labelledby="tab1">
		<strong>일반설정</strong>
		<div class="border border-1 bg-light mb-4 p-2">
			<p class="setting_guide_text">연구의 제목, 연구 날짜 및 연구의 색 구성표와 같은 연구의 일반 설정을 관리합니다.</p>
			
			<div class="mb-3">
				<label for="title" class="form-label">연구제목</label>
				<input type="text" class="form-control" id="title">
			</div>


			<div class="row mb-3">

				

				<div class="col-md-6 position-relative">
					<label for="validationTooltip01" class="form-label">시작일시</label>
					<Datepicker v-model="dateFrom" locale="ko" :flow="flow" :format="formatFrom" />
				</div>
				<div class="col-md-6 position-relative">
					<label for="validationTooltip02" class="form-label">종료일시</label>
					<Datepicker v-model="dateEnd" locale="ko" :flow="flow" :format="formatEnd" />
				</div>
			</div>

			<div>
				<label for="exampleFormControlTextarea1" class="form-label">연구에 대한 설명을 제공합니다(본인만 볼 수 있음).</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>

		</div>

		<strong>참가코드입력관리</strong>
		<div class="border border-1 bg-light mb-4 p-2">
			<p class="setting_guide_text">연구에서 참여 코드를 사용하는 경우 연구의 코드 입력 페이지에 표시되는 텍스트를 관리할 수 있습니다.</p>

				<p>연구에 참여 코드를 사용하고 있습니까?</p>
				<button type="button" class="btn btn-primary">예</button>
				<button type="button" class="btn btn-secondary mx-1">아니요</button>
			
		</div>					

		<strong>이메일관리</strong>
		<div class="border border-1 bg-light mb-4 p-2">
			<p class="setting_guide_text">이러한 설정을 통해 참가자에게 보낼 초대 이메일 및 미리 알림 이메일과 이메일 미리 알림 빈도를 구성할 수 있습니다.</p>
			<div>
				<label for="exampleFormControlTextarea1" class="form-label">초대 이메일 템플릿</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>						
		</div>

		<strong>동의관리</strong>
		<div class="border border-1 bg-light mb-4 p-2">
			<p class="setting_guide_text">참가자가 연구에 참여하면 동의 양식이 나타납니다. 이 설정을 사용하면 동의 페이지에서 참가자에게 표시되는 콘텐츠를 관리할 수 있습니다.</p>
			<div>
				<label for="exampleFormControlTextarea1" class="form-label">동의 텍스트</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>						
		</div>

		<strong>지시관리</strong>
		<div class="border border-1 bg-light mb-4 p-2">
			<p class="setting_guide_text">연구 참가자에게 어떤 지침을 표시하고 싶습니까? 아래 이 필드에 학습 지침을 붙여넣습니다.</p>
			<div>
				<label for="exampleFormControlTextarea1" class="form-label">지침 텍스트</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>						
		</div>

		<strong>자극관리</strong>
		<div class="border border-1 bg-light mb-4 p-2">
			<p class="setting_guide_text">연구의 사전 정렬 및 q-정렬 단계 전에 텍스트, 비디오 또는 이미지와 같은 자극을 참가자에게 제시할 수 있습니다. 아래 필드를 사용하여 연구의 자극 페이지에 내용을 추가하십시오.</p>
			<div>
				<label for="exampleFormControlTextarea1" class="form-label">지침 텍스트</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>						
		</div>

		<strong>최종정렬지침</strong>
		<div class="border border-1 bg-light mb-4 p-2">
			<p class="setting_guide_text">연구 참가자에게 맞춤형 최종 정렬 지침을 제공합니다.</p>
			<div>
				<label for="exampleFormControlTextarea1" class="form-label">지침 텍스트</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>						
		</div>

		<strong>Q-소트관리</strong>
		<div class="border border-1 bg-light mb-4 p-2">
			<p class="setting_guide_text">마지막 qsort 단계에서 참가자는 q-sort 배포 그리드에 자신의 진술을 배치합니다. 특정 연구에 대해 구성할 수 있는 다양한 설정이 있습니다.</p>
			<div>
				<label for="exampleFormControlTextarea1" class="form-label">Q-Sort 도움말 텍스트</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>						
		</div>

		<strong>완료관리</strong>
		<div class="border border-1 bg-light mb-4 p-2">
			<p class="setting_guide_text">참가자가 q-sort를 제출하면 연구 완료를 나타내는 최종 페이지가 표시됩니다. 이 페이지에 어떤 콘텐츠를 표시하시겠습니까?</p>
			<div>
				<label for="exampleFormControlTextarea1" class="form-label">완성 텍스트</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>						
		</div>

		<button type="button" class="btn btn-secondary">취소</button>
		<button type="button" class="btn btn-primary mx-1">저장하고 다음단계로</button>
		

	</div>
</template>