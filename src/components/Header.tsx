import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
    return (
        <header className="sticky top-0 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 z-50">
            <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-3 group"
                >
                    <div className="relative w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                        <div className="text-white font-bold">
                            <Image
                                src="/assets/icons/logo.svg"
                                alt="IndSTOCKS logo"
                                width={32}
                                height={32}
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                            IndSTOCKS
                        </span>
                        <span className="text-xs text-gray-400 -mt-1">Live Markets</span>
                    </div>
                </Link>

                <nav className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
                    <NavItems />
                </nav>

                <div className="flex items-center gap-4">
                    <UserDropdown />
                </div>
            </div>
        </header>
    )
}

export default Header;