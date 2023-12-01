"use client";
import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import { BsFillPinAngleFill } from "react-icons/bs"




const delegates = [
  {
    name: "- Dr. N.R.Dhande, President, VYWS, Amravati",
    description:
      "The IPER, Wardha is managed by the Vidarbha Youth Welfare Society, Amravati. The V. Y. W. Society was established in the year 1965, with the objective to uplift the rural students in academic excellence particularly in the field of Science and Technology. The society runs 70 Institutions from pre – primary to ",
    image: "/n_r_dhande.jpg",

  },
  {
    name: "- Dr. R. O. Ganjiwale, Principal, IPER, Borgaon",
    description: "I am pleased to welcome you to the Institute of Pharmaceutical Education and Research, one of the outstanding institutions of Pharmaceutical Education and Reaearch in the Country. I hope our website will provide you with sufficient information to meet your needs as well as introduce ",
    image: "/Ganjiwale.jpg",

  },

]

const about = [
  {
    description: "I am pleased to welcome you to the Institute of Pharmaceutical Education and Research, one of the outstanding institutions of Pharmaceutical Education and Reaearch in the Country. I hope our website will provide you with sufficient information to meet your needs as well as introduce ",
  }
]

const AboutSection = () => {
  return (
    <>
      <section id="delegates">
        {/* <h1 className="my-10 text-center font-bold text-4xl">
        delegates
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1> */}

        <div className="flex flex-col space-y-20  mt-20">
          {delegates.map((delegate, idx) => {
            return (
              <div key={idx} className=" mx-auto">
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col justify-around  align-middle  animate-slideUpCubiBezier animation-delay-5 md:flex-row  mx-4 space-y-1/2">
                    <div className=" ">
                      <Image
                        src={delegate.image}
                        alt=""
                        width={130}
                        height={170}
                        className=" rounded-sm border border-black  shadow-xl "
                      />

                    </div>
                    <div className=" mt-3 md:w-3/4 ">
                      <p className="text-xl leading-7 mb-1 text-black ">
                        {delegate.description}
                        <span className="text-orange-700 text-xl cursor-pointer hover:underline
                      "
                          onClick={() => { }}>Read more...</span>
                      </p>

                      <h1 className="text-xl font-bold mb-3">{delegate.name}</h1>
                    </div>
                  </div>
                </SlideUp>
              </div>

            )
          })}

        </div>
        <div className="flex  flex-col">
          <h3 className="my-20 text-center font-bold text-4xl flex items-center justify-center bg-slate-200 underline p-3 w-[95%] mx-2">
            <span>
              {/* <BsFillPinAngleFill className="text-4xl text-red-700" /> */}
            </span>
            <span className="mx-2 text-2xl md:text-3xl   text-black  font-semibold">
              <span className="text-orange-400">About</span> Institute
            </span>
          </h3>
          <div className="">
            {about.map((about, idx) => {
              return (
                <div key={idx} className=" mx-auto">
                  <SlideUp offset="-300px 0px -300px 0px">
                    <div className="flex flex-col justify-center  align-middle  animate-slideUpCubiBezier animation-delay-5 md:flex-row  mx-4 space-y-1/2">

                      <div className=" mt-3 md:w-3/4 ">
                        <p className="text-2xl leading-7 mb-1 text-black ">
                          {about.description}
                          <span className="text-orange-700 text-xl cursor-pointer hover:underline
                        "
                            onClick={() => { }}>Read more...</span>
                        </p>
                      </div>
                    </div>
                  </SlideUp>
                </div>

              )
            })}

          </div>
        </div>
      </section>



    </>


  )
}

export default AboutSection;
