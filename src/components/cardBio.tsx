import React from 'react'
import Image from 'next/image';

const Item = ({icon = "", value="value", label="label"}) => {
  return (
    <div className='inline-flex text-sm'>
          <Image alt="icon" width={20} height={20} src={icon} className='mr-2' />
          <span className='font-bold mr-1'>{value}</span>
          <span>{label}</span>
        </div>
  )
}

const cardBio = () => {
  return (
    <div className='inline-flex gap-[28px] justify-center items-center rounded-lg border border-zinc-100 w-[312px] h-[134px]'>
      <Image alt='my-photo' width={80} height={80} src="/images/photo.png" />
      <div className='flex flex-col gap-2'>
        <Item icon='/images/project.png' value='11' label='Project Selesai'/>
        <Item icon='/images/github.png' value='77' label='Repository' />
        <Item icon='/images/deal.png' value='21' label='Pengikut'/>
      </div>
    </div>
  )
}

export default cardBio;