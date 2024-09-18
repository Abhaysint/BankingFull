"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { use } from 'react'
import CountUp from 'react-countup'


const AnimatedCounter = ({amount}:{amount: number}) => {
  return (
    <div className='w-full'>
      <CountUp 
      duration={4}
      decimal=","
      prefix="₹"
      end={amount} />
    </div>
  )
}

export default AnimatedCounter
