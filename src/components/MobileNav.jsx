import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaTwitter, FaLinkedinIn, FaStar, FaInstagram } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import LatestBlogs from "./../components/LatestBlogs";
import DocumentMeta from "react-document-meta";
import axios from "axios";
import "./Components.css";

function MobileNav() {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    Blogs();
  }, []);

  function Blogs() {
    axios
      .get("blogs")
      .then((res) => {
        setBlog(res.data);
      })
      .catch(() => {});
  }
  const sliderData = [
    {
      number: "01",
      image: "/img/Homepage/Banner/Banner1.png",
      title:
        " Providing AI Supported Dermatology Solutions In Partnership With The NHS",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione culpa blanditiis natus laboriosam, repellendus modi autem soluta minima, ab expedita deserunt.",
    },
    {
      number: "02",
      image: "/img/Homepage/Banner/Banner2.png",
      title:
        " Providing AI Supported Dermatology Solutions In Partnership With The NHS",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione culpa blanditiis natus laboriosam, repellendus modi autem soluta minima, ab expedita deserunt.",
    },
    {
      number: "02",
      image: "/img/Homepage/Banner/Banner3.png",
      title:
        " Providing AI Supported Dermatology Solutions In Partnership With The NHS",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione culpa blanditiis natus laboriosam, repellendus modi autem soluta minima, ab expedita deserunt.",
    },
    {
      number: "02",
      image: "/img/Homepage/Banner/Banner4.png",
      title:
        " Providing AI Supported Dermatology Solutions In Partnership With The NHS",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione culpa blanditiis natus laboriosam, repellendus modi autem soluta minima, ab expedita deserunt.",
    },
  ];

  //meta description
  const meta = {
    title: "Homepage | Medeskin AI ",
  };

  return (
    <>
      <div
        className={
          toggleIcon ? "overflow-x-hidden toggle-icon" : "overflow-x-hidden"
        }
      >
        <section className="md:min-h-screen  w-full banner-section home-page">
          <div className="tablet:w-[80px] w-[50px]  md:h-[100vh] h-[70vh] pb-14 flex flex-col justify-between items-center bg-lightgray mobile-sidebar">
            <div className="w-[80px] h-[80px] mycenter bg-primary">
              <div className="mb-4">
                <HiMenuAlt1
                  className="text-[25px] text-white cursor-pointer"
                  onClick={() => {
                    console.log("You are using mobil navbar");
                    setToggleIcon(true);
                  }}
                />
              </div>
            </div>
          </div>

          {/* <div className="mobile-nav">
            <MobileNav />
          </div> */}

          <div className="flex-1">
            <div className="flex items-center space-x-2 absolute left-[50px] tablet:left-[150px] top-0 z-50 md:p-4 p-0">
              <NavLink to={"/"}>
                <img
                  className="tablet:w-[150px] w-[100px] pl-4 pt-2 sm:pl-0 sm:pt-0 ms-4"
                  src="/img/logo.svg"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="flex tablet:h-[80px] h-[45px]  absolute top-0 right-0 z-50">
              <NavLink
                to={"/login"}
                className="h-full tablet:w-[170px] w-[100px] mycenter bg-white text-black"
              >
                Login
              </NavLink>
              {/* <button className="h-full w-[90px] text-white bg-primarylight mycenter">
              EN
            </button> */}
            </div>

            <div className=" flex-1 relative">
              <Swiper
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  900: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 4000,
                  // disableOnInteraction:true,
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
              >
                {/* {blog.length > 5 ? <>
                {blog.slice(0, 5).map((blog, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-1 w-full relative">
                      <img
                        src={blog.featured_image}
                        className="w-full md:h-[100vh] h-[70vh] object-cover brightness-[70%]"
                        alt=""
                      />

                      <div className="absolute bottom-[15%] lg:bottom-[20%]  4xl:bottom-[25%] tablet:left-[10%] left-[5%] z-[2] text-white max-w-[800px]">
                        <h4 className="text-white text-[40px] 4xl:text-[50px] underline underline-offset-1 mb-8">
                          0{index + 1}
                        </h4>
                        <h5 className="text-white text-[20px] leading-7 4xl:leading-[80px] 4xl:text-[60px] tablet:text-[32px] md:text-[45px] lg:text-[50px] lg:leading-[60px] md:leading-[50px] tablet:leading-[45px] font-semibold">
                          {blog.title}
                        </h5>
                        <p className="desc mt-8 max-w-[500px] 4xl:max-w-[100%] text-[14px] 4xl:text-[23px] tablet:text-[18px]">
                          {blog.description}
                        </p>
                        <NavLink to={'/blog/' + blog.slug} className="block mt-6">
                          Get Started...
                        </NavLink>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </> : <> */}
                {sliderData.map((blog, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-1 w-full relative">
                      <img
                        src={blog.image}
                        className="w-full md:h-[100vh] h-[50vh]  res-banner "
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {/* </>} */}
              </Swiper>

              {/* <div className="absolute bottom-0 right-0 z-20 bg-white w-[50px] p-4 flex flex-col space-y-8">
              <div className="text-primary text-[25px] cursor-pointer" ref={navigationNextRef} >
                <IoIosArrowForward />
              </div>
              <div className="text-primary text-[25px] cursor-pointer" ref={navigationPrevRef} >
                <IoIosArrowBack />
              </div>
            </div> */}
            </div>
          </div>
          {/* toggle icon */}
          <div className="toggle-menu py-8 fixed -left-full top-0 z-50 bg-primary w-60 h-full transition-all duration-500">
            <div className="header text-right px-6 mb-4">
              <AiOutlineClose
                className="text-white ml-auto cursor-pointer font-semibold"
                onClick={() => {
                  console.log("MObile's one");
                  setToggleIcon(false);
                }}
              />
            </div>
            <NavLink to={"/"} className="menu block px-6 text-white py-2 flex">
              <img
                style={{ objectFit: "contain" }}
                src="/img/Home.png"
                className="w-[3vh] icon-white  h-[3vh] mr-2  object-cover brightness-[0%] invert-[1]"
                alt=""
              />{" "}
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className="menu block px-6 text-white flex py-2"
            >
              <img
                style={{ objectFit: "contain" }}
                src="/img/About.png"
                className="w-[3vh] icon-white  h-[3vh] mr-2  object-cover brightness-[0%] invert-[1]"
                alt=""
              />
              About
            </NavLink>
            <NavLink
              to={"/product"}
              className="menu block px-6 text-white flex py-2"
            >
              <img
                style={{ objectFit: "contain" }}
                src="/img/ProductPage.png"
                className="w-[3vh] icon-white  h-[3vh] mr-2  object-cover brightness-[0%] invert-[1]"
                alt=""
              />
              Product
            </NavLink>
            <NavLink
              to={"/blogs"}
              className="menu block px-6 text-white flex py-2"
            >
              <img
                style={{ objectFit: "contain" }}
                src="/img/Blog.png"
                className="w-[3vh] icon-white  h-[3vh] mr-2  object-cover brightness-[0%] invert-[1]"
                alt=""
              />
              Blogs
            </NavLink>
            <NavLink
              to={"/ethics"}
              className="menu block px-6 text-white flex py-2"
            >
              <img
                style={{ objectFit: "contain" }}
                src="/img/Ethics.png"
                className="w-[3vh] icon-white  h-[3vh] mr-2  object-cover brightness-[0%] invert-[1]"
                alt=""
              />
              Ethics
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
}

export default MobileNav;
