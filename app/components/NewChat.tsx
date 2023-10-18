import { AiOutlinePlus } from 'react-icons/ai'

const NewChat = () => {
    return (
        <div className='border border-gray-700 chatRow hover:bg-gray-700/70'>
            <AiOutlinePlus className="h-4 w-4" />
            <p>New Chat</p>
        </div>
    )
}

export default NewChat