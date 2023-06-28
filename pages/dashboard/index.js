import React from "react";
import AuthenticatedLayout from "../../components/layouts/authenticated_layout/authenticated_layout";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'


// const Card = ({ title, children, width, height, gridColumn }) => {
//   return (
//     <div className={`card w-${width} h-${height} bg-secondary-focus shadow-xl`} style={{ gridColumn }}>
//       <div className="card-body">
//         <h2 className="card-title">{title}</h2>
//         {children}
//       </div>
//     </div>
//   );
// };

export function DashboardPage() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Dashboard | ERP</title>
      </Head>
      <AuthenticatedLayout>
        <div className="flex flex-row mx-32 pt-10 gap-20">
          {/* HR Management Card */}
          <div className="basis-1/3 flex flex-row bg-[#E2E9FE] rounded-lg px-4 py-6 h-40 space-x-5">
            <div className="flex flex-col justify-center">
              <FontAwesomeIcon icon={faUsers} className="text-3xl" />
            </div>
            <div className="flex flex-col w-full text-start">
              <div className="font-semibold pb-1">
                HR MANAGEMENT
              </div>
              <div className="text-sm">
                Transform Your HR Operations with Effortless Efficiency: Experience the Power of Our Comprehensive HR Management Solution
              </div>
            </div>
          </div>
          
          <div className="basis-1/3 bg-[#FACC89] rounded-lg px-4 py-7 h-40">

          </div>

          <div className="basis-1/3 bg-[#B1FF92] rounded-lg px-4 py-7 h-40">

          </div>
        </div>

      </AuthenticatedLayout>
    </div>
  );
}

export default DashboardPage;
