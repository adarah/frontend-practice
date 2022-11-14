import hero from '@images/hero.jpeg'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useCountUp } from 'react-countup';
import { getProjects } from './project'

export default function Home() {
  return (
    <div>
      <Hero />
      <Faq />
    </div>
  )
}

const Hero = () => {
  return (
    <>
      <div className='w-vw h-[94vh] mb-10 relative'>
        <Image src={hero} alt="" fill={true} className="rounded-[2.5rem] object-cover" />
        <div className='z-10 text-white absolute bottom-8 right-10 flex space-x-12'>
          <HeroCounter number={500} text={'Art Works'} />
          <HeroCounter number={45} text={'Awards'} />
          <HeroCounter number={30} text={'Artists'} />
        </div>
      </div>
    </>
  )
}

interface HeroCounterProps {
  text: string
  number: number
}

const HeroCounter = ({ text, number }: HeroCounterProps) => {
  const ref = useRef(null)
  useCountUp({ ref, end: number, duration: 3, })
  return (
    <div>
      <p ref={ref} className='text-[5rem] font-em'/>
      <p className='text-xl'>{text}</p>
    </div>
  )
}

const Faq = () => {
  return <div />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = getProjects()
  return {
    props: { projects }
  }
}