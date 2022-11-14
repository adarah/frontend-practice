import Link from "next/link"
import localFont from '@next/font/local'
import { Inter } from '@next/font/google'
import type { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

export const inter = Inter()
export const bebasNeue = localFont({ src: '../../public/fonts/BebasNeue-Regular.ttf' })

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div>
        <nav>
        </nav>
        <main className={inter.className}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

const Footer = () => {
  const transitionClass = "hover:text-footer-blue hover:transition-colors duration-300 ease-in-out "
  return (
    <footer className={"flex justify-around " + bebasNeue.className}>
      <div className="flex flex-col">
        <span>Have a project?</span>
        <Link href="mailto:info@example.com" className={transitionClass + "underline"}>Let&apos;s talk</Link>
        <Link href="mailto:info@example.com" className={transitionClass}>info@example.com</Link>
      </div>
      <nav className="inline-block">
        <span>Navigation</span>
        <ul>
          <li><Link href="/projects" className={transitionClass}>Projects</Link></li>
          <li><Link href="/journal" className={transitionClass}>Journal</Link></li>
          <li><Link href="/about" className={transitionClass}>About</Link></li>
          <li><Link href="/contact" className={transitionClass}>Contact</Link></li>
        </ul>
      </nav>
      <nav className="inline-block">
        <span>Socials</span>
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