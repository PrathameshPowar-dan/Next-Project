import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({children}:{children: React.ReactNode}) => {


    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default flex items-center p-3">
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
                <div>{children}</div>
            </section>

            <section className="auth-right-section">
                <div className="z-10 relative lg:mt-1 lg:mb-1">
                    <blockquote className="auth-blockquote">
                        Real-time market data, advanced charts, and professional trading tools at your fingertips.
                    </blockquote>
                </div>

                <div className="flex-1 relative">
                    <Image src="/assets/images/dashboard.png" alt="Dashboard Preview" width={1440} height={1150} className="auth-dashboard-preview absolute top-0" />
                </div>
            </section>
        </main>
    )
}
export default Layout