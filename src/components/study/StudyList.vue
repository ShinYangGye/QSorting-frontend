<script setup>
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();


</script>

<template>

	<div class="mt-2">
		<div class="d-flex justify-content-between mb-2">
			<h4>연구목록</h4>
			<span>연구관리 / 연구목록</span>
		</div>

		<button type="button" class="btn btn-primary mb-2" @click="router.push({name: 'study-create'})">연구생성 + </button>

		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">연구명</th>
					<th scope="col">시작일시</th>		
					<th scope="col">종료일시</th>	
					<th scope="col">참여자수</th>
					<th scope="col">완료자수</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>가나다</td>
					<td>2022/12/12 12:12:00</td>
					<td>2022/12/12 12:12:00</td>
					<td>00</td>
					<td>00</td>
				</tr>
			
			</tbody>
		</table>

		


	</div>



	<div>{{ userStore.userProfie }}</div>
</template>