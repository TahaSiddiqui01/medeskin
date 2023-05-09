import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [errorEmail, seterrorEmail] = useState(false)
    const [toast, setToast] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // console.log(process.env.REACT_APP_USERNAME)
    const handleForgotPassword = (e) => {
        e.preventDefault()
        setLoading(true)
        const data = {email}
        axios.post('/forgot', data)
            .then(res => {
                setLoading(false)
                setToast(res.data.message)
                setTimeout(() => {
                    setToast(false)
                }, 4000)
            }).catch(err => {
                setLoading(false)
                seterrorEmail(err.response.data.message)
                setTimeout(() => {
                    setToast(false)
                }, 4000)
            })
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/admin/dashboard')
        }
    })
    return (
        <div>
            <section className="login min-h-screen  flex items-center justify-center px-5">
                <div className='xl:w-4/12 lg:w-5/12 md:8/12 sm:w-[450px] tablet:w-2/3  w-full bg-white rounded-3xl px-6 md:px-20 py-8 md:py-24'>
                    <h1 className='text-center text-3xl text-primary font-medium'>Forgot Password</h1>
                    <div className="form">
                        <form onSubmit={handleForgotPassword} className="py-8">
                            <div className="form-group my-3">
                                <input type="email" className='bg-white border-b border-gray-300 px-4 py-3 text-dark w-full' placeholder='Name' onChange={(e) => { setEmail(e.target.value) }} />
                                {errorEmail ? <><p className='text-red-600 my-2 text-sm'>{errorEmail}</p></> : ''}
                            </div>
                            <div className="form-group my-3 mt-3">
                                <button type='submit' className='bg-primarylight text-white text-md font-semibold w-full rounded-lg py-3'>Forgot Password</button>
                            </div>
                        </form>
                        <div className="text-center">
                            <NavLink to="/admin/login" className='text-blue-600 text-md'>Back to login</NavLink>
                        </div>
                    </div>
                    {/* toast show on delete blog */}
                    {toast ? <>
                        <div className="fixed bottom-3 right-5 flex items-center w-full max-w-sm p-4 mb-4 text-gray-500 bg-white rounded shadow-lg dark:text-gray-400 dark:bg-gray-800 z-50" role="alert">
                            <div className="text-sm py-1 font-normal">{toast}</div>
                        </div>
                    </> : ''}
                    {loading ?
                        <>
                            <div className="loader absolute top-0 left-0 w-full h-full bg-gray-100/[0.9]">
                                <div className="spinner">
                                    <div className="w-full bg-gray-200 h-1.5 dark:bg-gray-700">
                                        <div className="auth-progress bg-blue-600 h-1.5"></div>
                                    </div>
                                </div>
                            </div>
                        </> : ''}
                </div>
            </section>
        </div>
    )
}
