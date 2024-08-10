// "use client";
// import React, { useState } from "react";

// const TabView = () => {
//   const [activeTab, setActiveTab] = useState("summary");
//   const tabs = ["summary", "guide", "ask ai", "audio"];

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const renderContent = (tab) => {
//     switch (tab) {
//       case "summary":
//         return <div>tabview</div>;

//       case "guide":
//         return <div>tabview</div>;

//       case "ask ai":
//         return <div>tabview</div>;

//       case "audio":
//         return <div>tabview</div>;

//       //   <AudioTab />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="h-full">
//       <div className="flex-row my-3 mx-2  items-center justify-center shadow-sm">
//         {tabs.map((tab) => (
//           <div
//             key={tab}
//             className={`items-center p-4 hover:cursor-pointer`}
//             onClick={() => handleTabClick(tab)}
//           >
//             <p
//               className={`${
//                 activeTab === tab ? "text-orange-500" : "text-black-200"
//               }`}
//             >
//               {tab.toUpperCase()}
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className="p-4 h-full overflow-y-auto">
//         {renderContent(activeTab)}
//       </div>
//     </div>
//   );
// };

// function Signup() {
//   const [tabState, setTabState] = useState("verification");

//   return (
//     <div className="flex mx-10 my-10">
//       <div class="grid grid-flow-col gap-3 w-full border border-1 border-black rounded-3xl p-4">
//         <div class="col-span-1 p-4">
//           <TabView />
//         </div>
//         <div class="bg-red-100 col-span-11 rounded-3xl p-4">
//           <div>
//             <p className="text-4xl">Enter the OTP from your email.</p>
//             <button
//               className="bg-black rounded-full px-4 py-2 text-white"
//               onClick={() => setTabState("name")}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
