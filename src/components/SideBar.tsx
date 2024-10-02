import {Search} from 'lucide-react'

export default function SideBar() {
  return (
    <div className=' bg-white lg:w-[90%] w-full h-[120px] lg:h-[80px] rounded-br-2xl rounded-bl-2xl shadow-md fixed'>

      <div className='hidden lg:block'>
      <div className='flex justify-around flex-col p-2 mx-5 mt-5'>
        <div className='flex justify-between w-full'>
        <p>image</p>
        <div className='flex justify-center items-center bg-gray-300 mx-auto p-2 -mt-2'>
        <input type='search' className='bg-red-50 outline-none' />
        <Search />        
        </div>
        <h1>logo</h1>
        </div>
      </div>
      </div>

    <div className='block lg:hidden'>
      <div className='flex justify-center flex-col p-2 mt-5'>
        <div className='flex justify-between w-full'>
        <p>image</p>
        <h1>logo</h1>
        </div>
        <div className='flex justify-center items-center mt-3 bg-red-300 mx-auto p-2'>
        <input type='search' className='bg-red-50 outline-none' />
        <Search />        
        </div>
      </div>
    </div>
    </div>
  )
}
