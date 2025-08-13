import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminSideBar from '../../components/admin/AdminSideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <AdminNavbar/>
    <div className='flex'>
        <AdminSideBar/>
        <div className='flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
           <Outlet/>  {/*in simple terms oulet act as placeholder 
           if current url is admin then dasboard will be rendered in this place 
           if current url is admin/listshow then ListShows components will be rendered in this section
            */}

        </div>
    </div>


    </>
  )
}

export default Layout