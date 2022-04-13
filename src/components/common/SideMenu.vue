<template>
	<aside class="bd-sidebar">
		<nav class="collapse bd-links" id="bd-docs-nav" aria-label="Docs navigation">
			
			<ul class="list-unstyled mb-0 py-3 pt-md-1">
				<li class="mb-1">
					<button class="btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#forms-collapse" aria-expanded="true" aria-current="true">
						연구관리
					</button>

					<div class="collapse show" id="forms-collapse">
						<ul class="list-unstyled fw-normal pb-1 small">
							
							<li>
								<router-link class="d-inline-flex align-items-center rounded active" :to="{name: 'study-list'}" aria-current="page">
									<i class="bi bi-list-columns-reverse"></i><span class="mx-1">연구목록</span>
								</router-link>
							</li>
						
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
							<li>
								<router-link class="d-inline-flex align-items-center rounded" :to="{name: 'study-board'}">
									<i class="bi bi-arrow-left-square"></i><span class="mx-1">테스트</span>
								</router-link>
							</li>
						</ul>
					</div>
				</li>

			</ul>

			
		</nav>

	</aside>	
</template>
