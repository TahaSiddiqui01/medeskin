import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])
    const navigate = useNavigate()

    // console.log(process.env.REACT_APP_USERNAME)
    const handleRegister = (e) =>{
        e.preventDefault()
        const data = {
            name, email, password
        }
        axios.post('/register', data)
        .then(res=>{
            console.log(res)
            navigate('/admin/login')
        }).catch(err=>{
            console.log(err.response.data.err.errors)
            setError(err.response.data.err.errors)
        })
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            navigate('/admin/dashboard')
        }
    })
  return (
    <div>
        <section className="login min-h-screen  flex items-center justify-center px-5">
            <div className='xl:w-4/12 lg:w-5/12 md:8/12 sm:w-[450px] tablet:w-2/3  w-full bg-white rounded-3xl px-6 md:px-20 py-8 md:py-24'>
                <h1 className='text-center text-3xl text-primary font-medium'>Register</h1>
                <div className="form">
                    <form onSubmit={handleRegister} className="py-8">
                        <div className="form-group my-3">
                            <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-dark w-full' placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
                            {error.name ? <><p className='text-red-600 my-2 text-sm'>{error.name.message}</p></> : ''}
                        </div>
                        <div className="form-group my-3">
                            <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-dark w-full' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                            {error.email ? <><p className='text-red-600 my-2 text-sm'>{error.email.message}</p></> : ''}
                        </div>
                        <div className="form-group my-3">
                            <input type="password" className='bg-white border-b border-gray-300 px-4 py-3 text-dark w-full' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                            {error.password ? <><p className='text-red-600 my-2 text-sm'>{error.password.message}</p></> : ''}
                        </div>
                        <div className="text-right py-3">
                            <NavLink to="/admin/login" className='text-blue-600 text-md'>Already have an account?</NavLink>
                        </div>
                        <div className="form-group my-3 mt-3">
                            <button type='submit' className='bg-primarylight text-white text-md font-semibold w-full rounded-lg py-3'>Register</button>
                        </div>
                    </form>
                    {/* <p className='mb-6 text-center'>Or</p>
                    <div className="flex justify-center mt-3">
                        <a href="#" className='mr-8'><img className='w-3/12 ml-auto' src="/img/facebook.png" alt="facebook" /></a>
                        <a href="#" className=''><img className='w-3/12 mr-auto' src="/img/google.png" alt="google" /></a>
                    </div> */}
                </div>
            </div>
        </section>
    </div>
  )
}
