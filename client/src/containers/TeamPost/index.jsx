import React from "react";
import TeamPostCard from "./TeamPostCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/motion";
import { imgAnim } from "../../animation/motion";

function TeamPost() {
  return (
    <>
      <div className="flex flex-col items-center teamPostHeader text-center my-9">
        <motion.div
        variants={imgAnim}
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView={{
          scale: [0, 1],
          opacity: 1,
        }}
        transition={{ duration: 0.84, delay: 0.1 }}
        className="mt-5 mb-5 bg-primary bg-opacity-10 font-semibold rounded-lg pl-5 pr-5 py-2"
        style={{ width: 'max-content' }}
      >
        <h1 className="text-center text-primary">REVIEWS</h1>
      </motion.div>


        <motion.h1
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="font-semibold text-3xl"
        >
          Go Through Reviews Of Previews Students To
        </motion.h1>
        <motion.h2
          variants={fadeIn}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 0.2, delay: 0.45 }}
          viewport={{ amount: 0.25, once: true }}
          className="text-pink-700 text-2xl py-1 font-semibold"
        >
          Make An Informed Decision
        </motion.h2>
      </div>
      <div>
        <TeamPostCard />
      </div>
    </>
  );
}

export default TeamPost;
