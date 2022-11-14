import localFont from '@next/font/local'
import { Inter } from '@next/font/google'

export const inter = Inter({ subsets: ['latin'], weight: '400' })
export const bebasNeue = localFont({ src: '../public/fonts/BebasNeue-Regular.ttf', variable: '--font-bebas' })