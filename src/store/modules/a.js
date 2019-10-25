export const moduleA = {
  //注意module中的getters需要特殊处理，否则将会注入到全局命名空间中去
  namespaced: true,
  state: {
    a: 22
  },
  getters: {
    a(state) {
      return state.a + '..........'
    }
  },
  mutations: {},
  actions: {}
}
