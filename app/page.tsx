"use client"

import { BiSun } from "react-icons/bi"
import { HiOutlineBolt } from "react-icons/hi2"
import { IoWarningOutline } from "react-icons/io5"
import { signIn } from "next-auth/react"


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl max-md:text-4xl  font-bold mb-20 max-sm:mb-10 max-md:mb-12">MyGPT</h1>

      <div className="flex space-x-3 text-center max-sm:text-[14px]">

        <div>
          <div className="flex flex-col items-center justify-center mb-5 gap-1">
            <BiSun className="h-8 w-8 max-sm:h-4 max-sm:w-4" />
            <h2>Examples</h2>
            <button onClick={() => signIn()}>Login</button>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"What is the difference between a dog and a cat?"</p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5 gap-1">
            <HiOutlineBolt className="h-8 w-8 max-sm:h-4 max-sm:w-4" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the MyGPT model to use</p>
            <p className="infoText">Messages are stored in Firebase's Firestore</p>
            <p className="infoText">How toast notifications when MyGPT is thinking</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5 gap-1">
            <IoWarningOutline className="h-8 w-8 max-sm:h-4 max-sm:w-4" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce harmful instructions or biased content</p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}
