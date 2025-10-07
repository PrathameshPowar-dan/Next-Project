import Header from "@/components/Header";
import ChartWidget from "@/components/ChartWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">IndSTOCKS</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real-time market data, advanced charts, and professional trading tools at your fingertips.
          </p>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          <ChartWidget
            title="Stock Heatmap"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
            className="custom-chart"
          />

          <ChartWidget
            title="Stock Heatmap"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js"
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
            className="custom-chart"
          />

          <ChartWidget
            title="Technical Analysis"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
            className="custom-chart"
          />
        </section>

      </main>
    </div>
  );
}