<script setup>
import { inject } from "@vue/runtime-core";

const pageData = inject("pageData");

</script>

<template>
	<div class="d-flex justify-content-between mt-2 mb-2">
		<h4>{{ pageData.title }}</h4>
		<span>{{ pageData.path }}</span>
	</div>
</template>