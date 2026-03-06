import { RouterProvider } from "react-router-dom"
import { router } from "./App.routes"
import "./features/Shared/style/global.scss"
import { AuthProvider } from "./features/Auth/Auth.context"
import { SongContextProvider } from "./features/Auth/home/song.context"

function App() {

  return ( 
  <AuthProvider>
    <SongContextProvider>
     
        <RouterProvider router={router} />
      
    </SongContextProvider>
     </AuthProvider>
  )
}

export default App