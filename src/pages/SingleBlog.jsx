import React, { useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import DocumentMeta from "react-document-meta";
import Footer from "../components/Footer";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import { AiOutlineClose } from "react-icons/ai";
const BlogExample = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [coverimage, setCoverImage] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  const [updatedAt, setupdatedAt] = useState(null);
  var { id } = useParams();
  // console.log(title)
  useEffect(() => {
    function getBlog() {
      axios
        .get("/blogs/" + id)
        .then((res) => {
          setCategory(res.data.category);
          setTitle(res.data.title);
          setDescription(res.data.description);
          setContent(res.data.content);
          setImage(res.data.featured_image);
          setCoverImage(res.data.cover_image);
          setCreatedAt(res.data.createdAt);
          setupdatedAt(res.data.createdAt);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
    getBlog();
  }, [id]);

  //meta description
  const meta = {
    title: "Single Blog | Medeskin AI",
    description:
      "Medeskin AI follows all the best ethics and safety practices, ensuring our users can safely and securely use our app from anywhere in the world, on any device, anytime.",
  };
  return (
    <DocumentMeta {...meta}>
      <div className={toggleIcon ? "toggle-icon" : ""}>
        <section className="flex min-h-screen w-full banner-section">
          <div className="tablet:w-[80px] w-[50px]   h-[100vh] pb-14 flex flex-col justify-between items-center bg-lightgray">
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
            <div className="flex flex-col space-y-20 text-black flex-1 justify-center items-center">
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
            <div className="flex items-center space-x-2 absolute left-[50px] tablet:left-[150px] top-0 z-50  md:p-4 p-0">
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
              <div className="slide-1 w-full relative">
                <img
                  src={image}
                  className="w-full h-[100vh] object-cover brightness-[70%]"
                  alt=""
                />

                <div className="absolute bottom-[15%] lg:bottom-[25%]  4xl:bottom-[25%] tablet:left-[10%] left-[5%] z-[2] text-white max-w-[800px]">
                  {/* <h4 className="text-white text-[40px] 4xl:text-[50px] underline underline-offset-1 mb-8">
                  01
                </h4> */}
                  <h5 className="text-white text-[20px] leading-7 4xl:leading-[80px] 4xl:text-[60px] tablet:text-[32px] md:text-[45px] lg:text-[50px] lg:leading-[60px] md:leading-[50px] tablet:leading-[45px] font-semibold">
                    {title}
                  </h5>
                  <p className="desc mt-8 max-w-[500px] 4xl:max-w-[100%] text-[14px] 4xl:text-[23px] tablet:text-[18px]">
                    {description}
                  </p>
                </div>
              </div>
              {/* <div className="absolute bottom-0 right-0 bg-white w-[50px] p-4 flex flex-col space-y-8">
              <div className="text-primary text-[25px]">
                <IoIosArrowForward />
              </div>
              <div className="text-primary text-[25px]">
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
        <section className="overflow-x-hidden px-5 mt-12" id="section-2">
          <div className="blog-content container mx-auto">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </section>
        <section className="py-[80px]">
          <div className="container px-4">
            <div className="flex space-y-12 flex-col">
              <div className="md:pb-[20px] tablet:pb-[40px] pb-[20px] border-b-2 border-b-gray-400">
                <h4 className="text-gray-700 text-[20px] tablet:text-[24px] md:mb-3 mb-2">
                  Publish Date
                </h4>
                <h3 className="text-black md:text-[25px] tablet:text-[23px] text-[18px] font-bold">
                  <Moment format="D MMM YYYY">{createdAt}</Moment>
                </h3>
              </div>
              <div className="md:pb-[30px] tablet:pb-[40px] pb-[20px] border-b-2 border-b-gray-400">
                <h4 className="text-gray-700 text-[20px] tablet:text-[24px] md:mb-6 mb-4">
                  Relevant Tag
                </h4>

                <div>
                  <NavLink
                    to={"/blogs/category/" + category}
                    className="md:px-8 px-6 py-2 md:py-2 lg:py-3 border border-primarylight md:text-[20px] text-[20px] rounded-2xl font-bold w-auto"
                  >
                    {category}
                  </NavLink>
                </div>
              </div>
              <div className="md:pb-[20px] tablet:pb-[40px] pb-[20px] border-b-2 border-b-gray-400">
                <h4 className="text-gray-700 text-[20px] tablet:text-[24px] md:mb-3 mb-2">
                  Updated Date
                </h4>
                <h3 className="text-black md:text-[25px] tablet:text-[23px] text-[18px] font-bold">
                  <Moment format="D MMM YYYY">{updatedAt}</Moment>
                </h3>
              </div>
              <div className="md:pb-[20px] tablet:pb-[40px] pb-[20px] ">
                <h4 className="text-gray-700 text-[20px] tablet:text-[24px] md:mb-8 mb-4">
                  Share
                </h4>
                <div className="flex items-center space-x-4 text-[28px] cursor-pointer text-primary">
                  <FaFacebookF /> <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </DocumentMeta>
  );
};

export default BlogExample;
