import React, { useState } from "react";

import MultiStepForm from "./MultiStepForm"

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className=" flex flex-col justify-center p-8 items-center">
      <p className="font-bold text-5xl text-green-500 mb-8">Hello World</p>
      <div className=" flex flex-col items-center">
        <p className="text-2xl w-full text-justified mb-12">
          This is a Web Development template for a multi step form
        </p>
        <ul className="flex flex-col items-center bg-gray-300 rounded-2xl p-4">
          <li className="flex items-center h-24 ">
            <p className="">
              <span className="text-2xl text-green-600">Webpack</span> to bundle
              all of our js, css, and images. It also provides us with a
              development server.
            </p>
          </li>
          <li className="flex items-center h-24 ">
            <p>
              <span className="text-2xl text-green-600">React</span> will allow
              us quickly and painlessly create reuseable UI components.
            </p>
          </li>
          <li className="flex items-center h-24 ">
            <a className="bg-green-500 rounded-full h-12 w-24 flex items-center justify-center" onClick={() => setOpen(true)}>
              open form
            </a>
          </li>
        </ul>
      </div>
      <MultiStepForm open={open} setOpen={setOpen}></MultiStepForm>
    </div>
  );
};

export default LandingPage;
