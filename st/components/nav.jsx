"use client";

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const nav = () => {

    const isUSerLoggedIn = true;

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setProviders();
    }, [])


    return (
        <nav className="flex justify-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/logo.svg"
                    width={60}
                    height={30}
                    className='object-contain'></Image><p className='logo_text'>PromtoX</p>
            </Link>


            {/* Desktop Nav */}
            <div className="sm:flex justify-between hidden">
                {isUSerLoggedIn ?
                    (<div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">Create Post</Link>
                        <button type='button' onClick={signOut} className="outline_btn">Sign Out</button>

                        <Link href="/profile">
                            <Image src="/assets/images/logo.svg" alt="Profile" width={37} height={37} className="rounded-full my-2"></Image>
                        </Link>
                    </div>)
                    :
                    (<>
                    {
                            providers && Object.values(providers).map((provider) => (
                                <button type='button' key={provider.name} onClick={()=>{signIn}} className='black_btn'>
                                    Sign In

                                </button>
                            ))
                    }



                    </>)}
            </div>



            {/* Mobile Nav  */}
            <div className="flex sm:hidden relative"></div>
        </nav>
    )
}

export default nav
