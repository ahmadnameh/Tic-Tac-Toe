'use client'

import { motion, Variants } from 'motion/react'
import { useState } from 'react'
import { draw, shape } from './XOCell'

export default function PathDrawing() {
  const [s, sert] = useState(false)
  return (
    <motion.div
    // initial={{ opacity: 0, x: +1000 }}
    // animate={{ opacity: 1, x: 0 }}
    // transition={{
    //   delay: 0.6,
    //   duration: 0.8,
    //   type: 'spring',
    //   bounce: 0.4,
    // }}
    >
      <motion.svg
        // width="600"
        // height="600"
        // viewBox="0 0 600 600"
        // initial="hidden"
        // animate="visible"
        // style={image}
        // className="mx-auto"
        viewBox="0 0 600 600"
        initial="hidden"
        style={image}
        animate="visible"
        className="mx-auto w-full h-auto max-w-[600px]"
      >
        <motion.circle
          className="circle-path"
          cx="100"
          cy="100"
          r="80"
          stroke="#ff0088"
          onClick={() => sert(!s)}
          variants={draw}
          custom={1}
          style={shape}
        />
        <motion.line
          x1="220"
          y1="30"
          x2="360"
          y2="170"
          stroke="#0d63f8"
          variants={draw}
          custom={2}
          style={shape}
        />
        <motion.line
          x1="220"
          y1="170"
          x2="360"
          y2="30"
          stroke="#0d63f8"
          variants={draw}
          custom={2.5}
          style={shape}
        />
        <motion.circle
          className="circle-path"
          cx="480"
          cy="100"
          r="80"
          stroke="#ff0088"
          onClick={() => sert(!s)}
          variants={draw}
          custom={3}
          style={shape}
        />
        <motion.circle
          cx="100"
          cy="300"
          r="80"
          stroke="#ff0088"
          variants={draw}
          custom={2}
          style={shape}
        />
        <motion.line
          x1="220"
          y1="230"
          x2="360"
          y2="370"
          stroke="#0d63f8"
          custom={3}
          variants={draw}
          style={shape}
        />
        <motion.line
          x1="220"
          y1="370"
          x2="360"
          y2="230"
          stroke="#0d63f8"
          custom={3.5}
          variants={draw}
          style={shape}
        />
        <motion.circle
          className="circle-path"
          cx="480"
          cy="300"
          r="80"
          stroke="#ff0088"
          onClick={() => sert(!s)}
          variants={draw}
          custom={4}
          style={shape}
        />
        <motion.circle
          cx="100"
          cy="500"
          r="80"
          stroke="#ff0088"
          variants={draw}
          custom={3}
          style={shape}
        />
        <motion.line
          x1="220"
          y1="430"
          x2="360"
          y2="570"
          stroke="#0d63f8"
          variants={draw}
          custom={4}
          style={shape}
        />
        <motion.line
          x1="220"
          y1="570"
          x2="360"
          y2="430"
          stroke="#0d63f8"
          variants={draw}
          custom={4.5}
          style={shape}
        />
        <motion.circle
          className="circle-path"
          cx="480"
          cy="500"
          r="80"
          stroke="#ff0088"
          onClick={() => sert(!s)}
          variants={draw}
          custom={5}
          style={shape}
        />
        <motion.line
          x1="30"
          y1="200"
          x2="570"
          y2="200"
          stroke="#0df8c5"
          variants={draw}
          custom={2}
          style={line}
        />
        <motion.line
          x1="30"
          y1="400"
          x2="570"
          y2="400"
          stroke="#0df8c5"
          variants={draw}
          custom={2}
          style={line}
        />

        <motion.line
          x1="200"
          y1="30"
          x2="200"
          y2="570"
          stroke="#0df8c5"
          variants={draw}
          custom={4}
          style={line}
        />
        <motion.line
          x1="380"
          y1="30"
          x2="380"
          y2="570"
          stroke="#0df8c5"
          variants={draw}
          custom={4}
          style={line}
        />
      </motion.svg>
    </motion.div>
  )
}

const image: React.CSSProperties = {
  maxWidth: '80vw',
}

const line: React.CSSProperties = {
  strokeWidth: 5,
  strokeLinecap: 'round',
  fill: 'transparent',
}
