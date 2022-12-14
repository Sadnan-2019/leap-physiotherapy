import React from 'react';
import "./Blog.css"
const BlogLanding = () => {
    return (
        <div>
             <div
        className="hero min-h-screen blog "
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000"
      >
        <div className=" hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Blog</h1>
            {/* <p className="mb-5 text-xl">
            Our electrotherapy equipments are up to date and come from Japan, Germany and Holland.
            </p> */}
          </div>
        </div>
      </div>  
        </div>
    );
};

export default BlogLanding;