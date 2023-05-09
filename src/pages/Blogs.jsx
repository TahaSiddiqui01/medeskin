import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaTwitter, FaLinkedinIn, FaFilter, FaInstagram } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "../components/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import LatestBlogs from "../components/LatestBlogs";
import DocumentMeta from "react-document-meta";
const BASE_URL = "https://medeskin.ai/";

const BlogsNews = () => {
  const [blog, setBlog] = useState([]);
  const [skinBlog, setSkinBlog] = useState([]);
  const [skinFirstBlog, setSkinFirstBlog] = useState([]);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [text, setText] = useState("");
  const [searchError, setsearchError] = useState(false);
  const navigate = useNavigate();

  function hasWhiteSpace(s) {
    return /\s/g.test(s);
  }
  const SearchResult = (e) => {
    e.preventDefault();
    // console.log()
    if (text === "" || text === null || hasWhiteSpace(text) === true) {
      setsearchError("This field is required and space not allowed.");
    } else {
      navigate("/blogs/search/" + text);
    }
  };

  function Blogs() {
    axios
      .get("blogs")
      .then((res) => {
        setBlog(res.data);
        setSkinFirstBlog(res.data[0]);
      })
      .catch(() => {});
  }

  const SkinBlogs = () => {
    axios
      .get("/blogs/category/Skin")
      .then((res) => {
        setSkinBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Blogs();
    SkinBlogs();
  }, []);

  //meta description
  const meta = {
    title: "News & Blogs | Medeskin AI",
    description:
      "Get key skincare insights and tips, information on the connection between skincare and mental health, and the latest company updates – in a simple and digestible manner.",
  };

  return (
    <DocumentMeta {...meta}>
      <div
        className={
          toggleIcon ? "toggle-icon pb-10 bg-lightgray " : "pb-10 bg-lightgray "
        }
      >
        <section className="flex md:min-h-screen h-[70vh] w-full banner-section">
          <div className="tablet:w-[80px] res-sidebar w-[50px]  md:h-[100vh] h-[70vh] pb-14 flex flex-col justify-between items-center bg-lightgray">
            <div className="w-[80px] h-[80px] mycenter bg-[#0064aa]">
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
                  className="tablet:w-[150px] logo-btn mx-1 w-[100px] pl-4 pt-2 sm:pl-0 sm:pt-0 res-logo"
                  src="/img/newLogo.png"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="flex tablet:h-[80px] h-[45px] login-btn  absolute top-0 right-0 z-50">
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
                  src="/img/Banner1.jpg"
                  className="w-full md:h-[100vh] h-[100vh] object-cover brightness-[70%]"
                  alt=""
                />

                <div className="absolute bottom-[15%] lg:bottom-[25%]  4xl:bottom-[25%] tablet:left-[10%] left-[5%] z-[2] text-white max-w-[800px] responsive-position">
                  {/* <h4 className="text-white text-[40px] 4xl:text-[50px] underline underline-offset-1 mb-8">
                  01
                </h4> */}
                  <h5 className="text-white text-[20px] leading-7 4xl:leading-[80px] 4xl:text-[60px] tablet:text-[32px] md:text-[45px] lg:text-[50px] lg:leading-[60px] md:leading-[50px] tablet:leading-[45px] font-semibold responsive-card-heading">
                    News & Blogs
                    <br />
                  </h5>
                  <p className="mt-8 max-w-[500px] 4xl:max-w-[100%] text-[14px] 4xl:text-[23px] tablet:text-[18px]">
                    Get key skincare insights and practical tips, information on
                    the connection between skincare and mental health, and the
                    latest company updates. Up your skincare game to look and
                    feel great!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* toggle icon */}
          <div className="toggle-menu py-8 fixed -left-full top-0 z-50 bg-[#0064aa] w-80 h-full transition-all duration-500">
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
          className="bg-lightgray res-top-mar-2 py-[100px]"
          id="section-2"
        >
          <div>
            <h4 className="text-center tablet:text-[40px] text-[25px] md:text-[50px] font-bold">
              The Medeskin AI Blog
            </h4>
            <p className="tablet:text-[20px] text-[16px] mt-6 max-w-[800px] text-center mx-auto px-6">
              Expert advice from renowned skin health professionals delivered in
              a simple and digestible manner.
            </p>
          </div>
          <form onSubmit={SearchResult}>
            <div className="search mt-8 flex tablet:h-[60px] h-[50px] tablet:max-w-[600px]  md:max-w-[700px]  xl:max-w-[1200px] tablet:w-full w-full mx-auto px-6">
              <div className="flex h-full border-[2px] border-primary relative flex-1">
                <input
                  className="w-full bg-transparent px-6 text-[18px] h-full border-0 outline-0"
                  placeholder="Search"
                  type="text"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <FaFilter className="absolute right-4 text-gray-500 top-[50%] translate-y-[-50%]" />
              </div>
              {/* <button className="tablet:w-[180px] w-[100px] h-full mycenter bg-primary text-white border-[2px] border-primary" type="button"> */}
              <button
                className="tablet:w-[180px] w-[100px] h-full mycenter bg-primary text-white border-[2px] border-primary"
                onClick={SearchResult}
                type="submit"
              >
                Search
              </button>
            </div>
            {searchError ? (
              <>
                <div className="flex tablet:h-[60px] h-[50px] tablet:max-w-[600px]  md:max-w-[700px]  xl:max-w-[1200px] tablet:w-full w-full mx-auto px-6">
                  <p className="text-red-500 text-sm mt-2">{searchError}</p>
                </div>
              </>
            ) : (
              ""
            )}
          </form>
        </section>

        <section className="bg-lightgray">
          {blog.length > 0 ? (
            <>
              <div className="container">
                <LatestBlogs />
              </div>
              <div className="mt-10 ">
                <NavLink
                  to={"/blog/" + skinFirstBlog.slug}
                  className="text-[16px] py-4 text-primarylight"
                >
                  <div className="container  bg-white flex flex-col md:flex-row p-2 tablet:p-6 tablet:space-x-8 gap-4 rounded-lg shadow-[0px_5px_8px_rgba(0,0,0,0.5)]">
                    <div className="md:w-1/2">
                      <img
                        className="w-full lg:max-h-[450px] tablet:max-h-[400px] max-h-[250px] object-cover rounded-lg"
                        src={BASE_URL + skinFirstBlog.cover_image}
                        alt=""
                      />
                    </div>
                    <div className="md:w-1/2">
                      <div className="flex space-x-2">
                        <img
                          className="lg:w-[50px] lg:h-[50px] tablet:w-[40px] tablet:h-[40px] h-[30px] w-[30px] bg-primarylight/10 lg:p-3 rounded-full"
                          src="/img/women.png"
                          alt=""
                        />
                        <div>
                          <h4 className="text-primary">
                            {skinFirstBlog.category}
                          </h4>
                          <h6 className="text-black lg:text-[22px] tablet:text-[20px] text-[18px] font-semibold">
                            {skinFirstBlog.title}
                          </h6>
                        </div>
                      </div>
                      <p className="mt-6 px-2 skin-desc text-black">
                        {skinFirstBlog.description}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="mt-10">
                <div className="container  bg-white tablet:py-4 tablet:px-6 px-2 py-2  lg:py-6 lg:px-12  rounded-lg shadow-[0px_5px_8px_rgba(0,0,0,0.5)] p-0 blog-last-div">
                  <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 md:gap-6  lg:gap-12 ">
                    {skinBlog.map((blog, index) => (
                      <div className="w-full blog-card" key={index}>
                        <div className="rounded-sm shadow-lg overflow-hidden h-full">
                          <img
                            className="w-full tablet:h-[300px] h-[250px] object-cover rounded-t-lg"
                            src={BASE_URL + blog.cover_image}
                            // src="https://medeskin.ai/uploads/blogs/cover_image/pexels-andrea-piacquadio-3771830.jpg"
                            // alt={BASE_URL}
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
                            <NavLink
                              to={"/blog/" + blog.slug}
                              className="text-[16px] py-4 text-primarylight"
                            >
                              Read More
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-10 bg-lightgray mb-5">
                <div className="container flex blog-category-parent flex-col space-y-6 md:space-y-6">
                  <div className="bg-white md:p-8 md:px-12 py-2 px-4 tablet:p-6 tablet:px-6 rounded-lg flex justify-between items-center  blog-category-card ">
                    <div className="flex items-center blog-category-card-top lg:space-x-28 md:space-x-10 tablet:space-x-6 space-x-4">
                      <img
                        className="tablet:w-[90px] w-[40px]"
                        src="/img/women.png"
                        alt=""
                      />
                      <span className="text-black font-semibold md:text-[24px] tablet:text-[20px] text-[16px]">
                        Skin Care
                      </span>
                    </div>
                    <NavLink to={"/blogs/category/Skin Care"}>
                      <div className="lg:w-[50px] lg:h-[50px] tablet:w-[40px] tablet:h-[40px] h-[30px] w-[30px] bg-primary/20 rounded-full mycenter">
                        <IoIosArrowRoundForward className="text-[20px]" />
                      </div>
                    </NavLink>
                  </div>
                  <div className="bg-white md:p-8 md:px-12 py-2 px-4 tablet:p-6 tablet:px-6 rounded-lg flex justify-between items-center blog-category-card ">
                    <div className="flex items-center blog-category-card-top lg:space-x-28 md:space-x-10 tablet:space-x-6 space-x-4">
                      <img
                        className="tablet:w-[90px] w-[40px]"
                        src="/img/company.png"
                        alt=""
                      />
                      <span className="text-black font-semibold md:text-[24px] tablet:text-[20px] text-[16px]">
                        Company
                      </span>
                    </div>
                    <NavLink to={"/blogs/category/Company"}>
                      <div className="lg:w-[50px] lg:h-[50px] tablet:w-[40px] tablet:h-[40px] h-[30px] w-[30px] bg-primary/20 rounded-full mycenter">
                        <IoIosArrowRoundForward className="text-[20px]" />
                      </div>
                    </NavLink>
                  </div>
                  <div className="bg-white md:p-8 md:px-12 py-2 px-4 tablet:p-6 tablet:px-6 rounded-lg flex justify-between items-center blog-category-card ">
                    <div className="flex blog-category-card-top items-center lg:space-x-28 md:space-x-10 tablet:space-x-6 space-x-4">
                      <img
                        className="tablet:w-[90px] w-[40px]"
                        src="/img/glass.png"
                        alt=""
                      />
                      <span className="text-black font-semibold md:text-[24px] tablet:text-[20px] text-[16px]">
                        Research
                      </span>
                    </div>
                    <NavLink to={"/blogs/category/Research"}>
                      <div className="lg:w-[50px] lg:h-[50px] tablet:w-[40px] tablet:h-[40px] h-[30px] w-[30px] bg-primary/20 rounded-full mycenter">
                        <IoIosArrowRoundForward className="text-[20px]" />
                      </div>
                    </NavLink>
                  </div>
                  <div className="bg-white md:p-8 md:px-12 py-2 px-4 tablet:p-6 tablet:px-6 rounded-lg flex justify-between items-center blog-category-card ">
                    <div className="flex blog-category-card-top items-center lg:space-x-28 md:space-x-10 tablet:space-x-6 space-x-4">
                      <img
                        className="tablet:w-[90px] w-[40px]"
                        src="/img/brain.png"
                        alt=""
                      />
                      <span className="text-black font-semibold md:text-[24px] tablet:text-[20px] text-[16px]">
                        Mental Health
                      </span>
                    </div>
                    <NavLink to={"/blogs/category/Mental Health"}>
                      <div className="lg:w-[50px] lg:h-[50px] tablet:w-[40px] tablet:h-[40px] h-[30px] w-[30px] bg-primary/20 rounded-full mycenter">
                        <IoIosArrowRoundForward className="text-[20px]" />
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-2xl text-center py-3 pb-12">No Blogs found</p>
            </>
          )}
        </section>
        <Footer />
      </div>
    </DocumentMeta>
  );
};

export default BlogsNews;
