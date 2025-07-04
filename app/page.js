'use client'

import React, { useState } from 'react'
import { Meteors } from '@/components/ui/meteors';

const Home = () => {
  const [ dev, setDev] = useState(false);
  
  const Development = () => {
      setDev(true)
  }

  return (
    <div>
      {Development ? (<Metero/>) : (<homePage/>)}
    </div>
  )
}

export default Home


// This Loads Home Page component
const homePage = () => {
  return(
    <div>
      <h1>Welcome to Home!</h1>
    </div>
  )
}

// This Loads Coming-Soon Page Component
const Metero = () => {
  return(
    <Metero/>
  )
}