<template>
	<aside class="bd-sidebar m-0">
		<nav class="collapse bd-links" id="bd-docs-nav" aria-label="Docs navigation">
			
			<ul class="list-unstyled mb-0 py-3 pt-md-1">

				<li class="mb-1">
					<button class="btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#forms-collapse" aria-expanded="true" aria-current="true">
						연구관리
					</button>

					<div class="collapse show" id="forms-collapse">
						<ul class="list-unstyled fw-normal pb-1 small">
							
							<div>
								<li>
									<router-link class="d-inline-flex align-items-center rounded active" :to="{name: 'study-list'}" aria-current="page">
										<i class="bi bi-list-columns-reverse"></i><span class="mx-1">연구목록</span>
									</router-link>
								</li>
							</div>
						
							<div v-show="true">
								<li>
									<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'study-dashboard'}">
										<i class="bi bi-graph-up-arrow"></i><span class="mx-1">연구대시보드</span>
									</router-link>
								</li>
								<li>
									<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'study-edit'}">
										<i class="bi bi-pencil-square"></i><span class="mx-1">연구수정</span>
									</router-link>
								</li>
								<li>
									<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'study-items'}">
										<i class="bi bi-menu-button-wide"></i><span class="mx-1">연구응답항목관리</span>
									</router-link>
								</li>
								<li>
									<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'study-sorting'}">
										<i class="bi bi-diagram-3-fill"></i><span class="mx-1">정렬분포관리</span>
									</router-link>
								</li>
								<li>
									<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'study-survey'}">
										<i class="bi bi-bar-chart-line"></i><span class="mx-1">설문조사관리</span>
									</router-link>
								</li>
								<li>
									<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'study-participation'}">
										<i class="bi bi-calendar-week"></i><span class="mx-1">참여코드</span>
									</router-link>
								</li>
								<li>
									<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'study-preview'}">
										<i class="bi bi-file-easel"></i><span class="mx-1">연구미리보기</span>
									</router-link>
								
								</li>
							</div>							
							
						</ul>
					</div>
				</li>

				<li class="mb-1">
					<button class="btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#getting-started-collapse" aria-expanded="true">
						계정관리
					</button>

					<div class="collapse show" id="getting-started-collapse">
						<ul class="list-unstyled fw-normal pb-1 small">
							<li>
								<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'account-mng'}">
									<i class="bi bi-person-square"></i><span class="mx-1">사용자관리</span>
								</router-link>
							</li>
							<li>
								<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'account-edit'}">
									<i class="bi bi-pencil-square"></i><span class="mx-1">계정수정</span>
								</router-link>
							</li>
							<li>
								<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'account-password'}">
									<i class="bi bi-check-square"></i><span class="mx-1">비밀번호 변경</span>
								</router-link>
							</li>
						
						</ul>
					</div>
				</li>

			</ul>

			
		</nav>

	</aside>	
</template>

<style scoped>
/*
.bd-links .btn::before {
    width: 1.25em;
    line-height: 0;
    content: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e);
    transition: transform 0.35s ease;
    transform-origin: 0.5em 50%;
}
*/
</style>