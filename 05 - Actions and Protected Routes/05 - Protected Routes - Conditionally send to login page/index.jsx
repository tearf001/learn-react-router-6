import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import Layout from "./Layout"
import AuthRequired from "./AuthRequired"

const ProtectElementMock = () => {
  console.log('u rendered me')
  alert('u rendered me')
  return <h1>Super secret info here</h1>
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<h1>Home page</h1>} />
    
    <Route element={<AuthRequired />}>
      <Route path="protected" loader={()=>alert("loaded Parallel?") || null} 
        element={<ProtectElementMock/>} />
    </Route>
    
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)