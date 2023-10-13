import { IoFlash } from "react-icons/io5"
import { BsStars } from "react-icons/bs"
import { BiSolidLockAlt } from "react-icons/bi"


const Header = () => {
    return (
        <div className='flex items-center flex-col gap-8  pt-6'>
            {/* top part */}
            <div className='w-[300px]  flex justify-between p-1 rounded-lg bg-[#202123] font-bold ' style={{ fontSize: '14px' }}>

                <div className='py-[10px] flex-1 text-center bg-[#40414f] rounded-lg flex items-center justify-center gap-2 '>
                    <IoFlash style={{ color: "#19c37d" }} /> GPT-3.5
                </div>
                <div className='py-[10px] flex-1 text-center flex items-center justify-center gap-2 text-slate-400'>
                    <BsStars /> GPT-4 <BiSolidLockAlt />
                </div>
            </div>

            <h1 className='text-4xl font-extrabold mb-20 text-slate-600'>MyGPT</h1>
        </div>
    )
}

export default Header