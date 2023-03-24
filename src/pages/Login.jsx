import React, { useState } from 'react'
import { BiUpload, } from 'react-icons/bi'
import { IoIosHelpCircle, } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import DocumentMeta from 'react-document-meta';
export default function Login() {
    const [loginForm, setLoginForm] = useState(true)
    const [signupForm, setSignupForm] = useState(false)
    const [stepone, setStepone] = useState(true)
    const [userType, setUserType] = useState('patient')

    // const userTypeSelect = (value) => {
    //     setUserType(value)
    // }

    //meta description
  const meta = {
    title: 'Login | Medeskin AI',
  };
  
    return (
        <DocumentMeta {...meta}>
        <div>
            <section className="login min-h-screen  flex items-center justify-center px-5">
                <div className='xl:w-6/12 lg:w-6/12 md:8/12 sm:w-[450px] tablet:w-2/3  w-full bg-white rounded-3xl px-3 md:px-20 py-8 md:py-24'>
                    <div className="text-center border-b border-gray-300 md:mx-28 mx-6">
                        <button className={loginForm ? 'text-center text-3xl text-primary font-medium pb-4 border-b-2 border-primary' : 'text-center text-2xl text-gray-500 font-medium pb-4'} onClick={() => { setLoginForm(true); setSignupForm(false); setStepone(true) }}>Login</button>
                        <button className={!loginForm ? 'text-center text-3xl text-primary font-medium ml-6 pb-4 border-b-2 border-primary' : 'text-center text-2xl text-gray-500 font-medium ml-6 pb-4'} onClick={() => { setLoginForm(false); setSignupForm(true) }}>Sign Up</button>
                    </div>
                    {loginForm ? <>
                        <div className="form px-6 md:px-16 lg:px-28">
                            <form className="py-8">
                                <div className="form-group my-3">
                                    <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='Username or Email' />
                                </div>
                                <div className="form-group my-3">
                                    <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='Password' />
                                </div>
                                <div className="text-right py-3">
                                    <NavLink to="/forgot-password" className='text-blue-600 text-md'>Forgot?</NavLink>
                                </div>
                                <div className="form-group my-3 mt-3">
                                    <button type='button' className='bg-primarylight text-white text-md font-semibold w-full rounded-lg py-3'>Login</button>
                                </div>
                            </form>
                            <p className='mb-6 text-center'>Or</p>
                            <div className="flex justify-center mt-3">
                                <a href="#" className='mr-8'><img className='md:w-2/12 w-3/12 ml-auto' src="/img/facebook.png" alt="facebook" /></a>
                                <a href="#" className=''><img className='md:w-2/12 w-3/12 mr-auto' src="/img/google.png" alt="google" /></a>
                            </div>
                        </div>
                    </> : ''}
                    {signupForm ? <>
                        {stepone ? <>
                            <div className="mt-6 flex justify-center">
                                <div>
                                    <button className='block min-w-[250px] bg-white active:bg-primary focus:bg-primary hover:text-white focus:text-white hover:bg-primary w-full border border-gray-300 rounded py-3 px-12 my-3' onClick={() => { setUserType('doctor'); setStepone(false) }}>Doctor</button>
                                    <button className='block min-w-[250px] bg-white active:bg-primary focus:bg-primary hover:text-white focus:text-white hover:bg-primary w-full border border-gray-300 rounded py-3 px-12 my-3' onClick={() => { setUserType('patient'); setStepone(false) }}>Patient</button>
                                    <button className='block min-w-[250px] bg-white active:bg-primary focus:bg-primary hover:text-white focus:text-white hover:bg-primary w-full border border-gray-300 rounded py-3 px-12 my-3' onClick={() => { setUserType('student'); setStepone(false) }}>Student</button>
                                </div>
                            </div>
                        </> : <>
                            <div className="form pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    <div className="form-group">
                                        <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='Name' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='Email' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='Age' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='Unique Username' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='Location (country)' />
                                    </div>
                                    <div className="form-group">
                                        <select name="type" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full'>
                                            <option className='text-gray-500' value="">User Type (User or Doctor)</option>
                                            <option className='text-gray-500' value="student">Student</option>
                                            <option className='text-gray-500' value="doctor">Doctor</option>
                                            <option className='text-gray-500' value="patient">Patient</option>
                                        </select>
                                    </div>
                                    <div className="form-group relative">
                                        <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='Phone Number (Optional)' />
                                        <div className="absolute bottom-[5px] right-0 w-[40px] h-[40px] leading-[40px] rounded-full z-50 phone-help-icon">
                                            <IoIosHelpCircle className='m-auto text-gray-700 h-[40px] text-[20px]' />
                                        </div>
                                        {/* <div role="tooltip" class="phone-tooltip min-w-[400px] leading-[30px] min-h-[30px] absolute z-10 py-2 px-3 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 tooltip dark:bg-gray-700">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                        </div> */}
                                    </div>
                                    <div className="form-group relative">
                                        <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='Ethincity (Optional)' />
                                        <div className="upload absolute bottom-[5px] right-0 w-[40px] h-[40px] leading-[40px] rounded-full">
                                            <IoIosHelpCircle className='m-auto text-gray-700 h-[40px] text-[20px]' />
                                        </div>
                                    </div>
                                    {userType === 'student' ? <>
                                        <div className="form-group relative">
                                            <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='University Affiliation' />
                                            <div className="upload absolute bottom-[5px] right-0 w-[40px] h-[40px] leading-[40px] bg-primarylight text-white rounded-full">
                                                <BiUpload className='m-auto text-white h-[40px] text-[20px]' />
                                            </div>
                                        </div>
                                    </> : ''}
                                    {userType === 'doctor' ? <>
                                        <div className="form-group relative">
                                            <input type="text" className='bg-white border-b border-gray-300 px-4 py-3 text-gray-500 w-full' placeholder='NHS/Medical' />
                                            <div className="upload absolute bottom-[5px] right-0 w-[40px] h-[40px] leading-[40px] bg-primarylight text-white rounded-full">
                                                <BiUpload className='m-auto text-white h-[40px] text-[20px]' />
                                            </div>
                                        </div>
                                    </> : ''}
                                </div>
                                <div className="form-group text-center mt-8">
                                    <button type='button' className='bg-primarylight text-white text-md font-semibold w-1/2 rounded-lg py-3'>Sign Up</button>
                                </div>
                            </div>
                        </>}

                    </> : ''}
                    <div className="text-center mt-12">
                        <NavLink to={'/'} className="text-primarylight">Back to Home</NavLink>
                    </div>
                </div>
            </section>
        </div>
        </DocumentMeta>
    )
}
