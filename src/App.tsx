import AppRoutes from "components/AppRoutes"
import LoadingScreen from "components/loading/LoadingScreen"
import useAuth from "modules/auth/hooks/useAuth"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { AuthState, useUserStore } from "store/user"

function App() {
  const { checkAuth } = useAuth()
  const { state } = useUserStore()

  useEffect(() => {
    checkAuth()
  }, [])

  if (state === AuthState.LOADING) return <LoadingScreen />
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  )
}

export default App
