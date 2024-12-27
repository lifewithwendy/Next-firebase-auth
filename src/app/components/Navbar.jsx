import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { FaGithub, FaGoogle, FaSignOutAlt } from 'react-icons/fa'

const Navbar = () => {
    const {user, googleSignIn, githubSignIn, logOut} = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            console.log('Signed in successfully with Google');
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    }

    const handleGithubSignIn = async () => {
        try {
            await githubSignIn();
            console.log('Signed in successfully with GitHub');
        } catch (error) {
            console.error('Error signing in with GitHub:', error);
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
            await new Promise(resolve => setTimeout(resolve, 100));
            setLoading(false);    
        };
        checkAuthentication();
    }, [user]);

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
            <ul className='flex items-center gap-2'>
                {loading ? null : !user ? (
                    <div className="flex gap-2">
                        <button 
                            onClick={handleGoogleSignIn}
                            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg border hover:bg-gray-50 transition-all duration-300"
                        >
                            <FaGoogle className="text-xl" />
                            <span className="hidden sm:inline">Google</span>
                        </button>
                        <button 
                            onClick={handleGithubSignIn}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg border hover:bg-gray-700 transition-all duration-300"
                        >
                            <FaGithub className="text-xl" />
                            <span className="hidden sm:inline">GitHub</span>
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <div className='px-4 py-2 rounded-lg'>
                            <span className="font-medium">{user.displayName}</span>
                            <p className='text-xs text-gray-500'>{user.email}</p>
                        </div>
                        <button 
                            onClick={handleSignOut}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                        >
                            <FaSignOutAlt className="text-xl" />
                            <span className="hidden sm:inline">Sign Out</span>
                        </button>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Navbar
