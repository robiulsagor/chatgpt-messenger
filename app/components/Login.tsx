"use client"

import { signIn, signOut, useSession } from 'next-auth/react'


const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <button className='bg-black text-white rounded-lg py-2 px-5 text-3xl' onClick={() => signIn()}>Login</button>
        </div>
    )
}

export default Login