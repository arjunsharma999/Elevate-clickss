"use client";
import React from "react";
import { motion } from "framer-motion";
import Textlink from "../../common/Button/Textlink"


function analiyst() {
  return (
    <div>
      <section className="text-white body-font my-[3rem]">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12 gap-3">
            <h1 className="sm:text-5xl text-4xl font-extrabold lg:w-[60%] title-font mb-6">
            TRANSFORMING RAW DATA INTO ACTIONABLE REPORTS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Analytical reports are not just data summaries, theyre your compass in the data-driven world. They illuminate your path, helping you navigate the complexities of business with clarity and confidence.
            </p>
            <Textlink text={"Contact Us!"} href={"/pages/Contact"} className={"font-bold"} />

          </div>
        </div>
        <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition-all cursor-pointer={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center"
            >
              <img
                className="lg:w-[35rem] mx-auto hover:scale-105 transition-all cursor-pointer-all duration-500"
                src="/services/analytics-one.png"
                alt="About Image"
              />
            </motion.div>
      </section>


        {/* last section */}
        <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 pt-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 class="text-4xl font-bold  uppercase">
              let’s understand your customer better with analytics
              </h2>
            </div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-center ">
              <p>Gain insights into user behavior and learn how to better the user experience and attract potential customers.
              </p>

            </div>
          </div>
        </div>
      </section>
      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 ">
                <p class="leading-relaxed mb-4">&#8226; Use analytics to group customers based on demographics, behaviors, and preferences.
                </p>
                <p class="leading-relaxed mb-4">&#8226; Analyze how customers interact with your website, products, or services to identify patterns and preferences. 

                </p>
                <p class="leading-relaxed mb-4">&#8226; Conduct A/B tests on website elements, emails, or ads to understand what resonates best with your audience.
                </p>
                <p class="leading-relaxed mb-4">&#8226; Monitor customer feedback and reviews to gain insights into their satisfaction, pain points, and expectations.
                </p>
                <p class="leading-relaxed mb-4">&#8226; Calculate CLV to understand the long-term value of each customer and prioritize retention efforts.

                </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition-all cursor-pointer={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center pt-4"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] lg:mt-0"
                src="/services/analytics-two.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 pt-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-start ">
              <p> With us, there a thrilling journey through the world of data, where insights are brought to life, decisions are made with confidence, and the possibilities are endless.
              </p>
            </div>
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <h2 class="text-4xl font-bold  uppercase">
              reports were boring until you meet us
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition-all cursor-pointer={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center pt-4"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] lg:mt-0"
                src="/services/analytics-three.png"
                alt="About Image"
              />
            </motion.div>
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 ">
                <p class="leading-relaxed mb-4">&#8226; Our reports come with a narrative, a storyline that guides you through the data, making it relatable and meaningful.  
                </p>
                <p class="leading-relaxed mb-4">&#8226; Our reports are designed to provide actionable insights that drive decision-making. We dont just tell you whats happening; we tell you what you can do about it.

                </p>
                <p class="leading-relaxed mb-4">&#8226; Numbers on a page used to be a blur, but our experts turn them into a roadmap for decision-making. We dont just deliver data; we deliver understanding.
                </p>
                <p class="leading-relaxed mb-4">&#8226; Our experts infuse life into analytical reports through data visualization. We transform data into dynamic charts and graphs that tell a story, making insights leap off the page.
                </p>
            </div>

          </div>
        </div>
      </section>

      <section className="text-white body-font overflow-hidden">
        <div className="container py-12 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            
          
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">Our Approach</p>

              <h2 className="text-4xl font-bold ">
              HOW WE NAVIGATE THE WORLD OF DATA
              </h2>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Data Artistry: We turn complex data into a masterpiece of simplicity, making analytics accessible to everyone, not just data scientists.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Visual Storytelling: We dont just report data; we craft visual stories that captivate, engage, and empower you to make informed decisions.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Data Whisperers: Our experts can hear what your data is saying, and they translate it into strategies that drive growth.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; The X-Ray Vision: We provide you with the X-ray vision needed to see through the complexity and extract the gems hidden within your data.
              </p>
            <Textlink text={"Book a Demo"} href={"/pages/Contact"} className={"font-bold"} />

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
                className="w-full lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/analytics-two.png"
                alt="About Image"
              />
            </motion.div>

          </div>
        </div>
      </section>
      <section className="text-white body-font my-[3rem]">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12 gap-3">
            <h2 className="text-4xl font-bold  tracking-widest">
                SOUNDS LIKE WE’RE A PERFECT FIT ?
              </h2>
              <p className="leading-relaxed mb-4">
                At Elevate Clicks, were more than just a digital marketing agency; were your growth partners.<br/> Our unwavering commitment to your success sets us apart.
              </p>
              <p className="leading-relaxed mb-4">
                Discover how our expertise aligns seamlessly with your business goals. <br/>
                If youre seeking tailored solutions and exceptional results, were the perfect fit. <br/>
                Contact us today to start a conversation that could transform your businesss digital journey.
              </p>
            <Textlink text={"Work With Us!"} href={"/pages/Contact"} className={"font-bold"} />

          </div>
        </div>
      </section>
    </div>
  );
}

export default analiyst;
