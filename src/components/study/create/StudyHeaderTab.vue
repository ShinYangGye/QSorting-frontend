<template>

	<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
		<li class="nav-item" role="presentation">
			<button class="nav-link active" id="tab1" data-bs-toggle="pill" data-bs-target="#step1" type="button" role="tab" aria-controls="pills-step1" aria-selected="true">
				상세정보등록
			</button>
		</li>
		<li class="nav-item" role="presentation">
			<button class="nav-link disabled" id="tab2" data-bs-toggle="pill" data-bs-target="#step2" type="button" role="tab" aria-controls="pills-step2" aria-selected="false">
				중앙홀등록
			</button>
		</li>
		<li class="nav-item" role="presentation">
			<button class="nav-link" id="tab3" data-bs-toggle="pill" data-bs-target="#step3" type="button" role="tab" aria-controls="pills-step3" aria-selected="false">
				그리드구성
			</button>
		</li>
		<li class="nav-item" role="presentation">
			<button class="nav-link" id="tab4" data-bs-toggle="pill" data-bs-target="#step4" type="button" role="tab" aria-controls="pills-step4" aria-selected="false">
				등록정보확인
			</button>
		</li>
	</ul>

</template>

<style scoped>

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #000;
    background-color: #FFA663;
}

.nav-pills .nav-link.disabled, .nav-pills .show > .nav-link {
    color: #000;
    background-color: #DDD7C6;
}

</style>