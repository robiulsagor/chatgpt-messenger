"use client"

import { db } from "@/firebase";
import axios from "axios";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { IoPaperPlane } from "react-icons/io5";
import ModelSelection from "./ModelSelection";
import useSWR from "swr"

type Id = {
    chatId: string
}

const ChatInput = ({ chatId }: Id) => {
    const [prompt, setPrompt] = useState("")
    const { data: session } = useSession()

    const { data: model } = useSWR("model", {
        fallbackData: 'text-davinci-003'
    })

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!prompt) return

        const input = prompt.trim()
        setPrompt("")

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image || `https://ui-avatars.com/api/name=${session?.user?.name}`
            }
        }

        await addDoc(
            collection(db, "users", session?.user?.email!, "chats", chatId, "messages"),
            message
        )

        const notification = toast.loading('MyGPT is thinking...');

        const data = {
            prompt: input,
            chatId,
            model,
            session
        }
        const response = await axios.post("/api/askQuestion", data)
        if (response) {
            toast.success("MyGPT has responded!", {
                id: notification
            })
        }
    }

    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
            <form onSubmit={sendMessage}
                className="flex items-center p-5 space-x-5">
                <input type="text" name="" id=""
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                    className="bg-transparent flex-1 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 text-white" placeholder="Type your message here..."
                    disabled={!session}
                    autoFocus
                />
                <button className="bg-[#11a37f] px-4 py-2 text-white  rounded-lg hover:opacity-50 disabled:hover:opacity-100 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={!prompt || !session}>
                    <IoPaperPlane className="text-gray-100 h-4 w-4" />
                </button>
            </form>

            <div className="md:hidden">
                <ModelSelection />
            </div>
        </div>
    )
}

export default ChatInput