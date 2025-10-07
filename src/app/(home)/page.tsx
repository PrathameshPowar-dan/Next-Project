import Header from "@/components/Header";
import ChartWidget from "@/components/ChartWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex justify-center items-center h-screen">
        <ChartWidget
        title="Market Overview"
        scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
        config={MARKET_OVERVIEW_WIDGET_CONFIG}
        className="custom-chart"
        />
      </section>
    </>
  );
}
