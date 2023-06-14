import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
const Navbar = () => {
  return (
    <div className='flex w-full pt-4 mb-12 flex-col items-center md:flex-row md:justify-between md:px-12'>
        <Link href='/' >
            <Image src="/assets/logo.png" width={"200"} height={"100"} />
        </Link>


        <div className='flex items-center space-x-8' >
            <Link href='/create-prompt' className='blue-btn' >
            Create prompt
            </Link>
            <Popover className="relative">
      <Popover.Button>
        <Image src="/assets/logo.png" width={"200"} height={"100"} />
        </Popover.Button>

      <Popover.Panel className="absolute z-10 popover-nav ">
        <div className="flex flex-col py-2 px-3 space-y-2">
          <Link href="/profile"> Profile</Link>
          <button>Log Out</button>
        </div>
      </Popover.Panel>
    </Popover>
        </div>
        </div>
  )
}

export default Navbar