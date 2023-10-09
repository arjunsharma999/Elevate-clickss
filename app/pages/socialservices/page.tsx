"use client";
import React from "react";
import { motion } from "framer-motion";
import Testimonials from "@/app/component/Testimonials/page";
import Button from "@/app/common/Button/Button";
import Textlink from "../../common/Button/Textlink"

function Socialmedia() {
  return (
    <div>
        <section className="text-white body-font overflow-hidden">
        <div className="container px-5 pb-12 pt-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <h2 className="text-4xl font-bold  tracking-widest">
               BOOST YOUR BRAND WITH OUR SOCIAL MEDIA MASTERY
              </h2>
              <p className="leading-relaxed mb-4 text-lg">Unlock the full potential of your brand with our Social Media Management Service, We craft engaging content, build meaningful connections, and drive results. Elevate your online presence today!
              </p>
            <Textlink text={"Contact Us!"} href={"/pages/Contact"} className={"font-bold"} />

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
                src="/services/socialone.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="md:w-[80%] mx-auto body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className="lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 text-center md:w-[80%] mx-auto">
              <h2 className="text-4xl font-bold ">
              SOCIAL MEDIA MARKETING AT YOUR SERVICE
              </h2>
              <p className="leading-relaxed mb-4 text-lg">Social media platforms are diverse, and each has its own unique audience and best practices. A professional service has the expertise to navigate these intricacies and optimize your presence on each platform.
              </p>
            </div>

    <div className="flex flex-wrap -m-4">
      <div className="lg:w-2/4 md:w-1/2 p-2">
        <div className="border p-4 rounded-lg">
          <img className="h-[100px] w-[100px] rounded object-cover object-center mb-6" src="/services/social-three.png" alt="content" />
          <h2 className="text-2xl  font-bold title-font mb-4">PROFILE SETUP AND OPTIMIZATION:</h2>
          <p className="text-lg">- Creating and enhancing social media profiles.<br/>
           - Consistent branding and messaging.
</p>
        </div>
      </div>
      <div className="lg:w-2/4 md:w-1/2  p-2">
        <div className="border p-4 rounded-lg">
          <img className="h-[100px] w-[100px] rounded object-cover object-center mb-6" src="/services/social-three.png" alt="content" />
          <h2 className="text-2xl  font-bold title-font mb-4">CONTENT POSTING AND SCHEDULING:
</h2>
          <p className="text-lg">- Regular updates to maintain audience engagement. <br/>
          - Strategic scheduling for maximum reach.
</p>
        </div>
      </div>
    </div>
  </div>
        </section>

        {/* //about */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <h2 className="text-4xl font-bold my-4">
              WHY YOU NEED A SOCIAL MEDIA MANAGER ?
              </h2>
              <p className="leading-relaxed mb-4 text-lg">&#8226; Social media isn’t your thing.
Hand it over to those who are trained in the industry so you can focus on other areas of your business !
              </p>
              <p className="leading-relaxed mb-4 text-lg">&#8226; You don’t have the time on your hands.
if you simply don’t have time for social media thing hand it over to experts who can help you out to be visible on social media platforms
              </p>
              <p className="leading-relaxed mb-4 text-lg">&#8226; You need to improve social media engagement
Social media manager are trained and make sure to increase the rate of engagement with your audience.

              </p>
              <p className="leading-relaxed mb-4 text-lg">&#8226; You need a clear strategy to be created
Planning and organizing your content to ensure you get the highest engagement is one of our main rules.
              </p>

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
                src="/services/social-two.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="text-white body-font overflow-hidden">
        <div className="container py-12 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            
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
                src="/services/social-two.png"
                alt="About Image"
              />
            </motion.div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">Our approach</p>

              <h2 className="text-4xl font-bold ">
              THE EASIEST WAY TO MANAGE YOUR BRANDS ON SOCIAL MEDIA
              </h2>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004;Consistent Posting: Regular, scheduled content keeps your audience engaged.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Audience Analysis: Understanding your audience's preferences informs content strategies.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Trend Awareness: Stay updated on platform trends for relevance.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004;Content Variety: Mix text, images, videos, and stories for diverse content.
              </p>
            <Textlink text={"Book a Demo"} href={"/pages/Contact"} className={"font-bold"} />

            </div>

          </div>
        </div>
      </section>
      
      <Testimonials />
    </div>
  )
}

export default Socialmedia