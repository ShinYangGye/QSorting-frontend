<script setup>
import { ref } from "@vue/reactivity";

const isExpend = ref(false);

const toggleBtn = () => {
	isExpend.value = !isExpend.value;
}

</script>

<template>

	<nav aria-label="Secondary navigation">
		<div class="d-flex justify-content-between">
			<div>
				<button class="btn d-md-none order-3 collapsed py-0" type="button" data-bs-toggle="collapse" data-bs-target="#bd-docs-nav" aria-controls="bd-docs-nav" aria-expanded="false" aria-label="Toggle docs navigation" @click="toggleBtn">
					<i class="bi bi-arrow-down-square" style="font-size: 2rem; color: black;" v-if="!isExpend"></i>
					<i class="bi bi-arrow-up-square" style="font-size: 2rem; color: black;" v-else></i>
				</button>
			</div>
			<!-- 
			<div>
				<button class="btn d-md-none order-3 collapsed py-0" type="button">
					<i class="bi bi-person-square"  style="font-size: 2rem; color: black;"></i>
				</button>				
			</div>
			-->
		</div>
	</nav>	
   
</template>