<template>
	<div class="mt-2">
		<div class="d-flex justify-content-between mb-2">
			<h4>비밀번호 변경</h4>
			<span>계정관리 / 비밀번호 변경</span>
		</div>
		
		<div class="mb-3">
			<label for="currentPassword" class="form-label">현재 비밀번호</label>
			<input type="password" class="form-control" id="currentPassword">
		</div>
		
		<div class="mb-3">
			<label for="password" class="form-label">변경할 비밀번호</label>
			<input type="password" class="form-control" id="password">
		</div>		
		
		<div class="mb-3">
			<label for="passwordConfirm" class="form-label">변경할 비밀번호 확인</label>
			<input type="password" class="form-control" id="passwordConfirm">
		</div>			

		<button type="button" class="btn btn-primary">수정완료</button>
		<button type="button" class="btn btn-secondary mx-1">취소</button>


	</div>
</template>