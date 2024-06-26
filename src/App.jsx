import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './header-footer/Header'
import Footer from './header-footer/Footer'
import { SideBarContextProvider } from './context/toggle'
import { useState } from 'react'
import Home from './components/Home.jsx'

function App() {
  const [sideBar, setSideBar] = useState(false)

  return (
    <SideBarContextProvider value={{ sideBar, setSideBar }}>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </SideBarContextProvider>
  )
}

export default App
