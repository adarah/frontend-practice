import { useTypewriter } from '@/hooks/use-typewriter';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import hero from '@images/hero.jpeg';
import type { GetStaticProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { useCountUp } from 'use-count-up';

import { getProjects } from './project';

export default function Home() {
  return (
    <>
      <div className='pt-7 px-7 bg-white h-screen'>
        <Hero />
        <div></div>
      </div>
      <Faq />
    </>
  )
}

const words = ['art direction', 'filming', 'production', 'branding', 'marketing']
const Hero = () => {
  const { word: expertise, blink } = useTypewriter(words)
  return (
    <section className='w-vw h-[94vh] relative bg-white'>
      <h1 className='z-10 text-white text-[7.5rem] font-em absolute bottom-8 left-7 leading-none'>
        <span className="block">We are experts </span>
        <span className={`block after:font-thin after:content-['|'] ${blink ? 'after:animate-blink' : ''}`}> in {expertise}</span>
      </h1>
      <div className='z-10 text-white absolute bottom-8 right-7 flex space-x-12'>
        <HeroCounter number={500} text={'Art Works'} />
        <HeroCounter number={45} text={'Awards'} />
        <HeroCounter number={30} text={'Artists'} />
      </div>
      <Image src={hero} alt="" fill={true} className="rounded-[2.5rem] object-cover" />
    </section>
  )
}

interface HeroCounterProps {
  text: string
  number: number
}

const HeroCounter = ({ text, number }: HeroCounterProps) => {
  const { value } = useCountUp({ isCounting: true, end: number, duration: 3 })
  return (
    <div className='leading-tight'>
      <p className='text-[5rem] font-em'>{value}</p>
      <p className='text-2xl'>{text}</p>
    </div>
  )
}

interface FaqEntry {
  question: string
  answer: string
  color: string
}

const questions: FaqEntry[] = [
  {
    question: 'What are your areas of focus as a UI/UX and web design agency?',
    answer: 'We use an integrated approach to solving problems, and our team consists of specialists with different competencies. The main composition of the agency is presented in this section. To solve indivquestionual problems, we strengthen the team, working with partners from various marketing areas. We carry out effective management of projects of varying complexity, and the experience of cooperation with small, medium and large businesses allows us to be versatile and efficient.',
    color: 'text-yellow-200/90'
  },
  {
    question: 'What separates from other top UX and web design agencies?',
    answer: 'We use an integrated approach to solving problems, and our team consists of specialists with different competencies. The main composition of the agency is presented in this section. To solve indivquestionual problems, we strengthen the team, working with partners from various marketing areas. We carry out effective management of projects of varying complexity, and the experience of cooperation with small, medium and large businesses allows us to be versatile and efficient.',
    color: 'text-pink-300/90'
  },
  {
    question: 'Can your UX design agency help me with web design?',
    answer: 'We use an integrated approach to solving problems, and our team consists of specialists with different competencies. The main composition of the agency is presented in this section. To solve indivquestionual problems, we strengthen the team, working with partners from various marketing areas. We carry out effective management of projects of varying complexity, and the experience of cooperation with small, medium and large businesses allows us to be versatile and efficient.',
    color: 'text-purple-300/90'
  },
  {
    question: 'Do you branding or should i hire a separate branding agency',
    answer: 'We use an integrated approach to solving problems, and our team consists of specialists with different competencies. The main composition of the agency is presented in this section. To solve indivquestionual problems, we strengthen the team, working with partners from various marketing areas. We carry out effective management of projects of varying complexity, and the experience of cooperation with small, medium and large businesses allows us to be versatile and efficient.',
    color: 'text-sky-300/90'
  },
  {
    question: 'How much does it cost to hire you for a UI/UX design project',
    answer: 'We use an integrated approach to solving problems, and our team consists of specialists with different competencies. The main composition of the agency is presented in this section. To solve individual problems, we strengthen the team, working with partners from various marketing areas. We carry out effective management of projects of varying complexity, and the experience of cooperation with small, medium and large businesses allows us to be versatile and efficient.',
    color: 'text-emerald-300/90'
  },
]

const Faq = () => {
  const [current, setCurrent] = useState('')
  return (
    <section className='bg-content-primary pt-16 pb-32 px-48'>
      <h2 className='font-em text-8xl text-white py-12'>FAQ</h2>
      <ul className='border-y border-white/30 divide-y divide-white/30 max-w-5xl'>
        {questions.map((q) => (<FaqItem key={q.question} entry={q} open={q.question === current} setCurrent={setCurrent} />))}
      </ul>
    </section >
  )
}

interface FaqItemProps {
  entry: FaqEntry
  open: boolean
  setCurrent: (c: string) => void
}

const FaqItem = ({ entry: q, open, setCurrent }: FaqItemProps) => {
  return (
    <li className={q.color} onClick={() => setCurrent(open ? '' : q.question)}>
      <div className='font-em text-4xl py-7 flex justify-between' >
        <span>{q.question}</span>
        <span className={'flex-shrink h-min align-middle text-xl transition-transform duration-300' + ` ${open ? 'rotate-180' : ''}`}>▾</span>
      </div>
      <p className={"text-xl leading-8 transition-all duration-300" + ` ${open ? 'py-6 opacity-1 max-h-64' : 'invisible max-h-0 opacity-0'}`}>{q.answer}</p>
    </li>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = getProjects()
  return {
    props: { projects }
  }
}