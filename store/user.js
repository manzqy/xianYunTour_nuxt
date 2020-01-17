export const state = () => ({
  userInfo: {}
})
export const mutations = {
  loginUser (state, data) {
    // eslint-disable-next-line no-console
    console.log(data)
    state.userInfo = data
  }
}
