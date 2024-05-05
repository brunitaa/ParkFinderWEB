import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
    
  },
  {
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
   
  },
  {
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
   
  },
]

export default _nav
