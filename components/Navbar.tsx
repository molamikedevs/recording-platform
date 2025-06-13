import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'laminfoday19@gmail.com',
        imageUrl: 'https://avatars.githubusercontent.com/u/100646626?v=4'
    }


  return (
    <header className='navbar'>
        <nav>
            <Link href='/'>
            <Image src='/assets/icons/logo.svg' alt='Logo' width={32} height={32} />
            <h1>DoRecorder</h1>
            </Link>

            {user && (
                <figure className='user'>
                    <button>
                    <Image
                        src={user.imageUrl}
                        alt={user.firstName}
                        width={32}
                        height={32}
                        className='rounded-full aspect-square'
                    />
                    </button>
                    <button className='cursor-pointer'>
                        <Image
                            src='/assets/icons/logout.svg'
                            alt='Logout'
                            width={24}
                            height={24}
                            className='rotate-180'
                        />  
                    </button>
                </figure>
            )}
        </nav>
    </header>
  )
}

export default Navbar