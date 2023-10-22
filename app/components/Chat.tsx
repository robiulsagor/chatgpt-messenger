"use client"
import { db } from "@/firebase"
import { collection, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import Message from "./Message"
import { IoArrowDownCircle } from "react-icons/io5"


type Id = {
    chatId: string
}

const Chat = ({ chatId }: Id) => {
    const { data: session } = useSession()
    const [messages] = useCollection(session && query(
        collection(db, "users", session?.user?.email!, "chats", chatId, "messages"),
        orderBy("createdAt", "asc")
    ))



    return (
        <div className='flex-1 overflow-y-auto'>
            {messages?.empty && (
                <>
                    <p className="mt-10 text-white text-center">
                        Type a prompt in below to get started!
                    </p>

                    <IoArrowDownCircle className="h-10 w-10 text-white mx-auto mt-6 animate-bounce" />
                </>
            )}

            {messages?.docs.map(message => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    )
}

export default Chat