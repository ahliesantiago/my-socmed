import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import { SessionContext } from './components/contexts/SessionContext'
import MainLayout from './layouts/MainLayout'
import NotFound from './pages/NotFound'
import DashboardPage from './pages/DashboardPage'
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

const storedSession = JSON.parse(localStorage.getItem('session'))
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={
                <SessionContext.Provider value={storedSession}>
                    <MainLayout />
                </SessionContext.Provider>
            }>
            <Route path="*" element={<NotFound />}></Route>
            <Route index element={<DashboardPage />} />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route path="/join" element={<AuthPage />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)