
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'
import {Search} from 'lucide-react'
import { Button } from './ui/button'

export default function SideBar() {

  return (
    <div className=' bg-white lg:w-[90%] w-full h-[120px] lg:h-[80px] rounded-br-2xl rounded-bl-2xl shadow-md fixed'>
{/* لابتوب */}
      <div className='hidden lg:block'>
      <div className='flex justify-around flex-col p-2 mx-5 mt-5'>
        <div className='flex justify-between w-full'>
        <div>
          <SignedOut>
            <SignedIn>
              <Button className='bg-red-500'>تسجيل</Button>
            </SignedIn>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        <div className='flex justify-between items-center border border-orange-500 mx-auto p-2 -mt-2 rounded-2xl w-[320px]'>
        <Search className='cursor-pointer' />        
        <input type='search' className='bg-white placeholder:text-black outline-none text-end' placeholder='...ابحث عن شي ما' />
        </div>
          <h1 className='font-bold text-orange-600 text-xl'>TASTIFY</h1>
        </div>
      </div>
      </div>
{/* جوال */}
    <div className='block lg:hidden'>
      <div className='flex justify-center flex-col p-2 mt-2'>
        <div className='flex justify-between w-full'>
          <div>
          <SignedOut>
            <SignedIn>
              <Button className='bg-red-500'>تسجيل</Button>
            </SignedIn>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
          <h1 className='font-bold text-orange-600 text-xl'>TASTIFY</h1>
        </div>

        <div className='flex justify-between items-center border border-orange-500 mx-auto p-2 mt-4 rounded-2xl w-[320px]'>
        <Search className='cursor-pointer' />        
        <input type='search' className='bg-white placeholder:text-black outline-none text-end' placeholder='...ابحث عن شي ما' />
        </div>
      </div>
    </div>
    </div>
  )
}
