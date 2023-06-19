import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const blogItem = () => {
  return (
    <div className='flex flex-row'>
        <Image alt="icon Blog" src="/images/blogIcon.png" width={200} height={200} className='rounded-lg w-[80px] h-[80px]'/>
        <div className='ml-[32px] flex flex-col justify-between'>
            <Link href='https://github.com/Xiraj/My-Portofolio' className='text-lg font-bold hover:text-zinc-600'>My Portofolio</Link>
            <div className='inline-flex gap-[32px] text-sm'>
                <span>2 hari yang lalu</span>
                <span>181 dilihat</span>
            </div>
        </div>
    </div>
  )
}

export default blogItem;