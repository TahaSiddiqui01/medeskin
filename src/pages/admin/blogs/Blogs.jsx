import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import AdminBreadcrumb from '../../../components/AdminBreadcrumb'
import Swal from 'sweetalert2'

export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [totalBlogs, setTotalBlogs] = useState('')
    const [toast, setToast] = useState(false)
    const [totalPages, setTotalPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    // const [page,setPage] = useState(1)
    // const MySwal = withReactContent(Swal)

    var perPage = 20
    var page = 1

    function Blogs() {
        axios.get('blogs')
            .then(res => {
                setTotalBlogs(res.data.length)
                let totalPages = Math.ceil(res.data.length / perPage)
                setTotalPages(totalPages)
                var index = page * perPage - perPage
                const allblogs = res.data.slice(index, index + perPage)
                setBlogs(allblogs)
                console.log(res.data)
            }).catch(err => {
                console.log(err.response)
            })
    }

    const deleteBlog = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('/blogs/' + id)
                .then(res => {
                    Blogs()
                    setToast(res.data.message)
                    setTimeout(() => {
                        setToast(false)
                    }, 4000)
                    Swal.fire(
                        'Deleted!',
                        'Your blog has been deleted.',
                        'success'
                      )
                }).catch(err => {
                    // console.log(err.response)
                    setToast(err.response.data.message)
                    setTimeout(() => {
                        setToast(false)
                    }, 4000)
                })
              
            }
          })
        
    }

    const GoToPage = pageNumber => {
        page = pageNumber
        setCurrentPage(page)
        Blogs()
    }

    const ShowNext = () => {
        page = page + 1
        setCurrentPage(page)
        Blogs()
    }

    useEffect(() => {
        Blogs()
    }, []);

    return (
        <div className='blog'>
            <div className="breadcumb p-4">
                <AdminBreadcrumb title="Blogs" />
            </div>
            <div className="page-content">
                <div className="heading p-5 bg-white flex justify-between items-center">
                    <h2 className="text-slate-800 font-semibold text-2xl">Blogs</h2>
                    <Link to="/admin/blogs/add-blog" className="ml-3 group relative inline-flex border border-primary focus:outline-none w-full sm:w-auto" type="button">
                        <span className="w-full px-5 inline-flex items-center justify-center self-stretch py-2 text-sm text-white text-center font-bold uppercase bg-primary hover:bg-bg-primary ring-1 ring-primary ring-offset-1 ring-offset-primary transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1 focus:outline-none">
                            Add New Blog
                        </span>
                    </Link>
                </div>
                <div className="main-page-content flex flex-wrap gap-3 p-5">
                    <div className="w-full bg-white rounded">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-3">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase theadacking-wider">SI.NO</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Title</th>
                                        <th width="20%" className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Slug</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Featured Image</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Cover Image</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Updated at</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 relative blogs">
                                    {blogs.map((blog, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {blog.title}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                {blog.slug}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                <img src={blog.featured_image} alt="" className='max-h-24' />
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                <img src={blog.cover_image} alt="" className='max-h-24' />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Moment format="MM/DD/YYYY HH:MM A">{blog.updatedAt}</Moment>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                                                <Link to={'/admin/blogs/edit-blog/' + blog.slug} className="text-sm bg-blue-600 p-2.5 rounded mr-3" title="Edit product"><i className="fas fa-eye text-white"></i></Link>
                                                <button className="cursor-pointer text-sm bg-red-600 p-2.5 rounded" onClick={() => { deleteBlog(blog._id) }} title="Delete product">
                                                    <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block text-white">
                                                        <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"></path>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* pagination */}

                        {totalBlogs >= perPage ?
                            <>
                                <div className="pagination text-center my-5 flex items-center justify-center">

                                    {[...Array(totalPages)].map((index, pageNumber) => {
                                        return <button className={currentPage === pageNumber + 1 ? 'cursor-not-allowed opacity-50 px-3 py-1.5 rounded bg-primary mr-2 text-white' : 'px-3 py-1.5 rounded bg-ehite border border-primary text-primary mr-2 hover:bg-primary hover:text-white'} onClick={() => { GoToPage(pageNumber + 1) }} key={pageNumber}>{pageNumber + 1}</button>
                                    })}
                                    <button className={currentPage === totalPages ? 'cursor-not-allowed opacity-50 px-3 py-1.5 rounded bg-primary mr-2 text-white' : 'px-3 py-1.5 rounded bg-primary mr-2 text-white'} disabled={currentPage === totalPages ? 'disabled' : ''} onClick={ShowNext} >Next</button>
                                </div>
                            </> : ''}

                        {/* toast show on delete blog */}
                        {toast ? <>
                            <div className="fixed bottom-3 right-5 flex items-center w-full max-w-sm p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800 z-50" role="alert">
                                <div className="text-sm py-1 font-normal">{toast}</div>
                            </div>
                        </> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}
