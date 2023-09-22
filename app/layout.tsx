import './globals.css'
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ActiveSectionContextProvider } from '@/context/active-section-context';
import { cn } from '@/utils/cn';
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

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
  return (<html lang="en" className="!scroll-smooth">
  <body className={`${inter.className} relative bg-gray-50 text-gray-950 pt-28 sm:pt-36`}>
    <div
      className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
    <div
      className={cn(
        'bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]',
        'sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'
      )}></div>
    <ActiveSectionContextProvider>
      <Header/>
      {children}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }}/>
      <Footer />
    </ActiveSectionContextProvider>
  </body>
  </html>)
}
