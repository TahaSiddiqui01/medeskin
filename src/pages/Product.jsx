import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import DocumentMeta from "react-document-meta";

export default function Product() {
  const [toggleIcon, setToggleIcon] = useState(false);

  //meta description
  const meta = {
    title: "Medeskin AI | Mobile App Revolutionizing Skin Health & Care",
    description:
      "Get quick, accurate, and personalized cosmetic issue classification as well as access to leading skin health professionals through Medeskin AI. Try now for free!",
  };

  return (
    <DocumentMeta {...meta}>
      <div
        className={
          toggleIcon ? "overflow-x-hidden toggle-icon" : "overflow-x-hidden"
        }
      >
        <section className="flex md:min-h-screen h-[70vh] res-height w-full banner-section">
          <div className="tablet:w-[80px] w-[50px]  md:h-[100vh] h-[70vh] pb-14 flex flex-col justify-between items-center bg-lightgray res-sidebar">
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
            <div className="flex res-waste flex-col md:space-y-20 space-y-10 text-black flex-1 justify-center items-center res-account">
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
            <div className="text-black res-waste">
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
            <div className="w-[80px] h-[80px] mycenter bg-primary res-hide">
              <div
                style={{ height: "100%" }}
                className="d-flex justify-content-center align-items-center"
              >
                <HiMenuAlt1
                  className="text-[25px] text-white cursor-pointer"
                  onClick={() => {
                    setToggleIcon(true);
                  }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 absolute left-[50px] tablet:left-[150px] top-0 z-50 md:p-4 p-0">
              <NavLink to={"/"}>
                <img
                  className="tablet:w-[150px] mx-1 w-[100px] pl-4 pt-2 sm:pl-0 sm:pt-0 res-logo"
                  src="/img/logo.svg"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="flex tablet:h-[80px] h-[45px]  absolute top-0 right-0 z-50">
              <NavLink
                to={"/login"}
                className="h-full tablet:w-[170px] w-[100px] mycenter bg-white res-anchor text-black"
              >
                Login
              </NavLink>
              {/* <button className="h-full w-[90px] text-white bg-primarylight mycenter">
              EN
            </button> */}
            </div>

            <div className=" flex-1 relative">
              <div className="slide-1 w-full relative">
                <img
                  src="/img/Banner.jpg"
                  className="w-full md:h-[100vh] h-[70vh] object-cover brightness-[70%]"
                  alt=""
                />

                <div className="absolute bottom-[15%] lg:bottom-[25%]  4xl:bottom-[25%] tablet:left-[10%] left-[5%] z-[2] text-white max-w-[800px]">
                  {/* <h4 className="text-white text-[40px] 4xl:text-[50px] underline underline-offset-1 mb-8">
                  01
                </h4> */}
                  <h5 className="text-white text-[20px] leading-7 4xl:leading-[80px] 4xl:text-[60px] tablet:text-[32px] md:text-[45px] lg:text-[50px] lg:leading-[60px] md:leading-[50px] tablet:leading-[45px] font-semibold">
                    Redefining Skin Health & Care
                    <br />
                  </h5>
                  <p className="mt-8 max-w-[500px] 4xl:max-w-[100%] text-[14px] 4xl:text-[23px] tablet:text-[18px]">
                    Get quick, accurate, and personalized cosmetic issue
                    classification as well as access to leading skin health
                    professionals through Medeskin AI – an AI-powered free
                    mobile application revolutionizing skin health and care, all
                    the while empowering people.
                  </p>
                </div>
              </div>
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

        <section
          className="bg-lightgray res-margin  md:py-[100px] py-[50px] lg:py-[100px] 4xl:py-[250px]"
          id="section-2"
        >
          <div
            style={{ backgroundColor: "#0976b7" }}
            className="flex   w-full  md:pt-[1%] md:pb-[1%] lg:pt-[4%] lg:pb-[4%]  py-[150px] text-white px-5 res-container-parent"
          >
            <div className="container res-container">
              <div className="flex items-center md:flex-row flex-col download-parent">
                <div className="max-w-[600px] 4xl:max-w-[800px] flex flex-col  md:space-y-2 lg:space-y-6 md:w-1/2 w-full">
                  <h3 className="4xl:text-[40px] lg:text-[35px] md:text-[20px] tablet:text-[30px] text-[25px] leading-[55px] font-semibold">
                    Instant Cosmetic Issue Classification
                  </h3>
                  <p className="4xl:text-[25px] md:text-[14px]">
                    Whatever cosmetic and skin issue you are facing, the first
                    step is to correctly and quickly identify the specific
                    problem. How can you do just that? Through Medeskin AI. Just
                    take a photo of the affected area using the Medeskin AI app,
                    powered by cutting-edge artificial intelligence algorithms
                    and technology, and get an instant identification.Medeskin
                    AI makes it stress and hassle-free to check your skin
                    anywhere, anytime. Plus, it accurately classifies up to
                    seven different cosmetic issues, and new classifications are
                    all set to be rolled out soon.
                  </p>
                  <div className="flex store-img-div sm:flex-row flex-col justify-center sm:justify-start sm:space-x-2 tablet:space-x-4 lg:space-x-6 items-center">
                    <img
                      className="store-img"
                      src="/img/app-store.png"
                      alt=""
                    />
                    <img
                      className="store-img"
                      src="/img/play-store.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full  justify-center absolute  handshake-div">
                  <img
                    className="left-[122%] mar-a w-[43%] fixed-img-size handshake-img  relative lg:pb-[1%] lg:pt-[6%] md:pt-[5%]"
                    src="/img/handshake2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-lightgray md:py-[100px] py-[50px] lg:py-[150px] 4xl:py-[250px]">
          <div
            style={{ backgroundColor: "#0976b7" }}
            className="flex  w-full lg:pt-[7%] lg:pb-[7%] md:pt-[5%] md:pb-[5%] py-[150px] 4xl:py-[150px] text-white px-5 res-container-parent"
          >
            <div className="container res-container">
              <div className="flex items-center md:flex-row flex-col  bluegreen-parent">
                <div className="md:w-1/2 w-full flex justify-center absolute handshake-div">
                  <img
                    className="mar-b relative fixed-img-size w-[43%] pt-[5%] handshake-img  handshake-img-2"
                    src="/img/bluegreen2.png"
                    alt=""
                  />
                </div>
                <div
                  className="flex flex-col  space-y-6 md:w-1/2 w-full bluegreen-div"
                  style={{ marginLeft: "50%" }}
                >
                  <h3 className="4xl:text-[50px] lg:text-[30px] md:text-[20px] tablet:text-[30px] text-[25px] left-[90%]  font-semibold">
                    Teleconsultation With Skin Specialists
                  </h3>
                  <p className="4xl:text-[22px] md:text-[14px]">
                    Now, access to the leading skin health professionals,
                    dermatologists, and cosmetological is just one touch away
                    from you.From better understanding the skin and cosmetic
                    issues you are facing to learning what steps and medication
                    you should take, Medeskin AI ensures you have the
                    personalised assessment, advice, and care you need to Get a
                    personalized teleconsultation or book an in-person
                    appointment – the choice is yours.
                  </p>
                  <div className="flex sm:flex-row flex-col justify-center sm:justify-start sm:space-x-2 tablet:space-x-4 lg:space-x-6 items-center">
                    <img
                      className="store-img"
                      src="/img/app-store.png"
                      alt=""
                    />
                    <img
                      className="store-img"
                      src="/img/play-store.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-lightgray md:py-[100px] py-[50px] lg:py-[150px] 4xl:py-[250px]">
          <div
            style={{ backgroundColor: "#0976b7" }}
            className="flex w-full md:pt-[1%] md:pb-[1%] lg:pt-[5%] lg:pb-[5%] py-[150px] 4xl:py-[170px] text-white px-5 res-container-parent"
          >
            <div className="container res-container">
              <div className="flex items-center md:flex-row flex-col download-parent">
                <div className="max-w-[600px] 4xl:max-w-[800px] flex flex-col  space-y-6 md:w-1/2 w-full">
                  <h3 className="4xl:text-[50px] lg:text-[30px] md:text-[20px] tablet:text-[30px] text-[25px]  font-semibold">
                    Your Skin Doctor 24/7/365, Even On The Go!
                  </h3>
                  <p className="4xl:text-[25px] md:text-[14px]">
                    User-friendly. Check. Highly responsive. Check. Safe and
                    secure. Check. Advanced features. Check. Absolutely Free.
                    Check! The Medeskin AI mobile application offers it all to
                    you, including accurate cosmetic issue classification,
                    personalized consultation with the best-in-class skin
                    specialists, and an array of other powerful features – all
                    tailored to enhance your skin health. Now all you need is
                    your phone and the Medeskin AI mobile app – nothing else.
                  </p>
                  <div className="flex sm:flex-row flex-col justify-center sm:justify-start sm:space-x-2 tablet:space-x-4 lg:space-x-6 items-center">
                    <img
                      className="store-img"
                      src="/img/app-store.png"
                      alt=""
                    />
                    <img
                      className="store-img"
                      src="/img/play-store.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-center handshake-div absolute">
                  <img
                    className="left-[90%] mar-c handshake-img-3  handshake2-img  w-[54%] relative lg:pb-[1%] md:pt-[5%]"
                    src="/img/res-product.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[100px]" id="section-2">
          <div className="container flex justify-center mx-auto max-w-[1200px]">
            <div>
              <h1 className="sm:w-full text-black-900  font-bold title-font text-2xl  mb-10 text-center text-[35px]">
                Platform Features
              </h1>
              {/* <p className="my-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit ut incidunt, neque earum repellat illum provident distinctio repudiandae iusto voluptatum molestias accusantium quos quibusdam eveniet! Est aliquid dignissimos perspiciatis.</p> */}
              <div className="flex justify-center flex-wrap tablet:gap-x-6 gap-x-0 ">
                <button className="bg-transparent px-4 mt-10 item-center py-6  border-[3px] border-primary text-[18px] rounded">
                  View and book appointments
                </button>
                <button className="bg-transparent px-4 mt-10 item-center py-6  border-[3px] border-primary text-[18px] rounded">
                  View and search for Speciality clinics / Nearby clinics
                </button>
                <button className="bg-transparent px-4 mt-10 item-center py-6  border-[3px] border-primary text-[18px] rounded">
                  Telemedicine module
                </button>
                <button className="bg-transparent px-4 mt-10 item-center py-6  border-[3px] border-primary text-[18px] rounded">
                  Hospital management information
                </button>
                <button className="bg-transparent px-4 mt-10 item-center py-6  border-[3px] border-primary text-[18px] rounded">
                  Direct messaging with healthcare provider
                </button>
                <button className="bg-transparent px-4 mt-10 item-center py-6  border-[3px] border-primary text-[18px] rounded">
                  Medication tracking
                </button>
                <button className="bg-transparent px-4 mt-10 item-center py-6  border-[3px] border-primary text-[18px] rounded">
                  Longitudinal data access for prolonged and extensive
                  healthcare management
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </DocumentMeta>
  );
}
