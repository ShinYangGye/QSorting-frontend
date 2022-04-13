<script setup>

const submitModal = () => {
	alert("등록완료");
}

</script>

<template>
	<div class="tab-pane fade" id="step2" role="tabpanel" aria-labelledby="tab2">

		<!-- 항목등록 모달창 -->
		<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="staticBackdropLabel">연구보고서 추가</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">


				<nav>
				<div class="nav nav-tabs" id="nav-tab" role="tablist">
					<button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">텍스트</button>
					<button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">이미지</button>
				</div>
				</nav>
				<div class="tab-content" id="nav-tabContent">
				<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

					<div>
						<label for="exampleFormControlTextarea1" class="form-label">연구등록 텍스트</label>
						<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
					</div>					

				</div>
				<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

					<div class="mb-3">
					<label for="formFile" class="form-label">파일선택</label>
					<input class="form-control" type="file" id="formFile">
					</div>

				</div>
				</div>



			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
				<button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="submitModal">등록</button>
			</div>
			</div>
		</div>
		</div>
		<!-- // 항목등록 모달창 -->

		<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
		항목추가 +
		</button>


		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">연구진술서</th>
					<th scope="col"></th>	
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>ㅁㅁㅇㄻㄴㅇㄻㄴㅇㄹ ㅁㄴㅇㄹ ㅁㄴㅇㄹ ㅁㄴㅇㄹ ㅁ</td>
					<td class="text-end">						
						<button type="button" class="btn btn-light p-1"><i class="bi bi-pencil-square"></i></button>						
						<button type="button" class="btn btn-light p-1"><i class="bi bi-x-square"></i></button>					
					</td>
					
				</tr>
			
			</tbody>
		</table>

		<button type="button" class="btn btn-secondary">취소</button>
		<button type="button" class="btn btn-primary mx-1">저장하고 다음단계로</button>

	</div>
</template>