export default function auth ({store,redirect}) {
    // If the user is not authenticated
    // if (!store.state.authenticated) {
      // return redirect('/login')
    // }
    // console.log(`hello from auth middleeware`)
    console.log(store.state.auth.isLoggedIn)
  }