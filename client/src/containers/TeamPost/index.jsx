import React from "react";
import TeamPostCard from "./TeamPostCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/motion";
import { imgAnim } from "../../animation/motion";

function TeamPost() {
  return (
    <>
      <div className="teamPostHeader text-center my-9">
        <motion.h4
          variants={imgAnim}
          initial="hidden"
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{
            scale: [0, 1],
            opacity: 1,
          }}
          transition={{ duration: 0.84, delay: 0.1 }}
          className="text-pink-700 text-lg py-4 font-medium"
        >
          REVIEWS
        </motion.h4>
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
