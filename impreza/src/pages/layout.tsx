import { bebasNeue, inter } from '@/fonts'
import Link from "next/link"
import type { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={bebasNeue.variable}>
      <div>
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/" className='font-em'>Impreza Studio</Link></li>
        <li><Link href="/" className='font-em'>Projects</Link></li>
        <li><Link href="/" className='font-em'>Journal</Link></li>
        <li><Link href="/" className='font-em'>About</Link></li>
        <li><Link href="/" className='font-em'>Contact</Link></li>
      </ul>
    </nav>
  )
}

const Footer = () => {
  const transitionClass = "hover:text-footer-blue hover:transition-colors duration-300 ease-in-out "
  return (
    <footer className="flex justify-around">
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