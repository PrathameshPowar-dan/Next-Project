import ChartWidget from "@/components/ChartWidget";
import Header from "@/components/Header";
import { auth } from "@/lib/better-auth/auth";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG
} from "@/lib/constants";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect('/sign-IN')
  }

  const user = {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header user={user} />

      <main className="container mx-auto px-4 sm:px-6 py-6">
        <section className="h-[35vh] flex flex-col justify-center items-center mb-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">IndSTOCKS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Real-time market data, advanced charts, and professional trading tools at your fingertips.
            </p>

          </div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2">
            <ChartWidget
              title="Market Overview"
              scriptUrl={`${scriptUrl}market-overview.js`}
              config={MARKET_OVERVIEW_WIDGET_CONFIG}
              className="custom-chart"
              height={500}
            />
          </div>
          <div className="xl:col-span-1">
            <ChartWidget
              title="Stock Heatmap"
              scriptUrl={`${scriptUrl}stock-heatmap.js`}
              config={HEATMAP_WIDGET_CONFIG}
              height={500}
            />
          </div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1">
            <ChartWidget
              title="Market News"
              scriptUrl={`${scriptUrl}timeline.js`}
              config={TOP_STORIES_WIDGET_CONFIG}
              height={500}
            />
          </div>
          <div className="xl:col-span-2">
            <ChartWidget
              title="Live Quotes"
              scriptUrl={`${scriptUrl}market-quotes.js`}
              config={MARKET_DATA_WIDGET_CONFIG}
              height={500}
            />
          </div>
        </section>

      </main>
    </div>
  )
}

export default Home;