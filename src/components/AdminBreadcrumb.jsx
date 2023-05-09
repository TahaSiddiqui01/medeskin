import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminBreadcrumb(props) {
  return (
    <nav className="rounded-md w-full">
        <ol className="list-reset flex">
            <li><Link to="/admin/dashboard" className="text-cyan-600 hover:text-cyan-700">Admin</Link></li>
            <li><span className="text-gray-500 mx-2">/</span></li>
            <li className="text-gray-500">{props.title}</li>
        </ol>
    </nav>
  )
}
