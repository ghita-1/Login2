import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import './App.css'

function App() {

  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-2xl shadow-lg flex overflow-hidden w-[900px] max-w-full">
            <div className="bg-gradient-to-br from-blue-900 to-blue-400 text-white p-10 w-1/2 flex flex-col justify-center items-center relative">
                <h1 className="text-4xl font-bold">WELCOME</h1>
                <p className="text-xl mt-2">YOUR HEADLINE NAME</p>
                <p className="mt-4 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-white opacity-10 rounded-full"></div>
                <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-white opacity-10 rounded-full"></div>
            </div>
            <div className="p-10 w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold">Sign in</h2>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className="mt-4 relative">
                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
                <input type="text" placeholder="User Name" className="w-full p-2 pl-10 border border-gray-300 rounded mt-1"/>
                </div>
                <div className="mt-4 relative">
                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
                <input type="password" placeholder="Password" className="w-full p-2 pl-10 border border-gray-300 rounded mt-1"/>
                    <span className="absolute right-3 top-3 text-blue-500 cursor-pointer">SHOW</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <label className="flex items-center text-gray-700">
                        <input type="checkbox" className="mr-2"/> Remember me
                    </label>
                    <a href="#" className="text-sm text-blue-500">Forgot Password?</a>
                </div>
                <button className="w-full bg-gradient-to-br from-blue-900 to-blue-400 text-white p-2 rounded mt-4">Sign in</button>
                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-2 text-gray-500">Or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <button className="w-full border border-blue-600 text-blue-600 p-2 rounded">Sign in with other</button>
                <p className="text-center text-sm text-gray-500 mt-4">Don't have an account? <a href="#" className="text-blue-500">Sign Up</a></p>
            </div>
        </div>
    </div>
);
}

export default App
