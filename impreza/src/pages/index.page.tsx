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
    <Image src={hero} alt="" className="w-screen h-screen rounded-lg" />
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