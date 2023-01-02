import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import random from 'lodash/random'

import styles from './index.module.scss'

export interface StarModel {
  id: string
  top: number
  left: number
  size: number
}

export const generateStar = (count = 65): StarModel[] =>
  new Array(count).fill(0).map(() => ({
    id: nanoid(),
    top: random(100),
    left: random(100),
    size: random(0.5, 5, true),
  }))

const Galaxy = ({ defaultStars }: { defaultStars?: StarModel[] }) => {
  const [stars, setStars] = useState<StarModel[]>(defaultStars ?? [])

  useEffect(() => {
    if (!!defaultStars?.length) return

    const stars = generateStar()

    const len = Math.floor(stars.length / 2)
    const first = stars.slice(0, len)
    const second = stars.slice(len, stars.length)

    setStars(first)

    setTimeout(setStars, 1_000, [...first, ...second])
    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles.galaxy_container}>
      {stars?.map(({ id, left, size, top }) => (
        <div
          key={id}
          className={styles.star}
          style={{
            width: size,
            height: size,
            top: `${top}%`,
            left: `${left}%`,
          }}
        />
      ))}
    </div>
  )
}

export default Galaxy
