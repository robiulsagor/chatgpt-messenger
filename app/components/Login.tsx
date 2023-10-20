"use client"

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'


const Login = () => {
    return (
        <div className='bg-[#0fa27e] flex flex-col items-center justify-center h-screen space-y-14'>
            <Image
                src={'/gpt.png'}
                width={150}
                height={150}
                alt='logo'
            />
            <button className='bg-black text-white rounded-lg py-2 px-5 text-2xl animate-pulse' onClick={() => signIn()}>Sign in to MyGPT</button>
        </div>
    )
}

export default Login