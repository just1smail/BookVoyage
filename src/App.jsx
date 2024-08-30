import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Basket, GetById, Home, Login } from './routes/routes'
import ProtectedRout from './utils/protectedRoute/protectedRoute'
import AuthCheck from './utils/authCheck/authCheck'
import { AuthProvider } from './context/AuthContext'



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:
      <ProtectedRout>
      <Suspense fallback={<h1>LOADING...</h1>}>
      <Home/>
      </Suspense>
      </ProtectedRout>
    },
    {
      path: "/:id",
      element: 
      <Suspense fallback={<h1>LOADING...</h1>}>
      <GetById/>
      </Suspense>
    },
    {
      path: "/login",
      element: 
      <AuthCheck>
      <Suspense fallback={<h1>LOADING...</h1>}>
      <Login/>
      </Suspense>
      </AuthCheck>
    },
    {
      path: "/basket",
      element: 
      <Suspense fallback={<h1>LOADING...</h1>}>
      <Basket/>
      </Suspense>
    },
  ])
  return <RouterProvider router={router}/>
}

export default App