import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "../pages/pages.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const ContactForm = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      setError("Please check above fields. All fields are required");
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      // window.open('https://example.org', '_blank');
      setLoading(true);
      const contact = { name, email, message, phone };
      axios
        .post("/contact", contact)
        .then((res) => {
          setToast(res.data.message);
          setLoading(false);
          setTimeout(() => {
            setToast(false);
          }, 4000);
        })
        .catch((err) => {
          setLoading(false);
          setToast(
            "Error submitting contact form please check above field and try again"
          );
          setTimeout(() => {
            setToast(false);
          }, 4000);
        });
    }
  };
  return (
    <div className="mt-5">
      <footer
        style={{ backgroundColor: "#0976b7" }}
        className="text-white body-font "
      >
        <div className="px-5 py-2 w-full mx-auto flex md:items-center lg:items-start  flex-wrap ">
          <div className=" md:flex flex-wrap lg:flex-nowrap sm:gap-x-6 lg:px-12 sm:justify-center lg:justify-start md:gap-x-6 gap-x-1 w-full gap-y-5  md:text-left grid grid-cols-1 sm:flex items-center footer-parent py-5">
            <div className="md:w-[48%] w-full flex md:justify-start">
              <div id="mc_embed_signup">
                <form
                  action="https://gmail.us5.list-manage.com/subscribe/post?u=9062956d830cb8468d3437ba5&amp;id=6479cb14cc&amp;f_id=00d6f9e9f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate  bg-white p-6 lg:px-12 lg:py-6 rounded-lg text-black "
                  target="_blank"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll">
                    <h2 className="text-dark text-2xl mb-4 font-semibold">
                      Subscribe
                    </h2>
                    {/* <span className="indicates-required"><span className="asterisk">*</span> indicates required</span> */}
                    <div className="mc-field-group">
                      <label className="text-sm">
                        Email Address <span className="asterisk">*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        className="required form-input email text-[14px] mb-4 w-full pb-2 border-0 outline-none border-b-2 border-gray-300"
                        id="mce-EMAIL"
                      />
                      <span
                        id="mce-EMAIL-HELPERTEXT"
                        className="helper_text"
                      ></span>
                    </div>
                    <div className="mc-field-group">
                      <label className="text-sm">
                        First Name <span className="asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        name="FNAME"
                        className="required text-[14px] form-input mb-4 w-full pb-2 border-0 outline-none border-b-2 border-gray-300"
                        id="mce-FNAME"
                      />
                      <span
                        id="mce-FNAME-HELPERTEXT"
                        className="helper_text"
                      ></span>
                    </div>
                    <div className="mc-field-group">
                      <label className="text-sm">Last Name </label>
                      <input
                        type="text"
                        name="LNAME"
                        className="text-[14px] form-input mb-4 w-full pb-2 border-0 outline-none border-b-2 border-gray-300"
                        id="mce-LNAME"
                      />
                      <span
                        id="mce-LNAME-HELPERTEXT"
                        className="helper_text"
                      ></span>
                    </div>
                    <div id="mce-responses" className="clear foot">
                      <div
                        className="response hidden"
                        id="mce-error-response"
                      ></div>
                      <div
                        className="response hidden"
                        id="mce-success-response"
                      ></div>
                    </div>
                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_9062956d830cb8468d3437ba5_6479cb14cc form-input"
                        tabIndex="-1"
                      />
                    </div>
                    <div className="optionalParent">
                      <div className="clear foot">
                        <input
                          type="submit"
                          value="Subscribe"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="button text-white form-input bg-primarylight border-0 py-2 px-8 block mt-4 focus:outline-none hover:bg-primarylight rounded text-lg w-full cursor-pointer"
                        />
                        <p className="brandingLogo">
                          <a
                            href="http://eepurl.com/h8Ax3b"
                            title="Mailchimp - email marketing made easy and fun"
                          >
                            <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* toast show on succesfull submition */}
              {toast ? (
                <>
                  <div
                    className="fixed bottom-3 lg:right-5 sm:right-1 right-1 flex items-center w-full lg:max-w-md sm:max-w-sm max-w-sm p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800 z-50"
                    role="alert"
                  >
                    <div className="text-sm py-1 font-normal">{toast}</div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="md:w-[48%] w-full ">
              <div className="md:pr-4 pr-0">
                <img
                  className="my-4 footer-logo"
                  src="/img/logo.png"
                  alt="logo"
                />
                <p className="leading-[29px] footer-text mt-8">
                  Medeskin AI is a free AI powered mobile app revolutionizing
                  skin health and care by offering quick cosmetic issue
                  classification and access to leading skin health
                  professionals.
                </p>
                <div className="flex items-center mt-4 md:justify-center justify-socials xs:justify-center sm:justify-center justify-start space-x-2">
                  {/* <a href='https://facebook.com' target='blank' className='w-10 h-10 scale-[0.8] rounded-full mycenter bg-white'><FaFacebookF className='text-[24px] text-primary' /></a> */}
                  <a
                    href="https://twitter.com/@medeskinai"
                    target="blank"
                    className="w-10 h-10 scale-[0.8] rounded-full mycenter bg-white"
                  >
                    {" "}
                    <FaTwitter className="text-[24px] text-[#0064aa]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/medeskin-ai"
                    target="blank"
                    className="w-10 h-10 scale-[0.8] rounded-full mycenter bg-white"
                  >
                    {" "}
                    <FaLinkedinIn className="text-[24px] text-[#0064aa]" />
                  </a>
                  <a
                    href="https://www.instagram.com/medeskin_ai/"
                    target="blank"
                    className="w-10 h-10 scale-[0.8] rounded-full mycenter bg-white"
                  >
                    {" "}
                    <FaInstagram className="text-[24px] text-[#0064aa]" />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="md:w-[48%] w-full ">
              <div className='md:pr- pr-0 px-20 py-2 footer-navigation'>
              <h5 className="text-white text-[13px] leading-7 4xl:leading-[30px] 4xl:text-[40px] tablet:text-[20px] md:text-[20px] lg:text-[25px] lg:leading-[60px] md:leading-[50px] tablet:leading-[45px] font-semibold">
                Company<br />
                </h5>
                <NavLink to={'/'} className="menu block px-6 text-white py-2">Home</NavLink>
                <NavLink to={'/about'} className="menu block px-6 text-white py-2">About</NavLink>
                <NavLink to={'/product'} className="menu block px-6 text-white py-2">Product</NavLink>
                <NavLink to={'/blogs'} className="menu block px-6 text-white py-2">Blogs</NavLink>
                <NavLink to={'/ethics'} className="menu block px-6 text-white py-2">Ethics</NavLink>
                
              </div>
            </div> */}
            {/* <div className="lg:w-[15%] w-full  col-span-1 sm:w-[45%]  lg:order-2 sm:order-3">
              <h2 className="title-font  text-white tracking-widest text-sm mb-10 text-[22px] font-medium mt-2">Legal</h2>
              <nav className="list-none mb-10">
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">Term & Conditions</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">Refund Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">Term & Conditions</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">Refund Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">Privacy Policy</NavLink>
                </li>


              </nav>
            </div>
            <div className="lg:w-[15%] w-full  col-span-1 sm:w-[45%] lg:order-3 sm:order-4 ">
              <h2 className="title-font  text-white-900 tracking-widest text-sm mb-10 text-[22px] font-medium mt-2">Other</h2>
              <nav className="list-none mb-10">
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">Honor Code</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-white  hover:text-white-800 text-[16px] mb-3 block">Honor Code</NavLink>
                </li>
              </nav>
            </div> */}
          </div>
        </div>
        <div className="container-fluid mx-auto py-4 px-5  flex flex-wrap justify-center bg-white flex-col sm:flex-row">
          <p className="text-blue-900 text-sm text-center sm:text-left">
            © 2022 EssayPro. Allright
          </p>
        </div>
      </footer>
    </div>
  );
}
