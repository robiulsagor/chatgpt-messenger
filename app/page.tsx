import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (

    <div className='flex items-center flex-col justify-between  h-screen text-white'>
      <Header />


      <div>
        {/* bottom part */}
        <h2>hello</h2>
      </div>
    </div>

  )
}
