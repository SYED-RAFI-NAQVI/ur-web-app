import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfoilios = () => {
  const info = {
    Growth: [
      {
        title: "Go Quality",
        subline: "Invests in high-quality assets",
        tag: "Growth",
      },
      {
        title: "Global Tactical Asset Allocation",
        subline: "Consistent long-term returns, protected capital.",
        tag: "Growth",
      },
      {
        title: "401K Aggressive Managed Portfolio",
        subline: "Tailored for long 401K timeframes.",
        tag: "Growth",
      },
    ],
    Income: [
      {
        title: "GO Dividends",
        subline: "Extract yield, go anywhere.",
        tag: "Income",
      },
      {
        title: "Harvest Options",
        subline: "Income and downside protection.",
        tag: "Income",
      },
      {
        title: "Harvest Enhanced Treasuries",
        subline: "Get more out of your bond exposure.",
        tag: "Income",
      },
    ],
    Balanced: [
      {
        title: "Trading From the Past",
        subline: "Predictable short-term market behaviors.",
        tag: "Balanced",
      },
      {
        title: "NASDAQ Long-Short Fund",
        subline: "Market-neutral equity strategy.",
        tag: "Balanced",
      },
      {
        title: "Go Conservative",
        subline: "Lower risk, balanced portfolio",
        tag: "Balanced",
      },
    ],
  };

  const getBackgroundColor = (tag) => {
    if (tag === "Income") {
      return "bg-[#023e7d]";
    } else if (tag === "Balanced") {
      return "bg-[#b5179e]";
    } else {
      return "bg-gradient";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {Object.keys(info).map((category) => (
        <div key={category} className="col-span-1 md:col-span-1">
          <div className="grid grid-cols-2 gap-4">
            {info[category].map((item, index) => (
              <Link
                href={`/public-markets/${item.title.replace(/ /g, "-")}`}
                key={index}
                className={`flex flex-col justify-between p-4 rounded-2xl ${getBackgroundColor(
                  item.tag
                )} h-48`}
              >
                <div>
                  <p className="text-lg">{item.title}</p>
                  <p className="text-gray-200 text-sm mt-2">{item.subline}</p>
                </div>
                <div className="mt-4 text-gray-200 text-sm text-right">
                  {item.tag}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

function PublicMarkets() {
  return (
    <div className="px-16 py-32">
      <div className="flex gap-4 items-center">
        <Image
          src={"/icons/trust.png"}
          alt={"public market"}
          width={28}
          height={18}
        />
        <div>
          <h1 className="text-3xl font-bold">Public Markets</h1>
          <p className="text-gray">
            Hyper-custom alpha-generating investment strategies tailored to
            their goals, risk criteria, and values.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h4 className="text-lg font-semibold">AI Managed Portfoilios</h4>
        <Portfoilios />
      </div>
    </div>
  );
}

export default PublicMarkets;
