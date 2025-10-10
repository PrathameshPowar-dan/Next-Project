'use client';

import React, { memo, useEffect, useState } from 'react';
import useTradingViewWidget from "@/hooks/TradingViewWidgets"
import { cn } from "@/lib/utils";

interface TradingViewWidgetProps {
    title?: string;
    scriptUrl: string;
    config: Record<string, unknown>;
    height?: number;
    className?: string;
    showHeader?: boolean;
}

const TradingViewWidget = ({ title, scriptUrl, config, height = 500, className, showHeader = true }: TradingViewWidgetProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useTradingViewWidget(scriptUrl, config, height);

    useEffect(() => {
        if (containerRef) {
            setIsLoading(false)
        }
    }, [containerRef])


    return (
        <div className={cn("w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-gray-600 transition-all duration-300", className)}>
            {showHeader && title && (
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-xl text-white flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        {title}
                    </h3>
                    {isLoading && (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-orange-500"></div>
                            Loading...
                        </div>
                    )}
                </div>
            )}

            <div className={cn(
                'tradingview-widget-container rounded-xl overflow-hidden bg-gray-900/50',
                isLoading && 'opacity-70'
            )}
                ref={containerRef}
                style={{ height }}
            />
        </div>
    );
}

export default memo(TradingViewWidget);