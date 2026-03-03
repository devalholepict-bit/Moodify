import { RouterProvider } from "react-router-dom"
import { router } from "./App.routes"
import "./features/Shared/style/global.scss"
import { AuthProvider } from "./features/Auth/Auth.context"

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App