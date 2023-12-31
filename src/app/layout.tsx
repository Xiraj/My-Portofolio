import './globals.css'
import { Gothic_A1 } from 'next/font/google';
import Sidebar from '@/components/sidebar';
import clsx from 'clsx';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akbar',
  description: 'My Portfolio',
}

const gothic_A1 = Gothic_A1 ({
  weight: ["400", "700"],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={clsx('flex flex-row w-[1000px] mx-auto mt-[100px]', gothic_A1.className)}>
          <Sidebar/>
          <main className='flex flex-grow'>{children}</main>
        </div>
      </body>
    </html>
  )
}
