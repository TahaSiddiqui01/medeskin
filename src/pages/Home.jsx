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
import "./pages.css";
import MobileNav from "../components/MobileNav";

export default function Home() {
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
    <DocumentMeta {...meta}>
      <div
        className={
          toggleIcon ? "overflow-x-hidden toggle-icon" : "overflow-x-hidden"
        }
      >
        <section className="flex desktop-nav md:min-h-screen h-[70vh] w-full banner-section home-page">
          <div className="tablet:w-[80px] w-[50px]  md:h-[100vh] h-[70vh] pb-14 flex flex-col justify-between items-center bg-lightgray ">
            <div className="w-[80px] h-[80px] mycenter bg-primary">
              <div>
                <HiMenuAlt1
                  className="text-[25px] text-white cursor-pointer"
                  onClick={() => {
                    setToggleIcon(true);
                  }}
                />
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
              <NavLink to={"/"}>
                <img
                  className="tablet:w-[150px] w-[100px] pl-4 pt-2 sm:pl-0 sm:pt-0"
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
                        className="w-full md:h-[100vh] h-[70vh] object-cover "
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
          <div className="toggle-menu py-8 fixed -left-full top-0 z-50 bg-primary w-80 h-full transition-all duration-500">
            <div className="header text-right px-6 mb-4">
              <AiOutlineClose
                className="text-white ml-auto cursor-pointer font-semibold"
                onClick={() => {
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

        <div className="mobile-nav">
          <MobileNav />
        </div>

        <section
          className="bg-lightgray md:py-[100px] py-[50px] lg:py-[150px] 4xl:py-[300px]"
          id="section-2"
        >
          <div
            style={{ backgroundColor: "#0976b7" }}
            className="flex w-full xxl:py-[150px] 4xl:py-[180px] pt-[3%] pb-[3%] py-[150px] text-white  px-5"
          >
            <div className="container">
              <div className="flex items-center md:flex-row flex-col download-parent">
                <div className="flex flex-col space-y-6 md:w-1/2 w-full">
                  <h3 className="4xl:text-[90px] lg:text-[50px] tablet:text-[30px] text-[25px]  font-semibold">
                    Your Skin Aid 24/7/365
                  </h3>
                  <p className="4xl:text-[25px]">
                    With the Medeskin AI mobile application, you can get quick,
                    accurate, and personalized cosmetic issue classification as
                    well as access to leading skin health professionals. There
                    is also an array of other powerful features tailored to
                    empower you on your skincare journey.
                  </p>
                  <div className="flex space-x-2 tablet:space-x-4 lg:space-x-6 items-center flex-wrap justify-content-center align-items-center download-box">
                    <img
                      className="android-download"
                      src="/img/app-store.png"
                      alt=""
                    />
                    <img
                      className="android-download m-4"
                      src="/img/play-store.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full  justify-center absolute handshake-div">
                  <img
                    className="left-[90%]  relative w-[43%] handshake-img"
                    src="/img/handshake2.png"
                    alt="handshake"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-lightgray py-[50px]">
          <div className="container">
            <div className="text-center max-w-[800px] mx-auto mb-20">
              <h2 className="lg:text-[50px] tablet:text-[30px] text-[25px] font-semibold">
                News & Blogs
              </h2>
              <p className="leading-[25px]">
                Get key skincare insights and practical tips, information on the
                connection between skincare and mental health, and the latest
                company updates – in a simple and digestible manner.
              </p>
            </div>
            <LatestBlogs />
          </div>
        </section>

        <section className="lg:py-[100px] md:py-[50px] py-[50px] bg-white">
          <div className="container">
            <h2 className="lg:text-[50px] tablet:text-[30px] text-[25px] font-semibold text-center lg:text-left mb-[50px]">
              Trusted Partners
            </h2>
          </div>
          <div
            className="lg:px-20 mx-10 flex partners justify-content-center align-items-center "
            style={{ alignItems: "center" }}
          >
            {/* <Swiper
            breakpoints={{
              "300": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "480": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "768": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "900": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              "1200": {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}

            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          > */}
            {/* <SwiperSlide>
              <img src="" alt="" />
            </SwiperSlide> */}
            {/* <SwiperSlide> */}
            <img
              src="/img/Homepage/QMUL.png"
              style={{ width: 160, height: 120, objectFit: "contain" }}
              alt=""
            />
            {/* </SwiperSlide> */}
            {/* <SwiperSlide> */}
            <img
              src="/img/Homepage/SrishtiLogo.png"
              style={{
                width: 130,
                height: 90,
                objectFit: "contain",
                marginLeft: 60,
              }}
              alt=""
            />
            {/* </SwiperSlide> */}
            {/* </Swiper> */}
          </div>
        </section>

        <section className="py-[60px] bg-lightgray">
          <div className="container">
            <h4 className="lg:text-[50px] tablet:text-[30px] text-[25px] font-bold mb-[40px] md:mb-[70px] text-center">
              Our Stats Speak For Themselves!
            </h4>
            <div className="lg:flex lg:justify-evenly grid-cols-2 grid tablet:grid-cols-3  gap-6 d-flex justify-content-center align-items-center flex-wrap">
              <div className="flex-col  flex items-center ">
                <b className="lg:text-[25px] partner-info-heading md:text-[50px] text-[45px]">
                  9+ Million{" "}
                </b>
                <span
                  style={{ textAlign: "center" }}
                  className="w-[300px] lg:text-[18px] partner-light-heading md:text-[24px] text-[18px]  flex mt-[-5px]"
                >
                  Patients Registered on the HIMSS
                </span>
              </div>
              <div className="flex-col  flex items-center">
                <b className="lg:text-[25px] partner-info-heading md:text-[50px] text-[45px]">
                  150+ Locations
                </b>
                <span className="lg:text-[18px] partner-light-heading md:text-[24px] text-[18px] flex mt-[-5px]">
                  Across
                </span>
                <b className="lg:text-[20px] mt-3 partner-info-heading md:text-[50px] text-[45px]">
                  10 + Countries
                </b>
              </div>
              <div className="flex-col  flex items-center">
                <b
                  style={{ textAlign: "center" }}
                  className="lg:text-[25px] md:text-[50px] partner-info-heading w-[200px] text-[35px]"
                >
                  DPA, GDPR, HIPAA
                </b>
                <span className="lg:text-[18px] partner-light-heading md:text-[24px] text-[18px] flex mt-[-5px]">
                  Compliant
                </span>
              </div>
              <div className="flex-col  flex items-center">
                <b className="lg:text-[25px] partner-info-heading md:text-[50px] text-[45px]">
                  15+
                </b>
                <span
                  style={{ textAlign: "center" }}
                  className="w-[200px] partner-light-heading lg:text-[18px] md:text-[24px] text-[18px] flex mt-[-5px]"
                >
                  Illness Classifications and more on the way!
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="testimonials py-[70px] bg-lightgray px-[20px]">
        <div className="heading text-center mb-12">
          <h4 className="lg:text-[50px] tablet:text-[30px] text-[25px]  font-bold mb-6"> Testimonials</h4>
          <p className="text-center text-[20px] w-[90%] mx-auto px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 justify-center">
            <div className="border-[2px] border-blue-500 mx-auto shadow-lg xl:p-10 md:p-6 p-4 rounded-lg flex flex-col items-center bg-white">
              <img className="w-[100px] h-[100px] rounded-full object-cover mb-4" src="/img/girl.jpg" alt="" />
              <h4 className="tablet:text-[24px] text-[20px] lg:text-[30px] font-semibold mb-4">Helen S.</h4>
              <div className="flex justify-center space-x-2 text-green-500 lg:mb-6 tablet:mb-4 mb-3s">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h6 className="lg:text-[20px] tablet:text-[18px] text-[16px] tablet:mb-6 mb-4 lg:mb-8 mt-4 font-semibold text-black ">First time user, So far good..</h6>
              <p className="text-[18px] text-center">First time user, so far good experience choose writer and adding information on essay.</p>
              <h5 className="lg:text-[22px] text-[18px] font-semibold text-black lg:mt-[70px] tablet:mt-[50px] mt-[30px]">Feb 26th, 2022</h5>

            </div>
            <div className="border-[2px] border-blue-500 mx-auto shadow-lg xl:p-10 md:p-6 p-4 rounded-lg flex flex-col items-center bg-white">
              <img className="w-[100px] h-[100px] rounded-full object-cover mb-4" src="/img/girl.jpg" alt="" />
              <h4 className="tablet:text-[24px] text-[20px] lg:text-[30px] font-semibold mb-4">Helen S.</h4>
              <div className="flex justify-center space-x-2 text-green-500 lg:mb-6 tablet:mb-4 mb-3s">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h6 className="lg:text-[20px] tablet:text-[18px] text-[16px] tablet:mb-6 mb-4 lg:mb-8 mt-4 font-semibold text-black ">First time user, So far good..</h6>
              <p className="text-[18px] text-center">First time user, so far good experience choose writer and adding information on essay.</p>
              <h5 className="lg:text-[22px] text-[18px] font-semibold text-black lg:mt-[70px] tablet:mt-[50px] mt-[30px]">Feb 26th, 2022</h5>

            </div>
            <div className="border-[2px] border-blue-500 mx-auto shadow-lg xl:p-10 md:p-6 p-4 rounded-lg flex flex-col items-center bg-white">
              <img className="w-[100px] h-[100px] rounded-full object-cover mb-4" src="/img/girl.jpg" alt="" />
              <h4 className="tablet:text-[24px] text-[20px] lg:text-[30px] font-semibold mb-4">Helen S.</h4>
              <div className="flex justify-center space-x-2 text-green-500 lg:mb-6 tablet:mb-4 mb-3s">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h6 className="lg:text-[20px] tablet:text-[18px] text-[16px] tablet:mb-6 mb-4 lg:mb-8 mt-4 font-semibold text-black ">First time user, So far good..</h6>
              <p className="text-[18px] text-center">First time user, so far good experience choose writer and adding information on essay.</p>
              <h5 className="lg:text-[22px] text-[18px] font-semibold text-black lg:mt-[70px] tablet:mt-[50px] mt-[30px]">Feb 26th, 2022</h5>

            </div>


          </div>
        </div>

      </section> */}

        <Footer />
      </div>
    </DocumentMeta>
  );
}
