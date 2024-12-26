'use client'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
// import Spinner from '../components/Spinner'
import dynamic from 'next/dynamic';


// Dynamically import the spinner component with SSR disabled
const Spinner = dynamic(() => 
  import('../components/Spinner'), { ssr: false }
);

const page = () => {
  const {user} = UserAuth();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const checkAuthentication = async () => {
        await new Promise(resolve => setTimeout(resolve, 50));
        setLoading(false);    
    };

    checkAuthentication();
}, [user]);

  return (
    <div className="p-4 flex h-[calc(100vh-4rem)] justify-center items-center">
      {loading ? (
        <div className="flex h-[calc(100vh-4rem)] justify-center items-center">
            <Spinner />
        </div>
          ) : user ? (
        <p>You are logged in as -  
          <span className='font-bold'>
            {user.displayName} 
          </span>
          - to this protected route </p>

      ) : (
        <p>You must be logged in to view this page - protected route</p>

      )}
    </div>
  )
}

export default page
