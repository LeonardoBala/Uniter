import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src= "/icons/logo.svg"
          width={32}
          height={32}
          alt="Uniter logo"
          className="max-sm:size-10"
        />
        <p className="uniter-title">Uniter</p>
      </Link>
      
      <div className="flex-between gap-5">
        {/* Clerk for user management */}

        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar