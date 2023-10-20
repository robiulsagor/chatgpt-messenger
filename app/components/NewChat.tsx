import { AiOutlinePlus } from 'react-icons/ai'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'

const NewChat = () => {
    const router = useRouter()

    const { data: session } = useSession()

    const newChat = async () => {
        const chat = await addDoc(
            collection(db, "users", session?.user?.email!, "chats"),
            {
                userId: session?.user?.email,
                createdAt: serverTimestamp()
            }
        )
        router.push(`/chat/${chat.id}`)
    }

    return (
        <div onClick={newChat} className='border border-gray-700 chatRow hover:bg-gray-700/70 '>
            <AiOutlinePlus className="h-4 w-4" />
            <p className='pointer-events-none'>New Chat</p>
        </div>
    )
}

export default NewChat