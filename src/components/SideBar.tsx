'use client'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import {Search} from 'lucide-react'
import { Button } from './ui/button'
import { createUser } from ' /actions/userAction'

export default function SideBar() {
    const {user} = useUser()
    const userEmail = user?.emailAddresses?.[0]?.emailAddress;
const userName = user?.firstName || "User name";
    createUser(userEmail || '', userName)

  return (
    <div className=' bg-white lg:w-[90%] w-full h-[120px] lg:h-[80px] rounded-br-2xl rounded-bl-2xl shadow-md fixed z-999'>
{/* لابتوب */}
      <div className='hidden lg:block'>
      <div className='flex justify-around flex-col p-2 mx-5 mt-5'>
        <div className='flex justify-between items-center w-full'>
        <div>
           <SignedOut>
              <SignInButton>
                <Button className='bg-orange-600'>تسجيل</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
                <div className='border border-dashed border-orange-600 w-12 flex justify-center items-center p-0.5 rounded-3xl'>
              <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                },
              }}
              />
                </div>
            </SignedIn>
                </div>
        <div className='flex justify-between items-center border border-orange-500 mx-auto p-2 -mt-2 rounded-2xl w-[320px]'>
        <Search className='cursor-pointer' />        
        <input type='search' className='bg-white placeholder:text-black outline-none text-end' placeholder='...ابحث عن شي ما' />
        </div>
          <h1 className='font-bold text-orange-600 text-2xl'>TASTIFY</h1>
        </div>
      </div>
      </div>
{/* جوال */}
    <div className='block lg:hidden'>
      <div className='flex justify-center flex-col p-2 mt-2'>
        <div className='flex justify-between w-full'>
          <div>
          <SignedOut>
              <SignInButton>
                <Button className='bg-orange-600'>تسجيل</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
                <div className='border border-dashed border-orange-600 w-10 flex justify-center p-0.5 rounded-3xl'>
              <UserButton appearance={{
                elements: {
                  avatarBox: 'w-8 h-8',
                },
              }} />
                </div>
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
