import { bebasNeue, inter } from '@/fonts'
import { ScrollDirection, useScroll } from '@/hooks/use-scroll'
import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={bebasNeue.variable}>
      <div className='pt-7 px-7'>
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

const Nav = () => {
  const scroll = useScroll()
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    switch (scroll) {
      case ScrollDirection.NONE:
        break;
      case ScrollDirection.UP:
        setVisible(true)
        break
      case ScrollDirection.DOWN:
        setVisible(false)
        break
    }
  }, [scroll])

  const classNames = 'rounded-full py-3 px-7 mx-1 bg-content-bg-alt text-content-heading hover:bg-content-heading hover:text-content-bg-alt transition-colors duration-300'
  return (
    <nav className={`fixed font-em text-2xl w-screen pt-9 z-10 transition duration-700 ${visible ? '' : '-translate-y-96'}`}>
      <ul className='flex'>
        <li className='flex-auto'><Link href="/" className='rounded-full bg-content-heading text-white py-3.5 px-8 ml-10'>Impreza Studio</Link></li>
        <li><Link href="/projects" className={classNames}>Projects</Link></li>
        <li><Link href="/journal" className={classNames}>Journal</Link></li>
        <li><Link href="/about" className={classNames}>About</Link></li>
        <li><Link href="/contact" className={classNames + ' mr-20'}>Contact</Link></li>
      </ul>
    </nav>
  )
}

const Footer = () => {
  const transitionClass = "hover:text-footer-link-hover transition-colors duration-300"
  return (
    <footer className="flex justify-around bg-footer-bg text-white">
      <div className="flex flex-col">
        <span className="font-em">Have a project?</span>
        <Link href="mailto:info@example.com" className={`${transitionClass} underline font-em`}>Let&apos;s talk</Link>
        <Link href="mailto:info@example.com" className={transitionClass}>info@example.com</Link>
      </div>
      <nav>
        <span className="font-em">Navigation</span>
        <ul>
          <li><Link href="/projects" className={transitionClass}>Projects</Link></li>
          <li><Link href="/journal" className={transitionClass}>Journal</Link></li>
          <li><Link href="/about" className={transitionClass}>About</Link></li>
          <li><Link href="/contact" className={transitionClass}>Contact</Link></li>
        </ul>
      </nav>
      <nav>
        <span className="font-em">Socials</span>
        <ul>
          <li><Link href="" className={transitionClass}>Behance</Link></li>
          <li><Link href="" className={transitionClass}>Dribble</Link></li>
          <li><Link href="" className={transitionClass}>Facebook</Link></li>
          <li><Link href="" className={transitionClass}>Instagram</Link></li>
        </ul>
      </nav>
    </footer>
  )
}