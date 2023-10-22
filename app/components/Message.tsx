import { DocumentData } from "firebase-admin/firestore"

type Props = {
    message: DocumentData
}
const Message = ({ message }: Props) => {
    const msg = message.data()
    const isGPT = msg.user.name === "ChatGPT"


    return (
        <div className={`py-5 ${isGPT && "bg-[#434654]"}`}>
            <div className="flex text-white space-x-5 px-10 max-w-2xl mx-auto">
                <img src={msg?.user?.avatar} alt="user" className="h-8 w-8 rounded-lg" />
                <p className="pt-1 text-sm">
                    {msg.text}
                </p>
            </div>
        </div>
    )
}

export default Message