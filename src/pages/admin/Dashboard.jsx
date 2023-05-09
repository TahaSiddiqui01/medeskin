import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminBreadcrumb from '../../components/AdminBreadcrumb'

export default function Dashboard() {
  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/admin/blogs')
    } else {
      navigate('/admin/login')
    }
  })
  
  return (
    <div>
        <div className="breadcumb p-4">
          <AdminBreadcrumb title="Dashboard" />
        </div>
        <div className="page-content">
            <div className="heading p-5 bg-white flex justify-between items-center">
                <h2 className="text-slate-800 font-semibold text-2xl">Dashboard</h2>
            </div>
            <div className="main-page-content flex flex-wrap gap-3 p-5">
                
            </div>
        </div>
    </div>
  )
}
