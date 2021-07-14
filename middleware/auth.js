export default function auth(context) {
  // console.log(`context`)
  // console.log(context.route.name)
  // console.log(this.$router)
  if (!context.store.state.auth.isLoggedIn && context.route.name !== 'login' ) {
    return context.redirect('/login')
  }
}
