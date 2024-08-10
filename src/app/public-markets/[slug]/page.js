"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import InteractiveLineChart from "./Chart";

const PortfolioDetail = () => {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  const fundInfo = {
    title: "Harvest Options",
    subTitle: `The Harvest Income Strategy capitalizes on the nuances of options to potentially offer consistent returns, even in challenging market conditions.`,
    subPoints: [
      "Designed for risk-adjusted return",
      "Growth potential focused on 3+ year timeline",
      "Powered by AI, monitored by humans",
      "$25K minimum investment",
    ],
    works:
      "Navigating from the expansive universe of S&P500 stocks to a meticulously curated investment portfolio requires a structured and systematic approach, a journey that ETS has mastered.",
    keytakeAways: [
      {
        title: "Consistent Income Streams",
        body: "Through the tactical sale of put options, premiums are secured that, under favorable conditions, crystallize as profits.",
      },
      {
        title: "Tactical Downside Protection",
        body: "The strategy affords the opportunity to acquire stocks at predetermined price points, optimizing entry costs.",
      },
      {
        title: "Time Decay Advantage & Strategic Flexibility",
        body: "The inherent time decay of options is strategically leveraged for potential profitability. The adaptability of the strategy allows for alignment with individual investor outlooks.",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center min-h-screen overflow-y-auto">
      <div className="relative w-full h-64 md:h-96">
        <button
          className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-2xl bg-primary px-4 py-2 rounded-full hover:text-black hover:bg-white z-50"
          onClick={() => router.back()}
        >
          &times;
        </button>
        <Image
          src="/images/fund_image.jpg"
          alt="fund image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      <div className="mt-8 px-8 max-w-2xl">
        <h2 className="text-2xl font-bold">{fundInfo.title}</h2>
        <p className="text-gray">{fundInfo.subTitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left mt-4">
          {fundInfo.subPoints.map((point, index) => (
            <div key={index} className="text-gray-700">
              <p className="mt-2 text-xs">{point}</p>
            </div>
          ))}
        </div>
        <button className="px-8 py-3 bg-secondary rounded-full mt-4">
          Invest
        </button>

        <p className="text-xl font-regular mt-8">Methodology</p>
        <p className="mt-2">{fundInfo.works}</p>

        <div className="mt-8">
          <h3 className="text-xl font-regular">Key Takeaways</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fundInfo.keytakeAways.map((takeaway, index) => (
              <div
                key={index}
                className="mt-4 col-span-1 md:col-span-2 bg-secondary p-4 rounded-2xl"
              >
                <h4 className="text-lg font-semibold">{takeaway.title}</h4>
                <p className="text-gray">{takeaway.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-5xl mt-8">
          <InteractiveLineChart />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
