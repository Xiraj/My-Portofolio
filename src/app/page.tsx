import CardBio from '@/components/cardBio'
import Link from 'next/link'

export default function Home() {
  return (
  <div className='flex flex-col ml-[36px]'>
    <h1 className='font-bold text-[48px]'>Akbar Sirajuddin Hanif</h1>
    <p>Halo, nama saya Akbar Sirajuddin Hanif, saya suka coding khususnya dalam pengembangan mobile,
      Saya pernah mengikuti kompetisi sebagai mobile developer, web developer dan business development, saya juga pernah magang di Telkom Indonesia sebagai mobile developer.</p>
    <CardBio />
    <div className='inline-flex gap-8 mt-4'>
      <Link href="https://github.com/Xiraj" className='underline underline-offset-8'>Github</Link>
      <Link href="https://www.linkedin.com/in/akbar-sirajuddin-hanif-8603b8179/" className='underline underline-offset-8'>Linkedin</Link>
    </div>
  </div>
  )
}
