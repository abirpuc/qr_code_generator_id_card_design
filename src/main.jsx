import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SinglePerson from './SinglePerson.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    loader: async()=>{
      return fetch('user.json')
    }
  },
  {
    id: 1,
    path: '/singlepeson/:id',
    element: <SinglePerson />,
    loader: async({params}) =>{
      return params
    }
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
     <Home/>
    </RouterProvider>
  </React.StrictMode>,
)
