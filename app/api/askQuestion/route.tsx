import { adminDB } from "@/firebaseAdmin"
import query from "@/lib/queryGPT"
import admin from "firebase-admin"


export async function POST(req: Request) {
    const { prompt, chatId, model, session } = await req.json()

    if (!prompt) return new Response(JSON.stringify({ answer: "Please provide a prompt!" }))

    if (!chatId) return new Response(JSON.stringify({ answer: "Please provide a chat ID!" }))

    // ChatGPT
    const response = await query(prompt, chatId, model)

    const message: Message = {
        text: response || "MyGPT was unable to find an answer!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT",
            name: "ChatGPT",
            avatar: "https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png"
        }
    }

    await adminDB
        .collection("users")
        .doc(session?.user?.email)
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(message)

    return new Response(JSON.stringify({ answer: message.text }))
}
