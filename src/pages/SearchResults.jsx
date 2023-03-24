import React, { useState, useEffect } from "react";
import axios from 'axios'
import { HiMenuAlt1 } from "react-icons/hi";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFilter,
  FaInstagram,
} from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import Footer from "../components/Footer";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineClose, } from 'react-icons/ai'
import DocumentMeta from 'react-document-meta';
// import LatestBlogs from "../components/LatestBlogs";
const SearchResults = () => {
  const [blog, setBlog] = useState([])
  const [toggleIcon, setToggleIcon] = useState(false)
  const [textNew, setText] = useState('')
  const navigate = useNavigate()
  const { text } = useParams()

  useEffect(() => {
    Blogs()
  }, []);

  const SearchResult = () => {
    if (textNew) {
      navigate('/blogs/search/' + textNew)
    }
  }

  const Blogs = () => {
    axios.get('/blogs/search/' + text)
      .then(res => {
        setBlog(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }

  //meta description
  const meta = {
    title: 'Search | Medeskin AI',
  };

  return (
    <DocumentMeta {...meta}>
    <div className={toggleIcon ? "toggle-icon pb-10 bg-lightgray " : "pb-10 bg-lightgray "}>
      <section className="flex md:min-h-screen h-[70vh] w-full banner-section">
        <div className="tablet:w-[80px] w-[50px]  md:h-[100vh] h-[70vh] pb-14 flex flex-col justify-between items-center bg-lightgray">
          <div className="w-[80px] h-[80px] mycenter bg-primary">
            <div>
              <HiMenuAlt1 className="text-[25px] text-white cursor-pointer" onClick={() => { setToggleIcon(true) }} />
            </div>
          </div>
          <div className="flex flex-col md:space-y-20 space-y-10 text-black flex-1 justify-center items-center">
            {/* <div>
              <FaFacebookF />
            </div> */}
            <div>
              <FaTwitter />
            </div>
            <div>
            <a href="hhttps://www.linkedin.com/company/medeskin-ai">
              <FaLinkedinIn />
              </a>
            </div>
            <div>
            <a href="https://www.instagram.com/medeskin_ai/">
              <FaInstagram />
              </a>
            </div>
          </div>
          <div className="text-black">
            <div className="flex flex-col items-center">
              <a href="#section-2">
                <div className="flex flex-col">
                  <span className="transform rotate-90 block">Scroll</span>
                  <span className="transform rotate-90 block translate-y-6">
                    Down
                  </span>
                </div>
              </a>
              <div className="translate-y-10 transform flex space-x-0 flex-col items-center">
                <RiArrowDownSLine className="text-[25px]" />
                <RiArrowDownSLine className="mt-[-5px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 absolute left-[50px] tablet:left-[150px] top-0 z-50 md:p-4 p-0">
            <NavLink to={'/'}>
              <img
                className="tablet:w-[150px] w-[100px] pl-4 pt-2 sm:pl-0 sm:pt-0"
                src="/img/logo.svg"
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="flex tablet:h-[80px] h-[45px]  absolute top-0 right-0 z-50">
            <NavLink to={'/login'} className="h-full tablet:w-[170px] w-[100px] mycenter bg-white text-black">
              Login
            </NavLink>
            <button className="h-full w-[90px] text-white bg-primarylight mycenter">
              EN
            </button>
          </div>

          <div className=" flex-1 relative">
            <div className="slide-1 w-full relative">
              <img
                src="/img/image-2.jpg"
                className="w-full md:h-[100vh] h-[70vh] object-cover brightness-[70%]"
                alt=""
              />

              <div className="absolute bottom-[15%] lg:bottom-[25%]  4xl:bottom-[25%] tablet:left-[10%] left-[5%] z-[2] text-white max-w-[800px]">
                {/* <h4 className="text-white text-[40px] 4xl:text-[50px] underline underline-offset-1 mb-8">
                  01
                </h4> */}
                <h5 className="text-white text-[20px] leading-7 4xl:leading-[80px] 4xl:text-[60px] tablet:text-[32px] md:text-[45px] lg:text-[50px] lg:leading-[60px] md:leading-[50px] tablet:leading-[45px] font-semibold">
                  News & Blogs<br />
                </h5>
                <p className="mt-8 max-w-[500px] 4xl:max-w-[100%] text-[14px] 4xl:text-[23px] tablet:text-[18px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione culpa blanditiis natus laboriosam, repellendus
                  veritatis dolorum veniam eius ipsa quasi! Eius cupiditate est
                  modi autem soluta minima, ab expedita deserunt.
                </p>
              </div>
            </div>

          </div>
        </div>
        {/* toggle icon */}
        <div className="toggle-menu py-8 fixed -left-full top-0 z-50 bg-primary w-80 h-full transition-all duration-500">
          <div className="header text-right px-6 mb-4">
            <AiOutlineClose className="text-white ml-auto cursor-pointer font-semibold" onClick={() => { setToggleIcon(false) }} />
          </div>
          <NavLink to={'/'} className="menu block px-6 text-white py-2 flex">
          <img style={{objectFit:'contain'}}  src="/img/Home.png"className="w-[3vh] icon-white  h-[3vh] mr-2  object-cover brightness-[0%] invert-[1]"
          alt=""/> Home</NavLink>
          <NavLink to={'/about'} className="menu block px-6 text-white flex py-2">
          <img style={{objectFit:'contain'}}  src="/img/About.png"className="w-[3vh] icon-white  h-[3vh] mr-2  object-cover brightness-[0%] invert-[1]"
          alt=""/>About</NavLink>
          <NavLink to={'/product'} className="menu block px-6 text-white flex py-2"><img style={{objectFit:'contain'}}  src="/img/ProductPage.png"className="w-[3vh] icon-white  h-[3vh] mr-2  object-cover brightness-[0%] invert-[1]"
          alt=""/>Product</NavLink>
          <NavLink to={'/blogs'} className="menu block px-6 text-white flex py-2"><img style={{objectFit:'contain'}}  src="/img/Blog.png"className="w-[3vh] icon-white  h-[3vh] mr-2  object-cover brightness-[0%] invert-[1]"
          alt=""/>Blogs</NavLink>
          <NavLink to={'/ethics'} className="menu block px-6 text-white flex py-2"><img style={{objectFit:'contain'}}  src="/img/Ethics.png"className="w-[3vh] icon-white  h-[3vh] mr-2  object-cover brightness-[0%] invert-[1]"
          alt=""/>Ethics</NavLink>
        </div>
      </section>

      <section className="bg-lightgray py-[100px]" id='section-2'>
        <div>
          <h4 className="text-center tablet:text-[40px] text-[25px] md:text-[50px] font-bold">
            News & Blogs
          </h4>
          <p className="tablet:text-[20px] text-[16px] mt-6 max-w-[800px] text-center mx-auto px-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            reprehenderit voluptates, porro quaerat, itaque officia corporis
            saepe fugit
          </p>
        </div>
        <form onSubmit={SearchResult}>
          <div className="search mt-8 flex tablet:h-[60px] h-[50px] tablet:max-w-[600px]  md:max-w-[700px]  xl:max-w-[1200px] tablet:w-full w-full mx-auto px-6">
            <div className="flex h-full border-[2px] border-primary relative flex-1">
              <input
                className="w-full bg-transparent px-6 text-[18px] h-full border-0 outline-0"
                placeholder="Search"
                type="text" defaultValue={text} onChange={(e) => { setText(e.target.value) }}
              />
              <FaFilter className="absolute right-4 text-gray-500 top-[50%] translate-y-[-50%]" />
            </div>
            <button className="tablet:w-[180px] w-[100px] h-full mycenter bg-primary text-white border-[2px] border-primary" onClick={SearchResult} type="submit">
              Search
            </button>
          </div>
        </form>
      </section>

      <section className="bg-lightgray">
        <div className="mt-10">
          <div className="container  bg-white tablet:py-4 tablet:px-6 px-2 py-2  lg:py-6 lg:px-12">
            {blog.length > 0 ? <>
              <h2 className="text-2xl font-semibold text-center mb-12">Blogs related to keyword: {text}</h2>
              <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 md:gap-6  lg:gap-12">
                {blog.map((blog, index) => (
                  <div className="w-full blog-card" key={index}>
                    <div className="rounded-sm shadow-lg overflow-hidden h-full">
                      <img
                        className="w-full tablet:h-[300px] h-[250px] object-cover rounded-t-lg"
                        src={blog.image}
                        alt={blog.title}
                      />
                      <div className="content px-4 py-2 flex flex-col space-y-2">
                        <h4 className="text-primary text-[14px] font-normal ">
                          {blog.category}
                        </h4>
                        <h6 className="title tablet:text-[22px] text-[18px] mb-[-5px] font-semibold">
                          {blog.title}
                        </h6>
                        <p className="text-[14px] desc">
                          {blog.description}
                        </p>
                        <NavLink to={'/blog/' + blog.slug} className="text-[16px] py-4 text-primarylight">
                          Read More
                        </NavLink>
                      </div>
                    </div>
                  </div>

                ))}
              </div>

            </> : <>
              <p className="text-2xl text-center">No Blogs found for {text}</p>
            </>}
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </DocumentMeta>
  );
};

export default SearchResults;
