"use client";
import React from "react";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Field, Form, Formik, FormikErrors } from "formik";
import { sendEmail } from "./EmailService";
import Swal from "sweetalert2";

interface FormValues {
  about: string;
  region: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  comment: string;
}

const initialValues: FormValues = {
  about: "",
  region: "",
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  comment: "",
};

const validateForm = (values:FormValues): FormikErrors<FormValues> => {
  const errors: FormikErrors<FormValues> = {};
  return errors;
}

const ContactUs = () => {

  const handleSubmit =async (values:FormValues, { resetForm }: any) => {
    try{
      await sendEmail(values);
      Swal.fire({
        position:"top",
        icon: "success",
        title: "Form sent successfully",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1500,
      })

      resetForm({ values: initialValues });
      // alert("Email sent successfully");
    } catch(error){
      console.log("error", error);
      
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Oops...",
        text: "An error occurred while sending the form."
      })
    }
  }
  return (
    <div
      id="contact-us"
      className="container mx-auto px-[16px] py-20 grid grid-cols-1  md:grid-cols-5 gap-4 scroll-mt-14"
    >
      <div className="col-span-2">
        <h2 className="text-[2rem] text-black  ">Contact Us</h2>
        <div className="mb-[2rem] h-[8px] w-[60px] bg-[#97BF04]"></div>
        <p className="max-w-[40ch] text-black text-[1.1rem] mb-[1.1rem]">
          All site visits and viewings are strictly by appointment only.
        </p>

        <p className="max-w-[40ch] text-black text-[1.1rem] mb-[1.1rem]">
          Please contact the Dynamax team to book your personal tour.
        </p>

        <h5 className="font-semibold text-black mt-4 mb-3 text-[19.2px]">
          Head Office
        </h5>

        <div className="flex gap-4 mb-6">
          <svg
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.50001 0.5625C7.22163 0.565188 5.03734 1.47146 3.42628 3.08252C1.81522 4.69358 0.908947 6.87787 0.906259 9.15625C0.90353 11.0181 1.51171 12.8295 2.63751 14.3125C2.63751 14.3125 2.87188 14.6211 2.91017 14.6656L9.50001 22.4375L16.093 14.6617C16.1274 14.6203 16.3625 14.3125 16.3625 14.3125L16.3633 14.3102C17.4885 12.8278 18.0964 11.0173 18.0938 9.15625C18.0911 6.87787 17.1848 4.69358 15.5737 3.08252C13.9627 1.47146 11.7784 0.565188 9.50001 0.5625ZM9.50001 12.2812C8.88194 12.2812 8.27776 12.098 7.76385 11.7546C7.24995 11.4112 6.84941 10.9232 6.61288 10.3521C6.37636 9.78112 6.31448 9.15278 6.43505 8.54659C6.55563 7.9404 6.85326 7.38358 7.2903 6.94654C7.72734 6.5095 8.28416 6.21187 8.89035 6.0913C9.49654 5.97072 10.1249 6.0326 10.6959 6.26913C11.2669 6.50565 11.755 6.90619 12.0984 7.42009C12.4417 7.934 12.625 8.53818 12.625 9.15625C12.624 9.98473 12.2944 10.779 11.7086 11.3648C11.1227 11.9506 10.3285 12.2802 9.50001 12.2812Z"
              fill="#97BF04"
            />
          </svg>
          <p className="text-base text-black font-medium ">
            5 Burnett Street, <br />
            Somerton, VIC 3062
          </p>
        </div>

        <div className="flex gap-4 mb-6 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.487 14.14L13.422 10.444C13.2299 10.2693 12.9774 10.1762 12.7178 10.1842C12.4583 10.1922 12.212 10.3008 12.031 10.487L9.63804 12.948C9.06204 12.838 7.90404 12.477 6.71204 11.288C5.52004 10.095 5.15904 8.934 5.05204 8.362L7.51104 5.968C7.69745 5.78712 7.80617 5.54082 7.8142 5.2812C7.82223 5.02159 7.72892 4.76904 7.55404 4.57699L3.85904 0.512995C3.68408 0.320352 3.44092 0.203499 3.18119 0.187255C2.92146 0.17101 2.66564 0.256653 2.46804 0.425995L0.298038 2.28699C0.125149 2.46051 0.0219574 2.69145 0.00803782 2.93599C-0.00696218 3.18599 -0.292962 9.108 4.29904 13.702C8.30504 17.707 13.323 18 14.705 18C14.907 18 15.031 17.994 15.064 17.992C15.3086 17.9783 15.5394 17.8747 15.712 17.701L17.572 15.53C17.7421 15.333 17.8283 15.0774 17.8124 14.8177C17.7966 14.558 17.6798 14.3148 17.487 14.14Z"
              fill="#97BF04"
            />
          </svg>
          <p className="text-base text-black font-medium ">+61 4 1531 0530</p>
        </div>

        <div className="flex gap-4 mb-6 items-center">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4.608V12.75C20.0001 13.5801 19.6824 14.3788 19.1123 14.9822C18.5422 15.5856 17.7628 15.948 16.934 15.995L16.75 16H3.25C2.41986 16.0001 1.62117 15.6824 1.01777 15.1123C0.414367 14.5422 0.0519987 13.7628 0.00500011 12.934L0 12.75V4.608L9.652 9.664C9.75938 9.72024 9.87879 9.74962 10 9.74962C10.1212 9.74962 10.2406 9.72024 10.348 9.664L20 4.608ZM3.25 2.36051e-08H16.75C17.5556 -9.70147e-05 18.3325 0.298996 18.93 0.839267C19.5276 1.37954 19.9032 2.12248 19.984 2.924L10 8.154L0.016 2.924C0.0935234 2.15431 0.44305 1.43752 1.00175 0.902463C1.56045 0.367409 2.29168 0.049187 3.064 0.00500014L3.25 2.36051e-08H16.75H3.25Z"
              fill="#97BF04"
            />
          </svg>
          <p className="text-base text-black font-medium ">
            Info@dynmaxrv.com.au
          </p>
        </div>

        {/* <div className="w-full h-[240px] my-8">
                    <MapContainer center={[-37.679866, 145.438597]} zoom={12} style={{ height: '240px' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        
                            <Marker position={[-37.679866, 145.438597]}/>
                       
                    </MapContainer>
                </div> */}

        {/* <div className="flex justify-center">
                    <a href="#" className="mt-[2rem] text-base font-medium border-2 border-[#97BF04] text-[#97BF04] rounded-[1.2rem] py-1 px-6 hover:bg-[#97BF04] hover:text-white">Learn More</a>
                </div> */}
      </div>

      <div className="col-span-3 bg-[#e5e7eb] py-[32px] px-[48px] w-full">
        <h2 className="text-[32px] text-black">Send us a Message</h2>
        <div className="mb-[2rem] h-[8px] w-[100px] bg-[#97BF04]"></div>

        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({values,errors,handleChange, handleSubmit}) =>(
            <Form noValidate onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col gap-2">
            <label className="text-base text-black font-medium" htmlFor="about">
              Enquiring About
            </label>
            <Field
              id="about"
              name="about"
              type="text"
              className="bg-transparent border-2 border-gray-600 font-medium focus:border-gray-600 focus:outline-none focus:shadow-none rounded py-[8px] px-[16px] text-gray-800"
              placeholder="Mention your message purpose"
            />
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <label className="text-base text-black font-medium" htmlFor="region">
              Your Region
            </label>
            <Field
              as="select"
              id="region"
              name="region"
              className="bg-transparent border-2 border-gray-600 font-medium focus:border-gray-600 focus:outline-none focus:shadow-none rounded py-[8px] px-[16px] text-gray-400"
              placeholder="Mention your message purpose"
            >
              <option className="text-gray-800" selected value="">
                Select a country
              </option>
              <option className="text-gray-800" value="Australia">Australia</option>
              <option className="text-gray-800" value="United State">United State</option>
              <option className="text-gray-800" value="England">England</option>
            </Field>
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-base text-black font-medium" htmlFor="first_name">
                First Name
              </label>
              <Field
                id="first_name"
                name="first_name"
                type="text"
                className="bg-transparent border-2 border-gray-600 font-medium focus:border-gray-600 focus:outline-none focus:shadow-none rounded py-[8px] px-[16px] text-gray-800"
                placeholder="Your first name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base text-black  font-medium" htmlFor="last_name">
                Last Name
              </label>
              <Field
                id="last_name"
                name="last_name"
                type="text"
                className="bg-transparent border-2 border-gray-600 font-medium focus:border-gray-600 focus:outline-none focus:shadow-none rounded py-[8px] px-[16px] text-gray-800"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-base text-black  font-medium" htmlFor="phone">Phone</label>
              <Field
                id="phone"
                name="phone"
                type="text"
                className="bg-transparent border-2 border-gray-600 font-medium focus:border-gray-600 focus:outline-none focus:shadow-none rounded py-[8px] px-[16px] text-gray-800"
                placeholder="Your phone number"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base text-black  font-medium" htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="bg-transparent border-2 border-gray-600 font-medium focus:border-gray-600 focus:outline-none focus:shadow-none rounded py-[8px] px-[16px] text-gray-800"
                placeholder="Your email address"
              />
            </div>
          </div>

          <div className="mb-10 flex flex-col gap-2">
            <label className="text-base text-black  font-medium" htmlFor="comment">
              Comments
            </label>
            <Field
              as="textarea"
              id="comment"
              name="comment"
              className="bg-transparent border-2 border-gray-600 font-medium focus:border-gray-600 focus:outline-none focus:shadow-none rounded py-[8px] px-[16px] text-gray-800"
              rows={4}
            ></Field>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-[10rem] bg-[#97BF04] hover:bg-[#6E8C03] text-white text-[1.1rem] px-[12px] py-[8px] rounded"
            >
              Submit
            </button>
          </div>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUs;
