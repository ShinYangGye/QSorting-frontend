<script setup>
import { reactive, ref } from "@vue/reactivity";

// 초기 그리드 세팅
const gridObj = reactive({
  arrMain: []
});

let arr1 = [0];
let arr2 = [-1, 0, 1];
let arr3 = [-2, -1, 0, 1, 2];

gridObj.arrMain.push(arr1);
gridObj.arrMain.push(arr2);
gridObj.arrMain.push(arr3);

// 마지막 배열
// const lastIndex = gridObj.arrMain.length-1;
const lastRow = gridObj.arrMain[gridObj.arrMain.length-1];

// 상단 + 버튼 클릭시 Row 추가
const addRow = () => {
	let newArr = [0];
	gridObj.arrMain.unshift(newArr);
}

// 우측 + 버튼 클릭시 Col 추가
const addCol = (row) => {
	
	// Col 추가시 맨 하단 그리드 갯수를 초과하는지 체크
	let lastIndex = gridObj.arrMain.length-1;
	if (row < lastIndex) {		
		if(!gridAddCheck(row)) {
			alert("하단 그리드 갯수를 초과할 수 없습니다.");
			return;
		}		
	}

	// Col 그리드 추가
	let selArr = gridObj.arrMain[row];
	console.log("addCol===>", selArr);

	let min = Math.min.apply(Math, selArr)    // 1
	let max = Math.max.apply(Math, selArr)    // 3

	selArr.push(max+1);
	selArr.unshift(min-1);

}

// - 버튼 클릭시 Row 삭제
const removeRow = () => {
  gridObj.arrMain.splice(0, 1);
}

// - 버튼 클릭시 Col 삭제
const removeCol = (row) => {

	// Col 추가시 맨 하단 그리드 갯수를 초과하는지 체크
	if (row > 0) {		
		if(!gridRemoveCheck(row)) {
			alert("상단 그리드 갯수 미만일 수 없습니다.");
			return;
		}		
	}

	console.log("removeCol");
	let selArr = gridObj.arrMain[row];
	selArr.splice(0, 1);
	selArr.splice(selArr.length-1, 1);

}

// 그리드 추가 삭제시 체크
const gridAddCheck = (row) => {	
	let currentRowLength = gridObj.arrMain[row].length;
	let downRowLength = gridObj.arrMain[row+1].length;

	console.log("gridAddCheck > currentRowLength : " + currentRowLength);
	console.log("gridAddCheck > downRowLength : " + downRowLength);

	if (currentRowLength >= downRowLength) {
		return false;
	} else {
		return true;
	}
}

const gridRemoveCheck = (row) => {
	let currentRowLength = gridObj.arrMain[row].length;
	let upRowLength = gridObj.arrMain[row-1].length;

	console.log("gridRemoveCheck > currentRowLength : " + currentRowLength);
	console.log("gridRemoveCheck > upRowLength : " + upRowLength);

	if (upRowLength >= currentRowLength) {
		return false;
	} else {
		return true;
	}
}

</script>

<template>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>


<div class="tab-pane fade" id="step3" role="tabpanel" aria-labelledby="tab3">


	<div class="mb-2">
		<div class="mb-1">
			<button type="button" class="btn btn-secondary">취소</button>
			<button type="button" class="btn btn-primary mx-1">저장하고 다음단계로</button>
		</div>

		<div class="alert alert-success d-flex align-items-center mb-0" role="alert">
			<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
			<div>
				귀하의 배포는 귀하의 연구에 있는 진술의 수를 기반으로 유효합니다.
			</div>
		</div>

		<div class="alert alert-danger d-flex align-items-center mb-0" role="alert">
			<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
			<div>
				현재 q-sort 분포는 6개의 명령문을 지원하지만 귀하의 연구에는 7개의 명령문이 포함되어 있습니다.
			</div>
		</div>


	</div>

<div class="p-5" style="overflow: auto; width: 100%;">

	<div class="d-flex justify-content-center">
		<div type="button" class="d-flex align-items-center justify-content-center grid-btn" @click="addRow">+</div>
		<div class="d-flex align-items-center justify-content-center grid-btn"></div>
	</div>
	<div class="d-flex justify-content-center" v-for="(i, rowIndex) in gridObj.arrMain" :key="rowIndex">
		<div class="grid" :class="{'grid-bg-plus': j>0, 'grid-bg-minus': j<0}" v-for="(j, colIndex) in i" :key="colIndex">

			<div v-if="i.length == 1">
				<div type="button" class="d-flex align-items-center justify-content-center grid-btn" v-if="rowIndex == 0" @click="removeRow">-</div>
			</div>
			<div v-else>
				<div type="button" class="d-flex align-items-center justify-content-center grid-btn" v-if="i.length == colIndex+1" @click="removeCol(rowIndex)">-</div>
			</div>
			
		</div>
		<div type="button" class="d-flex align-items-center justify-content-center grid-btn" @click="addCol(rowIndex)">+</div>
	</div>	
	
	<div class="d-flex justify-content-center">
		<div class="grid-bottom" v-for="n in lastRow" :key="n">{{ n }}</div>
    	<div class="grid-bottom"></div>
	</div>

</div>

</div>
</template>

<style scoped>

.grid {
	background-color: #ccc;
	border: 1px solid #aaa;
	width: 60px;
	height: 80px;
	margin: 1px;
}
.grid-btn {
	width: 60px;
	height: 80px;
	margin: 1px;	
	font-weight: bold;
	font-size: 15pt;
}
.grid-bottom {
	width: 60px;
	height: 80px;
	margin: 1px;	
	text-align: center;
}

.grid-bg-plus {
	background-color: #aaa;
}

.grid-bg-minus {
	background-color: #eee;
}

</style>