export default function auth({ store, redirect }) {
  console.log(store.state.auth.isLoggedIn)
  if (!store.state.auth.isLoggedIn) {
    return redirect('/login')
  }
}
