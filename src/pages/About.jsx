import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import DocumentMeta from "react-document-meta";
export default function About() {
  const [toggleIcon, setToggleIcon] = useState(false);

  //meta description
  const meta = {
    title: "About Us | Medeskin AI",
    description:
      "AI-powered free mobile application revolutionizing skin health and care, all the while empowering people. Know more about us!",
  };

  return (
    <DocumentMeta {...meta}>
      <div className={toggleIcon ? "toggle-icon " : " "}>
        <section className="flex md:min-h-screen h-[70vh] w-full banner-section">
          <div className="tablet:w-[80px] w-[50px]  md:h-[100vh] h-[70vh] pb-14 flex flex-col justify-between items-center bg-lightgray res-sidebar">
            <div className="w-[80px] h-[80px] mycenter bg-[#0064AA]">
              <div>
                <HiMenuAlt1
                  className="text-[25px] text-white cursor-pointer"
                  onClick={() => {
                    setToggleIcon(true);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col md:space-y-20 space-y-10 text-black flex-1 justify-center items-center res-account">
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
            <div className="w-[80px] h-[80px] mycenter bg-[#0064aa] res-hide">
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
                  className="tablet:w-[150px] logo-btn w-[100px] mx-1 pl-4 pt-2 sm:pl-0 sm:pt-0 res-logo"
                  src="/img/newLogo.png"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="flex login-btn tablet:h-[80px] h-[45px]  absolute top-0 right-0 z-50">
              <NavLink
                to={"/login"}
                className="h-full tablet:w-[170px] w-[100px] mycenter res-anchor bg-white text-black"
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
                  src="/img/image-2.jpg"
                  className="w-full md:h-[100vh] h-[92vh] object-cover brightness-[70%]"
                  alt=""
                />

                <div className="absolute responsive-position bottom-[15%] lg:bottom-[25%]  4xl:bottom-[25%] tablet:left-[10%] left-[5%] z-[2] text-white max-w-[800px]">
                  {/* <h4 className="text-white text-[40px] 4xl:text-[50px] underline underline-offset-1 mb-8">
                  01
                </h4> */}
                  <h5 className="text-white text-[20px] leading-7 4xl:leading-[80px] 4xl:text-[60px] tablet:text-[32px] md:text-[45px] lg:text-[50px] lg:leading-[60px] md:leading-[50px] tablet:leading-[45px] font-semibold responsive-card-heading">
                    About Medeskin AI
                    <br />
                  </h5>
                  <p className="mt-8 max-w-[500px] 4xl:max-w-[100%] text-[14px] 4xl:text-[23px] tablet:text-[18px]">
                    An AI-powered free mobile application revolutionizing skin
                    health and care, all the while empowering people by offering
                    instant cosmetic issue classification as well as
                    personalized assessment, advice, and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* toggle icon */}
          <div className="toggle-menu py-8 fixed -left-full top-0 z-50 bg-[#0064AA] w-80 h-full transition-all duration-500">
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

        <section className="py-[100px] res-top-mar" id="section-2">
          <div className="container flex justify-center mx-auto max-w-[1200px]">
            <div>
              <h1 className="sm:w-full text-black-900  font-bold title-font text-2xl  mb-10 text-center text-[35px]">
                Vision Statement
              </h1>
              <p className="my-3  text-center text-[20px]">
                To improve access to Skincare globally and empower individuals
                around the world; Bridging the gap between patient and
                healthcare specialist.
              </p>
              <div className="flex justify-center flex-wrap tablet:gap-x-6 gap-x-0 ">
                <div className="lg:w-1/5 w-full md:w-1/4  flex justify-center ">
                  <button className="bg-transparent vs-btn  mt-10  w-[300px]  item-center py-1  border-[3px] border-primary font-bold text-[20px] rounded">
                    Accessible
                  </button>
                </div>
                <div className="lg:w-1/5 w-full md:w-1/3  flex justify-center">
                  <button className="bg-transparent vs-btn  mt-10  w-[300px]  item-center py-4  border-[3px] border-primary font-bold text-[20px] rounded">
                    Affordable
                  </button>
                </div>
                <div className="lg:w-1/5 w-full md:w-1/3  flex justify-center">
                  <button className="bg-transparent vs-btn  mt-10  w-[300px]  item-center py-4  border-[3px] border-primary font-bold text-[20px] rounded">
                    Accurate
                  </button>
                </div>
                <div className="lg:w-1/5 w-full md:w-1/3  flex justify-center">
                  <button className="bg-transparent vs-btn  mt-10  w-[300px]  item-center py-4  border-[3px] border-primary font-bold text-[20px] rounded">
                    Cosmetological
                  </button>
                </div>
                <div className="lg:w-1/5 w-full md:w-1/3  flex justify-center">
                  <button className="bg-transparent vs-btn  mt-10  w-[300px]  item-center py-4  border-[3px] border-primary font-bold text-[20px] rounded">
                    Dermatological
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 md:py-24 py-0 mx-auto">
            <div className="mx-auto flex flex-wrap items-center">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 parent-home-div">
                <h1 className="text-gray-900 text-3xl title-font font-bold mb-4 text-[35px]">
                  History
                </h1>

                <p className="leading-relaxed mb-4">
                  Skin and cosmetic issues are the single most common human
                  health affliction, affecting 1 billion people at any given
                  time, according to World Health Organization. 3 billion people
                  worldwide lack access to a health professional due to the
                  shortage of 18 million health professionals, as highlighted by
                  the World Medical Association. While on one end, the shortage
                  of health professionals has led to high workloads and stress,
                  on the other, patients are unable to get effective and timely
                  identification, as well as personalized care and treatment.
                  Not to mention the time, cost, and distance barriers that make
                  it impossible for people to proactively manage and treat the
                  issues they are facing. But all that changes now. Medeskin AI
                  was formed in 2022 with the mission of providing high-quality,
                  and effective skin health and care on-demand.
                </p>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 max-h-[400px] object-cover object-center rounded"
                src="/img/girl-new.png"
              />

              <div className="d-none skin-care">
                <span className="skin-care-tag">Skin Care</span>
                <h2 className="skin-care-heading">History</h2>
                <p className="skin-care-detail">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="text-gray-600 body-font pb-[30px]">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-row py-6 mb-12 justify-center">
              <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0 text-center text-[35px]">
                Our Team
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/2 lg:w-1/4 tablet:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden text-center">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/boy.jpg"
                />
              </div>
              <h2 className="text-xl font-bold title-font text-gray-900 mt-5 text-center">
                Shooting Stars
              </h2>
              <h4 className="text-xl font-medium title-font text-gray-900 mt-1 text-center">
                UI/UX Designer
              </h4>
              <p className="text-base leading-relaxed mt-2 text-center">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed.
              </p>
              <BsLinkedin className="mx-auto text-[25px] mt-2 text-[#006097]" />
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 tablet:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/girl.jpg"
                />
              </div>
              <h2 className="text-xl font-bold title-font text-gray-900 mt-5 text-center">
                The Catalyzer
              </h2>
              <h4 className="text-xl font-medium title-font text-gray-900 mt-1 text-center">
                UI/UX Designer
              </h4>
              <p className="text-base leading-relaxed mt-2 text-center">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed.
              </p>
              <BsLinkedin className="mx-auto text-[25px] mt-2 text-[#006097]" />
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 tablet:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/men.jpg"
                />
              </div>
              <h2 className="text-xl font-bold title-font text-gray-900 mt-5 text-center">
                The master
              </h2>
              <h4 className="text-xl font-medium title-font text-gray-900 mt-1 text-center">
                UI/UX Designer
              </h4>
              <p className="text-base leading-relaxed mt-2 text-center">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed.
              </p>
              <BsLinkedin className="mx-auto text-[25px] mt-2 text-[#006097]" />
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 tablet:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/smiling-girl.jpg"
                />
              </div>
              <h2 className="text-xl font-bold title-font text-gray-900 mt-5 text-center">
                Alex
              </h2>
              <h4 className="text-xl font-medium title-font text-gray-900 mt-1 text-center">
                UI/UX Designer
              </h4>
              <p className="text-base leading-relaxed mt-2 text-center">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed.
              </p>
              <BsLinkedin className="mx-auto text-[25px] mt-2 text-[#006097]" />
            </div>
          </div>
        </div>
      </section> */}

        <Footer />
      </div>
    </DocumentMeta>
  );
}
