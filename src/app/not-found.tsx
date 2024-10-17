"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from ' /components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from ' /components/ui/card'
import { Compass } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timer)
          router.push('/')
        }
        return prevCount - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r ">
      <Card className="w-[350px] shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <Compass className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Oops! Page Not Found</CardTitle>
          <CardDescription className="text-center">
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm text-muted-foreground">
            You'll be redirected to the homepage in <span className="font-bold text-primary">{countdown}</span> seconds.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Go Home Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}