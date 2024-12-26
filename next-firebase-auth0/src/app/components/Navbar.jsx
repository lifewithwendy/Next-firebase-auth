import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'


const Navbar = () => {
    const {user, googleSignIn, logOut} = UserAuth();
    const [loading , setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
            console.log('Signed in successfully');
        } catch (error) {
            console.error('Error signing in:', error);
        }
    }
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise(resolve => setTimeout(resolve, 50));
            setLoading(false);    
        };

        checkAuthentication();
    }, [user]);
    console.log(user);
  return (
    <div className="p-2 h-16 w-full border-b-2 flex items-center justify-between">
        <ul className='flex flex-row'>
            <li className='p-2 cursor-pointer'>
                <Link href="/">Home</Link>
            </li>
            <li className='p-2 cursor-pointer'>
                <Link href="/about">About</Link>
            </li>
            <li className='p-2 cursor-pointer'>
                <Link href="/profile">Profile</Link>
            </li>
        </ul>
        <ul className='flex'>
            {loading ? null :user ? (
                <li className='p-2 cursor-pointer hover:font-bold hover:text-blue-200 hover:scale-110 transition-all duration-300'>
                    {user.displayName}
                    <p className='text-xs text-gray-500'>{user.email}</p>
                </li>
            ) : (
                <li onClick={handleSignIn} className='p-2 cursor-pointer hover:font-bold'>
                    Register
                </li>
            )}
            <li onClick={user ? handleSignOut : handleSignIn} className='p-2 cursor-pointer hover:scale-110 transition-all duration-300 self-center'>
                {loading ? null : user ? 'Logout' : 'Login'}
            </li>
        </ul>
    </div>
  )
}

export default Navbar
