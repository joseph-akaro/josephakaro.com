import { redirect } from 'next/navigation'

import { LogoutButton } from '@/components/logout-button'
import { createClient } from '@/lib/supabase/server'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default async function Dashboard() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getClaims()
  if (error || !data?.claims) {
    redirect('/auth/login')
  }

  return (
    <div className="flex h-svh w-full items-center justify-center gap-2">
      <Card className='w-sm'>
        <CardHeader className='p-2'>
          <CardTitle>
            <h1>Welcome User</h1>
          </CardTitle>
        </CardHeader>
        <CardDescription className='p-2'>
          { data.claims.email }
        </CardDescription>
        <CardFooter>
          <LogoutButton/>
        </CardFooter>
      </Card>
    </div>
  )
}
