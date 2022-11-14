import hero from '@images/hero.jpeg'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
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
    <div className='w-vw h-[94vh] mb-10 relative'>
      <Image src={hero} alt="" fill={true} className="rounded-[2.5rem] object-cover"/>
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