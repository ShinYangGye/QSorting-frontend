<template>
	<div class="mt-2">
		<div class="d-flex justify-content-between mb-2">
			<h4>사용자목록</h4>
			<span>계정관리 / 사용자목록</span>
		</div>

		<button type="button" class="btn btn-primary">사용자추가 + </button>

		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">이름</th>
					<th scope="col">이메일</th>		
					<th scope="col"></th>	
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>홍길동</td>
					<td>test@gmail.com</td>
					<td class="text-end">						
						<button type="button" class="btn btn-light p-1"><i class="bi bi-pencil-square"></i></button>						
						<button type="button" class="btn btn-light p-1"><i class="bi bi-x-square"></i></button>					
					</td>
					
				</tr>
			
			</tbody>
		</table>

		


	</div>
</template>