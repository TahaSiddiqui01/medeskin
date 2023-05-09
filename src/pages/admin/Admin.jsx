import React, { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import AdminSidebar from '../../components/AdminSidebar';

export default function Admin() {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const toggleProfileDropdown = () => {
    setProfile(!profile)
  };


  const collapseSidebar = () => {
    setCollapse(!collapse)
  };

  const closeDropdown = () => {
    if(profile === true){
      setProfile(false)
    }
  }

  const Logout = () => {
    localStorage.removeItem('token')
    navigate('/admin/login')
  }

  function GetUser() {
    let token = localStorage.getItem('token')
    if (token === null) {
      return navigate('/admin/login');
    }  else {
      return navigate('/admin/dashboard')
    }
  }

  useEffect(() => {

    GetUser()
  }, [])

  return (
    <div>
      <section className={collapse ? "admin-layout collpase-sidebar" : "admin-layout"} id="admin" onClick={ closeDropdown }>
        {/* <!-- sidebar menu --> */}
        <AdminSidebar />
        {/* <!-- main content --> */}
        <div className="main-content relative md:ml-64 bg-slate-50 transition-all duration-300">
          {/* <!-- nav menu main content top --> */}
          <nav className="sticky top-0 z-50 flex bg-white h-14 border-b w-screen transition-position lg:w-auto lg:items-stretch border-gray-100 right-menu">
            <div className="flex-1 items-center flex h-14 pl-2">
              {/* <!-- collapse sidebar icon --> */}
              <button className="lg:flex items-center grow-0 shrink-0 relative cursor-pointer text-black whitespace-nowrap py-2 px-3" onClick={collapseSidebar}>
                <span className="inline-flex justify-center items-center w-10 h-10">
                  {collapse ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: '#000000' }}>
                        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                      </svg>
                    </> :
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="inline-block" viewBox="0 0 50 50" style={{ fill: '#000000' }}>
                        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                      </svg>
                    </>}
                </span>
              </button>
              <Link className="text-coolGray-500 hover:text-coolGray-900 font-medium" to='/'>Home</Link>
            </div>
            <div className="w-screen bg-white shadow lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none hidden">
              <div className="max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto">
                
                {/* <!-- admin dropdown --> */}
                <div className="block items-center grow-0 shrink-0 relative cursor-pointer text-black whitespace-nowrap lg:flex p-0 lg:py-2 lg:px-3 lg:border-r border-gray-100 lg:dark:border-gray-800 dropdown">
                  <button className="flex items-center py-2 px-3  lg:bg-transparent hover:text-cyan-400 lg:dark:bg-transparent bg-gray-100" type="button" data-dropdown-toggle="profile-menu" onClick={toggleProfileDropdown}>
                    <span className="px-2 capitalize transition-colors">Welcome, Admin</span>
                    <span className="justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
                      <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                      </svg>
                    </span>
                  </button>
                  {profile ?
                    <>
                      <div className="dropdown-menu text-sm border-b lg:border-b-0 lg:border-gray-200 lg:border-t lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b lg: border-gray-100" id="profile-menu">
                        <div className="flex items-center grow-0 shrink-0 relative cursor-pointer text-black whitespace-nowrap py-2 px-3 hover:text-cyan-400" onClick={Logout}>
                          <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                            <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                              <path fill="currentColor" d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
                            </svg>
                          </span>
                          <span className="px-2 transition-colors">Log Out</span>
                        </div>
                      </div>
                    </> : ''}

                </div>
              </div>
            </div>
          </nav>
          <div className="relative pb-32">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  )
}
