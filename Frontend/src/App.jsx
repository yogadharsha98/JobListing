import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayouts from './layouts/MainLayouts'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' index element={<JobsPage />} />
      <Route path='/job/:id' index element={<JobPage />} />
      <Route path='/add-job' index element={<AddJobPage />} />
      <Route path='/edit-job/:id' index element={<EditJobPage />} />
      <Route path='/*' index element={<NotFoundPage />} />
      
    </Route>
  )
  
)

const App = () => {

  return (
   <RouterProvider router={router} />
  )
}

export default App
