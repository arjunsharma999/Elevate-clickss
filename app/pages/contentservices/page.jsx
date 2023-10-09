"use client";
import React from "react";
import { motion } from "framer-motion";
import Textlink from "../../common/Button/Textlink"


function Contentservices() {
  return (
    <div>
   {/* first sction */}
   <section className="text-white body-font overflow-hidden">
        <div className="container px-5 pb-12 pt-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-4">
              <h2 className="text-4xl font-bold ">CONTENT IS THE HEART OF DIGITAL COMMUNICATION
              </h2>
              <p className="leading-relaxed mb-4 text-xl">We're not just creating content; we're crafting conversations. Dive into our world of words, where stories resonate, and connections flourish. Unleash the power of meaningful content.
              </p>
            <Textlink text={"Contact Us"} href={"/"} className={"font-bold"} />

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
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0 hover:scale-105 transition-all duration-500"
                src="/services/content-one.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

        {/* last section */}
      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-4">
                <p className="text-sm uppercase">what we  provide  ?</p>
                <h2 class="text-4xl font-bold"> HOW CONTENT MARKETING CAN BE A GAME CHANGER
              </h2>
                <p class="leading-relaxed mb-4 text-lg">In the digital age, your online presence is your business card. Content marketing allows you to carve out a unique space in the digital landscape.
                </p>
                <p class="leading-relaxed mb-4 text-lg">When you offer informative, well-researched content, you position yourself as an industry authority—a brand that customers can rely on.
                </p>
                <p class="leading-relaxed mb-4 text-lg">Today's consumers are savvy and demand more than just a sales pitch. They want to engage with brands that provide value. It's about telling stories, solving problems, and sparking conversations.
                </p>
                <p class="leading-relaxed mb-4 text-lg">Content marketing allows you to educate your audience about your products or services. By addressing their pain points and answering their questions, you empower them to make well-informed choices
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
              className="flex items-center pt-4"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] lg:mt-0 hover:scale-105 transition-all duration-500"
                src="/services/content-two.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>


        {/* team */}
        <section className="body-font">
        <div className="container px-5 py-24 mx-auto bg-white bg-opacity-10">
          <div className="lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 text-center md:w-[80%] mx-auto">
            <h2 className="text-4xl font-bold ">
            TYPES OF CONTENT MARKETING  SERVICE WE PROVIDE
            </h2>
            <p className="leading-relaxed mb-4 text-lg">
              Effective content marketing strategies often involve a mix of these content types. The choice of content type depends on the target audience, industry, and overall marketing goals.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 w-[70%] mx-auto">
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-one.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">BLOG</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-three.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">SOCIAL MEDIA</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-two.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">PODCASTS</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-6.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">EMAIL NEWSLETTERS</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-five.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">INFOGRAPHICS</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-four.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">YOUTUBE</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* section */}
      <section class="text-white body-font overflow-hidden">
        <div class="container py-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center pt-4"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] lg:mt-0 hover:scale-105 transition-all duration-500"
                src="/services/content-two.png"
                alt="About Image"
              />
            </motion.div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">why work with us ?</p>

              <h2 className="text-4xl font-bold ">
              BENEFITS TO START YOU’RE CONTENT JOURNEY NOW
              </h2>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Content can quickly boost your online visibility, driving organic traffic and engagement, leading to quicker results.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Building trust takes time, and starting now means you can nurture customer relationships sooner, leading to increased loyalty.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Establishing thought leadership in your niche becomes more achievable when you begin your content marketing journey promptly.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Create a Lasting Connection with Customers through Valuable and Relevant Content
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Early Mover Advantage will get you ahead of competitors who may still be on the sidelines, establishing your brand's presence before they catch up.
              </p>
            <Textlink text={"case study"} href={"/"} className={"font-bold"} />

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contentservices