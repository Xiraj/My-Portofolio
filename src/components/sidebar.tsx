'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';
import { usePathname } from 'next/navigation'

interface Props {
    params?: any
}

interface ItemProps {
    href?:string
    text?:string
    isActive?: boolean
}

const Item = ({ href = "/", text = "Link"  }: ItemProps) => {
    const pathName = usePathname();
    return (
    <div> 
        <Link
            href={href}
            className={clsx('text-sm px-4 py-2 text-zinc-900 hover:bg-zinc-100 rounded-md',
            pathName === href && 'bg-zinc-100')}
        >
            {text}
        </Link>
      </div>
    );
  };
  
const Sidebar = ({}: Props) => {
  return (
    <div className='flex flex-col w=[231px] gap-[11px]'>
        <Image alt='Logo' width={54} height={54} className='mx-4 mb-4' src="/images/logo.png" />
        <div className='flex flex-col gap-[11px]'>
            <Item href={"/"}  text="Home"/>
            <Item href={"/about"} text="About"/>
            <Item href={"/blog"} text="Blog"/>
        </div>
    </div>
  )
}

export default Sidebar;