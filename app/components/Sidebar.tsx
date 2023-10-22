"use client"

import { signOut, useSession } from 'next-auth/react'
import { useCollection, useCollectionData, useDocument } from 'react-firebase-hooks/firestore';
import NewChat from './NewChat'
import { collection, getDoc, getDocs, doc, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatRow from './ChatRow';
import ModelSelection from './ModelSelection';


const Sidebar = () => {
    const { data: session } = useSession()

    const [chats, loading, error] = useCollection(
        session && query(collection(db, "users", session?.user?.email!, "chats"), orderBy("createdAt", "asc")
        ))


    return (
        <div className=' p-2 flex flex-col h-screen  overflow-y-auto relative'>
            <div className='flex-1 mb-20'>
                <div>
                    <NewChat />

                    <div className='hidden sm:inline'>
                        {/* Model selection */}
                        <ModelSelection />
                    </div>

                    <div className='flex flex-col space-y-2 my-2'>
                        {loading && (
                            <div className='text-white text-center animate-pulse'>
                                <p>Loading Chats...</p>
                            </div>
                        )}


                        {chats?.docs.map(chat => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))}
                    </div>
                </div>
            </div>

            {session && (
                <div className='backdrop-blur-sm fixed bottom-0 left-0 right-0 w-[140px] md:w-[240px] py-3'>

                    <img onClick={() => signOut()}
                        src={session?.user?.image!} alt="user image"
                        className='rounded-full w-12 h-12 mx-auto mb-2 cursor-pointer hover:opacity-50 transition-all'
                    />
                </div>
            )}
        </div>
    )
}

export default Sidebar