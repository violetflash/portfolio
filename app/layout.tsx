import './globals.css'
import { Header } from '@/components/header';
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Alexander Grobovskiy | Personal Portfolio',
  description: 'Alexander Grobovskiy is a React Developer with 4 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<html lang="en">
  <body className={`${inter.className} h-[5000px] relative bg-gray-50 text-gray-950 pt-28 sm:pt-36`}>
    <div
      className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
    <div
      className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
    <Header/>
    {children}
  </body>
  </html>)
}
