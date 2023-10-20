import { db } from '@/firebase'
import { collection, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { HiTrash } from 'react-icons/hi2'
import { IoChatboxOutline, } from 'react-icons/io5'
import { doc, deleteDoc } from "firebase/firestore";


type Props = {
    id: string
}
const ChatRow = ({ id }: Props) => {
    const pathname = usePathname()
    const [active, setActive] = useState(false)
    const router = useRouter()

    const { data: session } = useSession()

    const [messages, loading, error] = useCollection(
        query(collection(db, "users", session?.user?.email!, "chats", id, "messages"),
            orderBy("createdAt", "asc")
        )
    )

    useEffect(() => {
        if (!pathname) return;

        setActive(pathname.includes(id))
    }, [pathname])

    const deleteData = async () => {
        await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
        router.push('/')
    }



    return (
        <Link href={`/chat/${id}`} className={`chatRow justify-center ${active && "bg-gray-700/50"} hover:bg-gray-700/50`}>
            <IoChatboxOutline className="h-5 w-5" />
            <p className='flex-1 hidden md:inline-flex truncate'>
                {messages?.docs[messages.docs.length - 1]?.data().text || "New Chat"}
            </p>
            <HiTrash onClick={() => deleteData()} className="h-5 w-5 text-gray-700 hover:text-red-400" />
        </Link>
    )
}

export default ChatRow