'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    { href: '/', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
];

const NavItems = () => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    }

    return (
        <div className="flex items-center gap-1 p-1 bg-gray-800 rounded-xl border border-gray-700">
            {NAV_ITEMS.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className={`
                        relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                        ${isActive(href)
                            ? 'text-white bg-orange-500 shadow-lg shadow-orange-500/25'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                        }
                    `}
                >
                    {label}
                </Link>
            ))}
        </div>
    )
}
export default NavItems