'use client'
import React from 'react'
import cx from 'clsx'
import { motion } from 'framer-motion'
import { DiReact } from 'react-icons/di'
import { RiVuejsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { AiOutlineAntDesign } from 'react-icons/ai'

import styles from './index.module.scss'
import { quicksandFont } from 'styles/font'

const AnimatedIcon = ({ children }: { children?: React.ReactNode }) => {
  return (
    <motion.div
      className={styles.icon}
      whileTap={{ scale: 1.2 }}
      whileHover={{ scale: 1.3 }}
    >
      {children}
    </motion.div>
  )
}

const Hero = () => {
  return (
    <div className={cx(styles.container, quicksandFont.className)}>
      <div className={styles.inner_container}>
        <div className={styles.icon_container}>
          <AnimatedIcon>
            <DiReact />
          </AnimatedIcon>
          <AnimatedIcon>
            <TbBrandNextjs />
          </AnimatedIcon>
          <AnimatedIcon>
            <RiVuejsLine />
          </AnimatedIcon>
          <AnimatedIcon>
            <AiOutlineAntDesign />
          </AnimatedIcon>
        </div>

        <div className={styles.content_container}>
          <div className={styles.item}>
            {'Frontend'.split('').map((letter, index) => (
              <div key={`${letter}-${index}`} className={styles.letter}>
                {letter}
              </div>
            ))}
            <span style={{ marginLeft: 8 }}>•</span>
          </div>
          <div className={styles.item}>
            <span style={{ marginRight: 8 }}>•</span>
            {'Developer'.split('').map((letter, index) => (
              <div key={`${letter}-${index}`} className={styles.letter}>
                {letter}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.name}>Werawit Sirakunwat</div>
      </div>
    </div>
  )
}

export default Hero
