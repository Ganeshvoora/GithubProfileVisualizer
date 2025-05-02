import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const handleRepoClick = (username) => {
        if (username) {
            navigate(`/Repositories/${username}`)
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-[#0f172a] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[10vh]">
                    {/* Logo/Title */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl font-bold">
                            Github Profile Visualizer
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link to="/" 
                                className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Home
                            </Link>
                            <Link to="/Repositories" 
                                className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Repositories
                            </Link>
                            <Link to="/Analysis" 
                                className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Analysis
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" 
                        className="hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link to="/Repositories" 
                        className="hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        onClick={toggleMenu}>
                        Repositories
                    </Link>
                    <Link to="/Analysis" 
                        className="hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        onClick={toggleMenu}
                        >
                        Analysis
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar