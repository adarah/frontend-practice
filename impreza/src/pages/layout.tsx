import { bebasNeue } from '@/fonts'
import { ScrollDirection, useScroll } from '@/hooks/use-scroll'
import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={bebasNeue.variable}>
          <Nav />
          <main className='z-10 relative'>{children}</main>
        <Footer />
      </div>
    </>
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

  const classNames = 'rounded-full py-3.5 px-9 bg-content-bg-alt text-content-heading hover:bg-content-heading hover:text-content-bg-alt transition-colors duration-300'
  return (
    <nav className={`fixed font-bold font-em text-2xl w-screen px-14 py-14 z-20 transition duration-700 ${visible ? '' : '-translate-y-96'}`}>
      <ul className='flex space-x-3'>
        <li className='flex-auto'><Link href="/" className='rounded-full py-3.5 px-9 bg-content-heading text-white'>Impreza Studio</Link></li>
        <li className=''><Link href="/projects" className={classNames}>Projects</Link></li>
        <li><Link href="/journal" className={classNames}>Journal</Link></li>
        <li><Link href="/about" className={classNames}>About</Link></li>
        <li><Link href="/contact" className={classNames}>Contact</Link></li>
      </ul>
    </nav>
  )
}

const Footer = () => {
  const transitionClass = "hover:text-footer-link-hover transition-colors duration-300"
  return (
    <footer className='sticky bottom-0 w-full'>
      <div className="grid grid-cols-4 grid-rows-2 bg-footer-bg text-white py-32 px-30">
        <div className="col-span-2">
          <span className="font-em text-4xl mb-10 row-span-2">Have a project?</span>
          <Link href="mailto:info@example.com" className={`${transitionClass} underline font-em text-9xl row-span-4`}>Let&apos;s talk!</Link>
          <Link href="mailto:info@example.com" className={`${transitionClass} text-xl`}>info@example.com</Link>
        </div>
        <nav className='col-span-1'>
          <span className="font-em text-5xl mb-10">Navigation</span>
          <ul className='text-2xl'>
            <li><Link href="/projects" className={transitionClass}>Projects</Link></li>
            <li><Link href="/journal" className={transitionClass}>Journal</Link></li>
            <li><Link href="/about" className={transitionClass}>About</Link></li>
            <li><Link href="/contact" className={transitionClass}>Contact</Link></li>
          </ul>
        </nav>
        <nav className='col-span-1'>
          <span className="font-em text-5xl mb-10">Socials</span>
          <ul className='text-2xl'>
            <li><Link href="" className={transitionClass}>Behance</Link></li>
            <li><Link href="" className={transitionClass}>Dribble</Link></li>
            <li><Link href="" className={transitionClass}>Facebook</Link></li>
            <li><Link href="" className={transitionClass}>Instagram</Link></li>
          </ul>
        </nav>

      </div>
    </footer>
  )
}