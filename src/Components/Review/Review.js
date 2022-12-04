import React from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <div className=" ">
          <div className=" md:mx-16 lg:mx-24 mx-8 py-12">
            <h2 className="text-3xl text-center   font-bold poppins-b sm:text-4xl text-[#536E9B]">
              Check Our Recent Reviews!
            </h2>
          </div>

          <Slider {...settings} className="mx-12   py-12">
            <section class="bg-gradient-to-r from-[#034ca7]  to-[#5f7499] dark:bg-gray-900 rounded-lg   shadow-md hover:shadow-lg cursor-pointer  ">
              <div class="max-w-screen-sm   py-8 mx-auto text-center lg:py-24 lg:px-1   ">
                <figure class="max-w-screen-md mx-auto">
                  <svg
                    class="h-12 mx-auto mb-3 text-white dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p class="text-xl font-medium text-white md:text-lg dark:text-white">
                      "Landwind is just first awesome. It contains tons of
                      predesigned components and pages starting from login
                      screen to complex dashboard. Perfect choice for your next
                      SaaS application."
                    </p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-white dark:text-white">
                        Micheal Gough
                      </div>
                      <div class="pl-3 text-sm font-light text-white dark:text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="flex items-center justify-center gap-2  ">
                  <p className=" text-sm lg:text-2xl font-bold text-white	">
                    4.8{" "}
                  </p>
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                </div>
              </div>
            </section>
            <section class="bg-gradient-to-r from-[#034ca7]  to-[#5f7499] dark:bg-gray-900 rounded-lg  ">
              <div class="max-w-screen-sm px-4 py-8 mx-auto text-center lg:py-24 lg:px-1">
                <figure class="max-w-screen-md mx-auto">
                  <svg
                    class="h-12 mx-auto mb-3 text-white dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p class="text-xl font-medium text-white md:text-lg dark:text-white">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-white dark:text-white">
                        Micheal Gough
                      </div>
                      <div class="pl-3 text-sm font-light text-white dark:text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="flex items-center justify-center gap-2  ">
                  <p className=" text-sm lg:text-2xl font-bold text-white	">
                    4.8{" "}
                  </p>
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                </div>
              </div>
            </section>
            <section class="bg-gradient-to-r from-[#034ca7]  to-[#5f7499] dark:bg-gray-900 rounded-lg  ">
              <div class="max-w-screen-sm px-4 py-8 mx-auto text-center lg:py-24 lg:px-1">
                <figure class="max-w-screen-md mx-auto">
                  <svg
                    class="h-12 mx-auto mb-3 text-white dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p class="text-xl font-medium text-white md:text-lg dark:text-white">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-white dark:text-white">
                        Micheal Gough
                      </div>
                      <div class="pl-3 text-sm font-light text-white dark:text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="flex items-center justify-center gap-2  ">
                  <p className=" text-sm lg:text-2xl font-bold text-white	">
                    4.8{" "}
                  </p>
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                </div>
              </div>
            </section>
            <section class="bg-gradient-to-r from-[#034ca7]  to-[#5f7499] dark:bg-gray-900 rounded-lg  first-line:">
              <div class="max-w-screen-sm px-4 py-8 mx-auto text-center lg:py-24 lg:px-1">
                <figure class="max-w-screen-md mx-auto">
                  <svg
                    class="h-12 mx-auto mb-3 text-white dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p class="text-xl font-medium text-white md:text-lg dark:text-white">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-white dark:text-white">
                        Micheal Gough
                      </div>
                      <div class="pl-3 text-sm font-light text-white dark:text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="flex items-center justify-center gap-2  ">
                  <p className=" text-sm lg:text-2xl font-bold text-white	">
                    4.8{" "}
                  </p>
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                </div>
              </div>
            </section>
            <section class="bg-gradient-to-r from-[#034ca7]  to-[#5f7499] dark:bg-gray-900 rounded-lg  ">
              <div class="max-w-screen-sm px-4 py-8 mx-auto text-center lg:py-24 lg:px-1">
                <figure class="max-w-screen-md mx-auto">
                  <svg
                    class="h-12 mx-auto mb-3 text-white dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p class="text-xl font-medium text-white md:text-lg dark:text-white">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-white dark:text-white">
                        Micheal Gough
                      </div>
                      <div class="pl-3 text-sm font-light text-white dark:text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="flex items-center justify-center gap-2  ">
                  <p className=" text-sm lg:text-2xl font-bold text-white	">
                    4.8{" "}
                  </p>
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                </div>
              </div>
            </section>
            <section class="bg-gradient-to-r from-[#034ca7]  to-[#5f7499] dark:bg-gray-900 rounded-lg  ">
              <div class="max-w-screen-sm px-4 py-8 mx-auto text-center lg:py-24 lg:px-1">
                <figure class="max-w-screen-md mx-auto">
                  <svg
                    class="h-12 mx-auto mb-3 text-white dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p class="text-xl font-medium text-white md:text-lg dark:text-white">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-white dark:text-white">
                        Micheal Gough
                      </div>
                      <div class="pl-3 text-sm font-light text-white dark:text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="flex items-center justify-center gap-2  ">
                  <p className=" text-sm lg:text-2xl font-bold text-white	">
                    4.8{" "}
                  </p>
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                  <AiFillStar className="text-white" />
                </div>
              </div>
            </section>

            {/* <section class="bg-gray-50 dark:bg-gray-900">
              <div class="max-w-screen-sm px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                <figure class="max-w-screen-md mx-auto">
                  <svg
                    class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p class="text-xl font-medium text-gray-900 md:text-lg dark:text-white">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-gray-900 dark:text-white">
                        Micheal Gough
                      </div>
                      <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="flex items-center justify-center gap-2  ">
                  <p className=" text-sm lg:text-2xl font-bold text-[#3E84DC]	">
                    4.8{" "}
                  </p>
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                </div>
              </div>
            </section>
            <section class="bg-gray-50 dark:bg-gray-900">
              <div class="max-w-screen-sm px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                <figure class="max-w-screen-md mx-auto">
                  <svg
                    class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p class="text-xl font-medium text-gray-900 md:text-lg dark:text-white">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-gray-900 dark:text-white">
                        Micheal Gough
                      </div>
                      <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="flex items-center justify-center gap-2  ">
                  <p className=" text-sm lg:text-2xl font-bold text-[#3E84DC]	">
                    4.8{" "}
                  </p>
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                </div>
              </div>
            </section>
            <section class="bg-gray-50 dark:bg-gray-900">
              <div class="max-w-screen-sm px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                <figure class="max-w-screen-md mx-auto">
                  <svg
                    class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p class="text-xl font-medium text-gray-900 md:text-lg dark:text-white">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-gray-900 dark:text-white">
                        Micheal Gough
                      </div>
                      <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="flex items-center justify-center gap-2  ">
                  <p className=" text-sm lg:text-2xl font-bold text-[#3E84DC]	">
                    4.8{" "}
                  </p>
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                </div>
              </div>
            </section>
            <section class="bg-gray-50 dark:bg-gray-900">
              <div class="max-w-screen-sm px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                <figure class="max-w-screen-md mx-auto">
                  <svg
                    class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p class="text-xl font-medium text-gray-900 md:text-lg dark:text-white">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-gray-900 dark:text-white">
                        Micheal Gough
                      </div>
                      <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="flex items-center justify-center gap-2  ">
                  <p className=" text-sm lg:text-2xl font-bold text-[#3E84DC]	">
                    4.8{" "}
                  </p>
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                  <AiFillStar className="text-[#3E84DC]" />
                </div>
              </div>
            </section> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
