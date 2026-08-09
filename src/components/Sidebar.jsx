import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import Logo from '../elements/Logo'

import '../styles/components/Sidebar.scss'

const routes = [
  {
    name: 'home',
    path: '/',
    icon: false,
    dark: true,
  },
  {
    name: 'art',
    path: '/art',
    icon: 'color_lens',
  },
  {
    name: 'code',
    path: '/code',
    icon: 'code',
  },
  {
    name: 'resume',
    path: '/resume',
    icon: 'assignment_ind',
  },
  {
    name: 'feats',
    path: '/achievements',
    icon: 'stars',
  },
  {
    name: 'links',
    path: '/links',
    icon: 'launch',
  },
]

const Sidebar = ({
  darkMode,
  setDarkMode,
}) => {
  const { pathname } = useLocation()
  const isActive = ({ icon, path }) =>{
    if (icon) {
      return pathname.indexOf(path) >= 0
    } else {
      return pathname === '/' 
    }
  }

  return (
    <ul id='sidebar'>
      {routes.map(route => 
        <li key={route.name}>
          <Link
            to={route.path}
            className={`${route.dark ? 'dark' : ''}\
            ${isActive(route) ? 'active' : ''}`}
          >
            {route.icon ? 
              <i className='material-icons'>{route.icon}</i>
              : 
              <Logo link={false} />
            }
            <label>{route.name}</label>
          </Link>
        </li>
      )}
      <li>
        <button
          className='dark end'
          onClick={() => setDarkMode(oldMode => !oldMode)}
        >
          <i className='material-icons'>dark_mode</i>
          <label>{darkMode ? 'light' : 'dark'} mode</label>
        </button>
      </li>
    </ul>
  )
}

export default Sidebar
