import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const BASE_URL = "https://medeskin.ai/";

export default function LatestBlogs() {
  const [blog, setBlog] = useState([]);
  const [firstblog, setfirstblog] = useState([]);
  function Blogs() {
    axios
      .get("blogs")
      .then((res) => {
        setBlog(res.data);
        setfirstblog(res.data[1]);
      })
      .catch(() => {});
  }
  useEffect(() => {
    Blogs();
  }, []);
  return (
    <div className="blog">
      {blog.length > 0 ? (
        <>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-6 items-center">
            <div className="w-full col-span-1 bg-white shadow-lg rounded-2xl ">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1280: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                }}
              >
                {blog.map((blog, index) => (
                  <SwiperSlide
                    className="overflow-hidden pb-[55px] bg-white"
                    key={index}
                  >
                    <NavLink
                      to={"/blog/" + blog.slug}
                      className="block text-primarylight mt-2"
                    >
                      <div className="blog-card">
                        <img
                          className="w-full min-h-[250px] max-h-[250px] px-2 rounded-[1.4rem]"
                          src={BASE_URL + blog.cover_image}
                          alt={blog.title}
                        />
                        <div className="content px-10 p-3 flex flex-col space-y-3">
                          <div className="flex space-x-2">
                            {/* <img
                                                    className="lg:w-[50px] lg:h-[50px] tablet:w-[40px] tablet:h-[40px] h-[30px] w-[30px] bg-primarylight/10 md:p-3 p-0 rounded-full"
                                                    src="/img/women.png"
                                                    alt="women"
                                                /> */}
                            <div>
                              <h4 className="text-primary">{blog.category}</h4>
                              <h6 className="title text-black lg:text-[24px] tablet:text-[18px] text-[16px] font-semibold">
                                {blog.title}
                              </h6>
                            </div>
                          </div>
                          <p className="desc text-black">{blog.description}</p>
                          <p className="block text-primarylight mt-2">
                            Read More...
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full blog-card xl:col-span-3 lg:col-span-2 col-span-1 px-4 py-3 shadow-lg rounded-2xl bg-white ">
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grd-cols-1 gap-6 items-center">
                <div className="col-span-1">
                  <img
                    className="w-full rounded-xl h-full min-h-[500px]"
                    src={BASE_URL + firstblog.cover_image}
                    alt={firstblog.title}
                  />
                </div>
                <div className="xl:col-span-2 lg:col-span-1 col-span-1">
                  <div className="header">
                    <h4 className="text-primary">{firstblog.category}</h4>
                    <h6 className="lg:text-[22px] tablet:text-[20px] text-[18px] font-semibold">
                      {firstblog.title}
                    </h6>
                    <p className="my-3 desc">{firstblog.description}</p>
                    <NavLink
                      to={"/blog/" + firstblog.slug}
                      className="block text-primarylight my-2"
                    >
                      Read More...
                    </NavLink>
                  </div>
                  <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-5">
                    {blog.slice(2, 5).map((blog, index) => (
                      <div
                        className="blog-card p-2 rounded-sm shadow-lg "
                        key={index}
                      >
                        <NavLink
                          to={"/blog/" + blog.slug}
                          className="block text-[10px]"
                        >
                          <div className="overflow-hidden h-full">
                            <img
                              className="w-full h-[100px] object-cover rounded-lg"
                              src={BASE_URL + blog.image}
                              alt={blog.title}
                            />
                            <div className="content tabelt:px-4 tablet:py-2 py-1 px-1 flex flex-col space-y-2">
                              <h6 className="text-[18px] font-semibold">
                                {blog.title}
                              </h6>
                              <p className="desc text-[13px]">
                                {blog.description}
                              </p>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-2xl text-center py-3">No Blogs found</p>
        </>
      )}
    </div>
  );
}
