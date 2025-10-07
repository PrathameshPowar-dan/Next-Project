'use client'

import { useState, useRef, useEffect } from 'react'

const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-1 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-600 transition-colors"
            >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">U</span>
                </div>
                <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 py-2 bg-gray-800 border border-gray-600 rounded-xl shadow-xl backdrop-blur-md">
                    <div className="px-4 py-2 border-b border-gray-700">
                        <p className="text-sm font-medium text-white">user@example.com</p>
                        <p className="text-xs text-gray-400">Premium Member</p>
                    </div>

                    <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 transition-colors">
                        Profile Settings
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 transition-colors">
                        Portfolio
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 transition-colors">
                        Watchlist
                    </button>

                    <div className="border-t border-gray-700 mt-2 pt-2">
                        <button className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-gray-700 transition-colors">
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserDropdown