declare module '@vue/runtime-core' {
  // 글로벌 컴포넌트 인터페이스로 등록
  // 인터페이스로 등록하는 불편함 때문에 unplugin-vue-components라는 라이브러리 추천
  export interface GlobalComponents {
    AppModal: typeof import ('./src/components/app/AppModal.vue')['default']
    AppGrid : typeof import ('./src/components/app/AppGrid.vue')['default']
    AppCard : typeof import ('./src/components/app/AppCard.vue')['default']
    AppAlert: typeof import ('./src/components/app/AppAlert.vue')['default']
    AppPagination: typeof import ('./src/components/app/AppPagination.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}
export {}