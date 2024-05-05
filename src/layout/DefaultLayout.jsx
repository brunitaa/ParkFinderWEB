import { Sidebar } from '@coreui/coreui'
import React from 'react'
import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'
import AppSidebar from '../components/SideBar'

const DefaultLayout = () => {
  return (
    <div className="wrapper d-flex flex-row min-vh-100">
   
      <div className="d-flex flex-column flex-grow-1">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent/>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
