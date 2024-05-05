import React from 'react'


import Dashboard from './pages/DashBoard'


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashBoard', name: 'Dashboard', element: Dashboard },
  
]

export default routes
