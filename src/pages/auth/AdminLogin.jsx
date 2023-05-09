import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setEmailError] = useState('')
    const [errorPassword, setPasswordError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // console.log(process.env.REACT_APP_USERNAME)
    const handleLogin = (e) =>{
        setLoading(true)
        e.preventDefault()
        const login = {
            email,password
        }
        axios.post('/login', login)
        .then(res => {
            setLoading(false)
            navigate('/admin/dashboard')
            localStorage.setItem('token',res.data.token)
            // console.log(res)
        }).catch(err => {
            setLoading(false)
            setEmailError(err.response.data.email)
            setPasswordError(err.response.data.password)
        })
    }

    function CheckLoggedIn() {
        let token = localStorage.getItem('token')
        if (token != null) {
          return navigate('/admin/dashboard');
        }
      }
      useEffect(() => {
        CheckLoggedIn()
      });
  return (
    <div>
        <section className="login min-h-screen  flex items-center justify-center px-5">
            <div className='xl:w-4/12 lg:w-5/12 md:8/12 sm:w-[450px] tablet:w-2/3  w-full bg-white rounded-3xl px-6 md:px-20 py-8 md:py-24'>
                <h1 className='text-center text-3xl text-primary font-medium'>Login</h1>
                <div className="form">
                    <form onSubmit={handleLogin} className="py-8">
                        <div className="form-group my-3">
                            <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-dark w-full' placeholder='Username or Email' onChange={(e) => { setEmail(e.target.value) }} />
                            {errorEmail ? <><p className='text-red-600 my-2 text-sm'>{errorEmail}</p></> : ''}
                        </div>
                        <div className="form-group my-3">
                            <input type="password" className='bg-white border-b border-gray-300 px-4 py-3 text-dark w-full' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                            {errorPassword ? <><p className='text-red-600 my-2 text-sm'>{errorPassword}</p></> : ''}
                        </div>
                        <div className="text-right py-3">
                          <NavLink to="/forgot-password" className='text-blue-600 text-md'>Forgot?</NavLink>
                        </div>
                        <div className="form-group my-3 mt-3">
                            <button type='submit' className='bg-primarylight text-white text-md font-semibold w-full rounded-lg py-3'>Login</button>
                        </div>
                    </form>
                    {/* <p className='mb-6 text-center'>Or</p>
                    <div className="flex justify-center mt-3">
                        <a href="#" className='mr-8'><img className='w-3/12 ml-auto' src="/img/facebook.png" alt="facebook" /></a>
                        <a href="#" className=''><img className='w-3/12 mr-auto' src="/img/google.png" alt="google" /></a>
                    </div> */}
                </div>
            </div>
            {/* loader */}
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
        </section>
    </div>
  )
}
