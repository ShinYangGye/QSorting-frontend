import { createRouter, createWebHistory } from 'vue-router'

// import HomeView from '@/views/HomeView.vue'

// 사이드메뉴 없는 레이아웃 페이지
const OnlyContentsLayout = () => import('@/viewsLayout/OnlyContentsLayout.vue'); // 레이아웃
const HomeView = () => import('@/views/HomeView.vue');              // 홈페이지
const GuideView = () => import('@/views/general/GuideView.vue');    // 사용가이드
const QnaView = () => import('@/views/general/QnaView.vue');        // 문의사항
const LoginView = () => import('@/views/user/LoginView.vue');       // 로그인
const RegisterView = () => import('@/views/user/RegisterView.vue'); // 회원가입

// 사이드메뉴 있는 레이아웃 페이지
// 연구관련 메뉴
const MenuContentsLayout = () => import('@/viewsLayout/MenuContentsLayout.vue');  // 레이아웃
const StudyListView = () => import('@/views/study/StudyListView.vue');            // 연구목록
const StudyCreateView = () => import('@/views/study/StudyCreateView.vue');            // 연구생성
const StudyDashBoardView = () => import('@/views/study/StudyDashBoardView.vue');  // 연구대시보드
const StudyEditView = () => import('@/views/study/StudyEditView.vue');            // 연구수정
const StudyItemsView = () => import('@/views/study/StudyItemsView.vue');          // 연구응답항목관리
const StudySortingView = () => import('@/views/study/StudySortingView.vue');      // 연구 정렬분포관리
const StudySurveyView = () => import('@/views/study/StudySurveyView.vue');        // 연구 설문관리
const StudyParticipationView = () => import('@/views/study/StudyParticipationView.vue');  //연구 참여코드관리
const StudyPreviewView = () => import('@/views/study/StudyPreviewView.vue');              // 연구 미리보기

// 계정관련 메뉴
const AccountMngView = () => import('../views/account/AccountMngView.vue'); // 사용자 관리
const AccountEditView = () => import('@/views/account/AccountEditView.vue');  // 계정수정
const PasswordEditView = () => import('@/views/account/PasswordEditView.vue'); // 비밀번호변경

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    // 사이드메뉴 없는 레이아웃
    {
      path: '/',
      name: 'main',    
      component: OnlyContentsLayout,
      children: [
        {
          path: '/',
          name: 'home',    
          component: HomeView
        },
        {
          path: '/guide',
          name: 'guide',    
          component: GuideView
        },
        {
          path: '/qna',
          name: 'qna',    
          component: QnaView
        },
        {
          path: '/login',
          name: 'login',    
          component: LoginView
        },
        {
          path: '/register',
          name: 'register',    
          component: RegisterView
        },
      ]
    },

    // 사이드 메뉴 있는 레이아웃
    {
      path: '/sort',
      name: 'sort',    
      component: MenuContentsLayout,
      children: [

        // 연구관리
        {
          path: '/study/list',
          name: 'study-list',    
          component: StudyListView
        },
        {
          path: '/study/create',
          name: 'study-create',    
          component: StudyCreateView
        },
        {
          path: '/study/dashboard',
          name: 'study-dashboard',    
          component: StudyDashBoardView
        },
        {
          path: '/study/edit',
          name: 'study-edit',    
          component: StudyEditView
        },
        {
          path: '/study/items',
          name: 'study-items',    
          component: StudyItemsView
        },
        {
          path: '/study/sorting',
          name: 'study-sorting',    
          component: StudySortingView
        },
        {
          path: '/study/survey',
          name: 'study-survey',    
          component: StudySurveyView
        },
        {
          path: '/study/participation',
          name: 'study-participation',    
          component: StudyParticipationView
        },
        {
          path: '/study/preview',
          name: 'study-preview',    
          component: StudyPreviewView
        },

        // 계정관리
        {
          path: '/account/mng',
          name: 'account-mng',    
          component: AccountMngView
        },
        {
          path: '/account/eidt',
          name: 'account-edit',    
          component: AccountEditView
        },
        {
          path: '/account/password',
          name: 'account-password',    
          component: PasswordEditView
        },      

      ]
    },
  ]
})

export default router
