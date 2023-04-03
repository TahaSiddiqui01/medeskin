import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Helmet } from "react-helmet";
import DocumentMeta from "react-document-meta";
function Ethics() {
  const [toggleIcon, setToggleIcon] = useState(false);
  const meta = {
    title: "Ethics and Safety | Medeskin AI",
    description:
      "Medeskin AI follows all the best ethics and safety practices, ensuring our users can safely and securely use our app from anywhere in the world, on any device, anytime.",
  };
  return (
    <DocumentMeta {...meta}>
      <div
        className={toggleIcon ? "toggle-icon bg-lightgray " : "bg-lightgray "}
      >
        {/* <Helmet>
        <title>Ethics and Safety | Medeskin AI</title>
      </Helmet> */}
        <section className="flex md:min-h-screen h-[70vh] w-full banner-section">
          <div className="tablet:w-[80px] w-[50px] res-sidebar  md:h-[100vh] h-[70vh] pb-14 flex flex-col justify-between items-center bg-lightgray">
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
            <div className="flex res-account flex-col md:space-y-20 space-y-10 text-black flex-1 justify-center items-center">
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
            <div className="text-black res-scroll">
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
                className="h-full tablet:w-[170px] w-[100px] mycenter res-anchor text-black"
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
                  src="/img/Ethics.jpg"
                  className="w-full md:h-[100vh] h-[70vh] object-cover brightness-[70%]"
                  alt=""
                />

                <div className="absolute bottom-[15%] lg:bottom-[25%] 4xl:bottom-[25%] tablet:left-[10%] left-[5%] z-[2] text-white max-w-[800px]">
                  {/* <h4 className="text-white text-[40px] 4xl:text-[50px] underline underline-offset-1 mb-8">
                  01
                </h4> */}
                  <h5 className="text-white text-[20px] leading-7 4xl:leading-[80px] 4xl:text-[60px] tablet:text-[32px] md:text-[45px] lg:text-[50px] lg:leading-[60px] md:leading-[50px] tablet:leading-[45px] font-semibold">
                    Ethics and Safety
                    <br />
                  </h5>
                  <p className="mt-8 max-w-[500px] 4xl:max-w-[100%] text-[14px] 4xl:text-[23px] tablet:text-[18px]">
                    At Medeskin AI, we go the extra-mile to follow all the best
                    ethics and safety practices, ensuring our users can safely
                    and securely use our app from anywhere in the world, on any
                    device, anytime.
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
          className="text-gray-600 mt-5 res-margin body-font overflow-hidden"
          id="section-2"
        >
          <div className="container px-5 py-6 md:py-16 mx-auto">
            <div className="grid grid-col-1 md:grid-cols-2 gap-x-8 items-center ethics-card">
              <div className="w-full lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-black lg:text-[40px] tablet:text-[30px] text-[24px] title-font font-bold mb-4">
                  Ethics
                </h1>
                <p className="leading-relaxed mb-4">
                  We have defined as well as implemented a clear and specific
                  set of business policies and practices. Doing the right thing,
                  even when no one’s looking – that’s what guides how we morally
                  conduct ourselves, make decisions, and take actions.
                </p>
              </div>
              {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 max-h-[400px] object-cover object-center rounded-xl" src="/img/girl-bag.jpg" /> */}
              <img
                src="/img/girl-bag.jpg"
                alt="ecommerce"
                className="w-full rounded-xl max-h-[400px] max-w-[400px]"
              />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-6 md:py-16 mx-auto">
            <div className="flex justify-content-between align-items-center flex-wrap-md flex-row-reverse ethics-card ethics-card-2">
              <div className="order-1 mx-3 w-[50%] full-width lg:order-2  lg: lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-black lg:text-[40px] tablet:text-[30px] text-[24px] title-font font-bold mb-4">
                  Law Compliance
                </h1>
                <p className="leading-relaxed mb-4">
                  We adhere to all internal and external business rules,
                  regulations, and laws in all the jurisdictions we operate in.
                  By meeting all our legal obligations, we protect the health,
                  safety, and welfare of all our stakeholders, including users,
                  employees, partners, and the government.
                </p>
              </div>
              <img
                src="/img/pexels-pixabay-48148.png"
                alt="pen"
                className="w-full max-h-[400px] max-w-[400px]  rounded-xl order-2 lg:order-1"
              />

              {/* <img alt="ecommerce" className="order-2 lg:order-1 pr-10 w-full lg:h-auto h-64 max-h-[400px] rounded-xl" src="/img/pen.png" /> */}
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font overflow-hidden pb-[30px] tablet:pb-[50px]">
          <div className="container px-5 py-6 md:py-16 mx-auto">
            <div className="grid grid-col-1 md:grid-cols-2 gap-x-8 items-center ethics-card">
              <div className="w-full lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-black lg:text-[40px] tablet:text-[30px] text-[24px] title-font font-bold mb-4">
                  Privacy
                </h1>
                <p className="leading-relaxed mb-4">
                  To us, nothing matters more than ensuring the privacy of our
                  users and partners, upholding their trust. We only collect the
                  necessary data of users’ in a safe, secure, and compliant way
                  after getting their consent and clearly communicating to them
                  how, why, and where their data is collected, used, and stored.
                  Then we go above and beyond to protect it and never share it
                  with any third-party.
                </p>
              </div>
              {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 max-h-[400px] object-cover object-center rounded-xl" src="/img/laptop-bg.png" /> */}
              <img
                src="/img/pexels-kevin-paster-1901388.png"
                alt="ecommerce"
                className="w-full rounded-xl max-h-[400px] max-w-[400px] "
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </DocumentMeta>
  );
}

export default Ethics;
