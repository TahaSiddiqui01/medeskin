import axios from 'axios'
import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminBreadcrumb from '../../../components/AdminBreadcrumb'
import { Editor } from '@tinymce/tinymce-react';
import Swal from 'sweetalert2'

export default function AddBlog() {
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [coverimage, setCoverImage] = useState('')
    const [previewimage, setPreviewImage] = useState('')
    const [previewcoverimage, setPreviewCoverImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()


    const AddNewBlog = (e) => {
        e.preventDefault()
        setLoading(true)
        let data = new FormData();
        data.append('category', category)
        data.append('title', title)
        data.append('slug', title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''))
        data.append('description', description)
        data.append('content', content)
        data.append('image', image)
        data.append('coverimage', coverimage)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post('/blogs', data, config)
            .then(res => {
                setLoading(false)
                console.log(res)
                navigate('/admin/blogs')
                Swal.fire({
                    title: 'Successfull',
                    text: "The blog updted successfully.",
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok'
                })
            }).catch(err => {
                setLoading(false)
                setError('Please check all fields and try again...!!!')
                setTimeout(() => {
                    setError(false)
                }, 5000)
                console.log(err.response)
                Swal.fire({
                    title: 'Error',
                    text: "Error occurred. Please check all fields.",
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok'
                })
            })
    }

    const editorRef = useRef(null);
    var api = process.env.REACT_APP_TINY_API_KEY

    return (
        <div className='add-blog'>
            <div className="breadcumb p-4">
                <AdminBreadcrumb title="Add New Blog" />
            </div>
            <div className="page-content">
                <div className="heading p-5 bg-white flex justify-between items-center">
                    <h2 className="text-slate-800 font-semibold text-2xl">Add New Blog</h2>
                    <Link to="/admin/blogs" className="ml-3 group relative inline-flex border border-primary focus:outline-none w-full sm:w-auto" type="button">
                        <span className="w-full px-5 inline-flex items-center justify-center self-stretch py-2 text-sm text-white text-center font-bold uppercase bg-primary hover:bg-bg-primary ring-1 ring-primary ring-offset-1 ring-offset-primary transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1 focus:outline-none">
                            Back to Blogs
                        </span>
                    </Link>
                </div>
                <form onSubmit={AddNewBlog} encType="multipart/form-data">
                    <div className="main-page-content flex flex-wrap p-5">
                        <div className="lg:w-8/12 bg-white p-4 rounded md:opacity-100 admin-blog">
                            <div className="form md:p-5">
                                <div className="form-group my-3 mb-5 w-full">
                                    <label className="block uppercase font-semibold text-xs text-slate-900 mb-2">Category</label>
                                    <select className="lg:w-1/3 md:w-2/4 bg-slate-50 border-gray-200 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-60 dark:text-white my-2" name="category" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                                        <option value="">Select Category</option>
                                        <option value="Skin Care">Skin Care</option>
                                        <option value="Company">Company</option>
                                        <option value="Research">Research</option>
                                        <option value="Mental Health">Mental Health</option>
                                    </select>
                                </div>
                                <div className="form-group my-3 mb-5 w-full">
                                    <label className="block uppercase font-semibold text-xs text-slate-900 mb-2">Title</label>
                                    <input type="text" className="bg-slate-50 border-gray-200 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-60 dark:text-white my-2" placeholder="Title" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                    {/* <p className="text-red-500 my-2 text-sm" v-if="errors.name">{{ errors.name.message }}</p> */}
                                </div>
                                <div className="form-group my-3 mb-5 w-full">
                                    <label className="block uppercase font-semibold text-xs text-slate-900 mb-2">Description</label>
                                    <textarea type="text" id="description" className="bg-slate-50 border-gray-200 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-60 dark:text-white my-2" placeholder="Description" name="description" rows="10" value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                                    {/* <p className="text-red-500 my-2 text-sm" v-if="errors.short_description">{{ errors.short_description.message }}</p> */}
                                </div>
                                <div className="form-group my-3 mb-5 w-full">
                                    <label className="block uppercase font-semibold text-xs text-slate-900 mb-2">Content</label>
                                    <Editor
                                        apiKey={api}
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        init={{
                                            height: 600,
                                            menubar: true,
                                            plugins: 'code preview importcss tinydrive searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking insertdatetime advlist lists wordcount help charmap emoticons',
                                            mobile: {
                                                plugins: 'code preview importcss tinydrive searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking insertdatetime advlist lists wordcount help charmap emoticons'
                                            },
                                            toolbar: 'undo redo | bold italic underline link | alignleft aligncenter alignright alignjustify |  numlist bullist | forecolor backcolor | outdent indent | searchreplace code fullscreen preview',
                                            body_class: 'editor',
                                        }}
                                        value={content}
                                        onEditorChange={() => setContent(editorRef.current.getContent())}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-4/12 bg-white p-4 rounded md:opacity-100 admin-blog">
                            <div className="md:p-5">
                                <div className="form-group mb-5 my-3">
                                    <label className="block uppercase font-semibold text-xs text-slate-900 mb-2">Featured Image</label>
                                    <p className='my-2 mb-4 text-gray-600 text-xs'><span className='font-bold'>Note:</span> This image will show on blogs page, please uplaod image of resolution 800x500</p>
                                    <div className="my-3 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary">
                                                    <span>Upload a featured image</span>
                                                    <input type="file" name='image' onChange={(e) => { setPreviewImage(URL.createObjectURL(e.target.files[0])); setImage(e.target.files[0]) }} className="sr-only" />
                                                </label>
                                                {/* <p className="pl-1">or drag and drop</p> */}
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 4MB</p>
                                        </div>
                                    </div>
                                    {/* preview image */}
                                    {previewimage ? <><img src={previewimage} alt="featuredimage" className="max-w-1 my-1 max-w-xs w-full" /></> : ''}

                                </div>
                                <div className="form-group mb-5 my-3">
                                    <label className="block uppercase font-semibold text-xs text-slate-900 mb-2">Cover Image</label>
                                    <p className='my-2 mb-4 text-gray-600 text-xs'><span className='font-bold'>Note:</span> This image will show on single blog page, please uplaod image of resolution 1920x700</p>
                                    {/* <input type="file" className="bg-slate-50 border-gray-200 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:text-white my-2" name='coverimage' onChange={(e) => { setPreviewCoverImage(URL.createObjectURL(e.target.files[0])); setCoverImage(e.target.files[0]) }} /> */}
                                    <div className="my-3 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary">
                                                    <span>Upload a cover image</span>
                                                    <input type="file" name='coverimage' onChange={(e) => { setPreviewCoverImage(URL.createObjectURL(e.target.files[0])); setCoverImage(e.target.files[0]) }} className="sr-only" />
                                                </label>
                                                {/* <p className="pl-1">or drag and drop</p> */}
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 4MB</p>
                                        </div>
                                    </div>
                                    {/* preview cover image */}
                                    {previewcoverimage ? <><img src={previewcoverimage} alt="coverimage" className="max-w-1 my-1 max-w-xs w-full" /></> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* submit cancel button */}
                    <div className="form-group my-4 px-12">
                        <button className="group relative flex border border-primary focus:outline-none w-full sm:w-auto" type="submit">
                            <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-white text-center font-bold uppercase bg-primary hover:bg-primary ring-1 ring-primary ring-offset-1 ring-offset-primary transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                                {loading ? <>
                                    <svg role="status" className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg> Add Blog
                                </> : 'Add Blog'}
                            </span>
                        </button>
                        {error ? <>
                            <div className="w-full md:w-2/3 my-3">
                                <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                    <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                    <div>
                                        {error}
                                    </div>
                                </div>
                            </div>
                        </> : ''}
                    </div>
                </form>
            </div >
        </div >
    )
}
