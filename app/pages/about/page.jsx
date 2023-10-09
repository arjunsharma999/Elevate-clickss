"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/app/common/Button/Button";
import Textlink from "../../common/Button/Textlink";
import Testimonials from "@/app/component/Testimonials/page";

function page() {
  return (
    <>
      <section className="text-white body-font overflow-hidden">
        <div className="container py-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase font-semibold">
                Who we work with ?
              </p>

              <h2 className="text-4xl font-bold  tracking-widest">
                WHO ARE WE ?
              </h2>
              <p className="leading-relaxed mb-4">
                At Elevate Clicks, our purpose is crystal clear : we exist to be
                your guiding light in the ever-shifting digital landscape.
              </p>
              <p className="leading-relaxed mb-4">
                Our team comprises experienced professionals with a deep
                understanding of all facets of digital marketing, from SEO and
                SEM to social media, content marketing, and beyond. We stay
                ahead of industry trends to keep your business at the forefront.
              </p>
              <p className="leading-relaxed mb-4">
                We dont believe in one-size-fits-all strategies. Every business
                is unique, and so are its goals. We craft custom-tailored
                marketing solutions to address your specific needs and
                objectives.
              </p>
              <p className="leading-relaxed mb-4">
                Our decisions are fueled by data. We utilize advanced analytics
                and tracking tools to monitor performance, identify
                opportunities, and optimize campaigns for maximum ROI.
              </p>
              <p className="leading-relaxed mb-4">
                We believe in open and honest communication. Youll have full
                visibility into our processes and results, ensuring youre always
                informed about the progress of your digital marketing
                initiatives.
              </p>
              <p className="leading-relaxed mb-4">
                Your success is at the heart of everything we do. We are
                dedicated to building lasting relationships with our clients,
                ensuring your satisfaction is our ultimate priority.
              </p>
              <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
              />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/about.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-5xl title-font font-bold text-white mb-4">
            OUR VALUE/MORAL/MISSION
            </h1>
            <section className="text-white body-font overflow-hidden">
        <div className="container py-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/about.png"
                alt="About Image"
              />
            </motion.div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="leading-relaxed mb-4">
                At Elevate Clicks, our values and morals center around integrity, transparency, and client-centricity.
              </p>
              <p className="leading-relaxed mb-4">
                We prioritize ethical practices, provide honest guidance, and always put our clients' success first. 
              </p>
              <p className="leading-relaxed mb-4">
                With a commitment to delivering results with integrity, we forge lasting partnerships built on trust and excellence.
              </p>
              <p className="leading-relaxed mb-4">
                Our mission is clear to make our clients shine. Guided by unwavering values of integrity and transparency, we infuse our work with genuine passion. 
              </p>
              <p className="leading-relaxed mb-4">
                Our commitment to client success is the heartbeat of our agency. 
              </p>
              <p className="leading-relaxed mb-4">
                We don't just love what we do; we thrive on it. Join us on this journey of branding excellence, where every success story is our triumph.
              </p>
              <p className="leading-relaxed mb-4">
                We believe in building authentic connections with our clients, understanding their vision, and delivering results that exceed expectations. 
              </p>
              <p className="leading-relaxed mb-4">
                With every project, we pour our enthusiasm and expertise into creating brands that shine and digital strategies that thrive. 
              </p>
              <p className="leading-relaxed mb-4">
                Experience a partnership where your success is our greatest reward. Let's make your brand stand out in a digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

            </div>
          </div>
      </section>

      <Testimonials />

      <section className="text-white body-font my-[3rem]">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12 gap-3">
            <h2 className="text-4xl font-bold  tracking-widest">
                SOUNDS LIKE WE’RE A PERFECT FIT ?
              </h2>
              <p className="leading-relaxed mb-4">
                At Elevate Clicks, we're more than just a digital marketing agency; we're your growth partners.<br/> Our unwavering commitment to your success sets us apart.
              </p>
              <p className="leading-relaxed mb-4">
                Discover how our expertise aligns seamlessly with your business goals. <br/>
                If you're seeking tailored solutions and exceptional results, we're the perfect fit. <br/>
                Contact us today to start a conversation that could transform your business's digital journey.
              </p>
            <Textlink text={"Work With Us!"} href={"/pages/Contact"} className={"font-bold"} />

          </div>
        </div>
      </section>
    </>
  );
}

export default page;
