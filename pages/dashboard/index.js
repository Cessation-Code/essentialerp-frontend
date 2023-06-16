import React from "react";
import { useRouter } from "next/router";
import AuthenticatedLayout from "../../components/layouts/authenticated_layout/authenticated_layout";
import Head from "next/head";

export function DashboardPage() {
  const router = useRouter();
  const { from, additionalData } = router.query;

  return (
    <div className="bg-gray-200">
      <Head>
        <title>Dashboard | ERP</title>
      </Head>
      <AuthenticatedLayout>
        <div className="flex-grow py-8 flex">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Card 1 */}
              <div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Card 1</h3>
                  <p>Card 1 content goes here...</p>
                </div>
              </div>

              {/* Card 2 */}
              <div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Card 2</h3>
                  <p>Card 2 content goes here...</p>
                </div>
              </div>

              {/* Card 3 */}
              <div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Card 3</h3>
                  <p>Card 3 content goes here...</p>
                </div>
              </div>

              {/* Card 4 */}
              <div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Card 4</h3>
                  <p>Card 4 content goes here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}

export default DashboardPage;



// import React from "react"
// import { useRouter } from 'next/router';
// import AuthenticatedLayout from "../../components/layouts/authenticated_layout/authenticated_layout";
// import Head from "next/head";
// import { useState, useEffect } from "react";
// import { Provider } from 'react-redux';
// import store from '../../store/store'; 


// import { useDispatch, useSelector } from 'react-redux';
// import { setData, setLoading, setError } from "../../store/reducers/data";

// import { dashboardAPI } from "../../utils/apiUtils";
// import { Budget } from "../../components/dashboard/budget";

// export  function DashboardPage() {
//   const router = useRouter();
//   const { from, additionalData } = router.query;


//   const [data1, setData1] = useState(null);
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.data);

//   useEffect(() => {
//     const token = sessionStorage.getItem("token");
//     async function fetchData() {
//       try {
//         const response = await dashboardAPI(token);
//         setData1(response.data);
//         dispatch(setData(response.data));
//       } catch (error) {
//         console.log(error);
//         dispatch(setError(error));
//       }
//     }
//     fetchData();
//   }, []);

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (error) {
//   //   return <div>Error: {error.message}</div>;
//   // }

//   return (
//   <div className="bg-gray-200">
//      <Head>
//         <title>Dashboard | ERP</title>
//       </Head>
//       <AuthenticatedLayout>

//       <div className="flex-grow  py-8 flex ">
//         <div className="container w-full">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ">
//             <div className="col-span-1 md:col-span-2 lg:col-span-4">
//               <div>
//               <Budget />
//               </div>

//               <div>
//               <Budget />
//               </div>

//             </div>
//             <div>
//               <Budget  />
//             </div>
//             <div>
//               <Budget data={data1?.expense} />
//             </div>
//             <div>
//               <Budget />
//             </div>
//             <div className="col-span-2 lg:col-span-4">
//               <Budget />
//             </div>
//             <div className="col-span-1 lg:col-span-1">
//               <Budget className="h-full" />
//             </div>
//             <div className="col-span-1 lg:col-span-1">
//               <Budget className="h-full" />
//             </div>
//             <div className="col-span-2 lg:col-span-3">
//               <Budget />
//             </div>
//           </div>
//         </div>
//       </div>
//       </AuthenticatedLayout>
//     </div>

//   );

// }

// export default function DashboardPageWrapper() {
//   return (
//     <Provider store={store}>
//       <DashboardPage />
//     </Provider>
//   );
// }

// // import Head from "next/head";
// // import { useState, useEffect } from "react";
// // import { Budget } from "../components/dashboard/budget";
// // import { ExpenseList } from "../components/dashboard/expense-list";
// // import { StocksList } from "../components/dashboard/stocks-list";
// // import { Sales } from "../components/dashboard/sales";
// // import { MostSold } from "../components/dashboard/most-sold";
// // import { Expenses } from "../components/dashboard/expenses";
// // import { TotalProfit } from "../components/dashboard/total-profit";
// // import { PieChartSells } from "../components/dashboard/pie-chart-sells";
// // import { DashboardLayout } from "../components/dashboard-layout";

// // import { useDispatch, useSelector } from 'react-redux';
// // import { setData, setLoading, setError } from "../store/reducers/data";

// // import { dashboardAPI } from "../utils/apiUtils";

// // const Page = () => {
// //   const [data1, setData1] = useState(null);
// //   const dispatch = useDispatch();
// //   const { data, loading, error } = useSelector((state) => state.data);

// //   useEffect(() => {
// //     const token = sessionStorage.getItem("token");
// //     async function fetchData() {
// //       try {
// //         const response = await dashboardAPI(token);
// //         setData1(response.data);
// //         dispatch(setData(response.data));
// //       } catch (error) {
// //         console.log(error);
// //         dispatch(setError(error));
// //       }
// //     }
// //     fetchData();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }

// //   return (
// //     <>
// //       <Head>
// //         <title>Dashboard | ERP</title>
// //       </Head>
// //       <div className="flex-grow py-8">
// //         <div className="container mx-auto">
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
// //             <div>
// //               <Budget />
// //             </div>
// //             <div>
// //               <TotalProfit className="h-full" />
// //             </div>
// //             <div>
// //               <Expenses data={data1?.expense} />
// //             </div>
// //             <div>
// //               <MostSold />
// //             </div>
// //             <div className="col-span-2 lg:col-span-3">
// //               <Sales />
// //             </div>
// //             <div className="col-span-1 lg:col-span-1">
// //               <PieChartSells className="h-full" />
// //             </div>
// //             <div className="col-span-1 lg:col-span-1">
// //               <StocksList className="h-full" />
// //             </div>
// //             <div className="col-span-2 lg:col-span-3">
// //               <ExpenseList />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// // export default Page;
