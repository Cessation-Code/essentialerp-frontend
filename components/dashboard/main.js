import React from "react";
import Chart from "./chart";

const CardData = [
  {
    percent: "50%",
    extra: "Today",
    main: true,
    title: "Total Income ",
    value: "GHC 5000",
    size: {
      width: 400,
      height: 145,
    },
  },
  {
    percent: "Percent 2",
    extra: "Extra 2",
    main: false,
    title: "Card 2",
    value: "This is the content of card 2.",
    size: {
      width: 400,
      height: 145,
    },
  },
  {
    percent: "Percent 3",
    extra: "Extra 3",
    main: false,
    title: "Card 3",
    value: "This is the content of card 3.",
    size: {
      width: 1000,
      height: 300,
    },
  },
  {
    percent: "Percent 4",
    extra: "Extra 4",
    main: false,
    title: "Card 4",
    value: "This is the content of card 4.",
    size: {
      width: 1100,
      height: 500,
    },
  },
  {
    percent: "Percent 5",
    extra: "Extra 5",
    main: false,
    title: "Card 5",
    value: "This is the content of card 5.",
    size: {
      width: 450,
      height: 250,
    },
  },
  {
    percent: "Percent 5",
    extra: "Extra 5",
    main: false,
    title: "Card 6",
    content: "This is the content of card 6.",
    size: {
      width: 450,
      height: 250,
    },
  },
];

export const Chartdata = [
  {
    label: "Cars",
    color: "#57CC78",
  },
  {
    label: "Engines",
    color: "#55DBDB",
  },
  {
    label: "Spray Machine",
    color: "#E2FF32",
  },
  {
    label: "Batteries",
    color: "#FEC102",
  },
];


const Card = ({ percent, extra, main, title, value, content, size }) => {
  return (
    <div
      className={`card ${main ? "main-card" : ""}`}
      style={{ width: size.width, height: size.height }}
    >
      <p className="card-title">{title}</p>
      <p className="card-value">{value}</p>
      <p className="card-percent">{percent}</p>
      <p className="card-extra">{extra}</p>
      {content && <p className="card-content">{content}</p>}
    </div>
  );
};

  
const Main = () => {
    return (
      <div className="all-cards-container flex flex-col gap-3 overflow-y-auto">
        <div className="card-123-container flex flex-row gap-3 mb-4">
        <div
          className="card-1-2-container gap-3"
          style={{
            height: `${CardData[2].size.height / 2}px`,
            width: CardData[1].size.width,
          }}
        >
          {CardData.slice(0, 2).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div
          className="card-3-container flex-grow flex"
          style={{
            width: CardData[2].size.width,
            height: CardData[2].size.height,
            display: "grid",
            gap: "1rem",
          }}
        >
          <Card {...CardData[2]} />
        </div>
        </div>

        
        <div className="card-456-container flex flex-row gap-3">
        <div
          className="card-4-container bg-gray-200 px-4 py-2 font-bold rounded shadow"
          style={{
            width: CardData[3].size.width,
            height: CardData[3].size.height,
          }}
        >
          <div className="flex flex-row justify-between pb-3">
            <p className="text-xl text-left font-bold px-1 py-1">
              Sales Trend
            </p>
            <div className="flex flex-row gap-3 justify-center items-center">
              {Chartdata.map((item, index) => (
                <div key={index} className="flex flex-row gap-1 items-center">
                  <div
                    className="rounded-full"
                    style={{
                      backgroundColor: item.color,
                      width: "9px",
                      height: "9px",
                    }}
                  ></div>
                  <p className="text-xs font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full pb-12">
            <Chart />
          </div>
        </div>
        <div
          className="card-5-6-container flex flex-col gap-3"
          style={{
            width: CardData[4].size.width,
            height: CardData[4].size.height,
            display: "grid",
            gap: "1rem",
          }}
        >
          {CardData.slice(4, 6).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        </div>
      </div>
 
    );
  };

  export default Main;




 
// const Main = () => {
//   return (
//     <div className="all-cards-container flex flex-col gap-3 overflow-y-auto">
//       <div className="card-123-container flex flex-row gap-3 mb-4">
//         <div
//           className="card-1-2-container gap-3"
//           style={{
//             height: `${CardData[2].size.height / 2}px`,
//             width: CardData[1].size.width,
//           }}
//         >
//           {CardData.slice(0, 2).map((card, index) => (
//             <Card key={index} {...card} />
//           ))}
//         </div>
//         <div
//           className="card-3-container flex-grow flex"
//           style={{
//             width: CardData[2].size.width,
//             height: CardData[2].size.height,
//             display: "grid",
//             gap: "1rem",
//           }}
//         >
//           <Card {...CardData[2]} />
//         </div>
//       </div>

//       <div className="card-456-container flex flex-row gap-3">
//         <div
//           className="card-4-container bg-gray-200 px-4 py-2 font-bold rounded shadow"
//           style={{
//             width: CardData[3].size.width,
//             height: CardData[3].size.height,
//           }}
//         >
//           <div className="flex flex-row justify-between pb-3">
//             <p className="text-xl text-left font-bold px-1 py-1">
//               Sales Trend
//             </p>
//             <div className="flex flex-row gap-3 justify-center items-center">
//               {Chartdata.map((item, index) => (
//                 <div key={index} className="flex flex-row gap-1 items-center">
//                   <div
//                     className="rounded-full"
//                     style={{
//                       backgroundColor: item.color,
//                       width: "9px",
//                       height: "9px",
//                     }}
//                   ></div>
//                   <p className="text-xs font-semibold">{item.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-full h-full pb-12">
//             <Chart />
//           </div>
//         </div>
//         <div
//           className="card-5-6-container flex flex-col gap-3"
//           style={{
//             width: CardData[4].size.width,
//             height: CardData[4].size.height,
//             display: "grid",
//             gap: "1rem",
//           }}
//         >
//           {CardData.slice(4, 6).map((card, index) => (
//             <Card key={index} {...card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
