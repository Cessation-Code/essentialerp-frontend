import React from "react";
import AuthenticatedLayout from "../../components/layouts/authenticated_layout/authenticated_layout";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faCoins, faBook, faHandshake, faChartSimple, faChartPie } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useRouter } from "next/router";


const ButtonLikeCard = ({ basis, title, icon, description, link, bgColour }) => {
  return (
    <div className={basis}>
      <Link href={link}>
        <button className={`${bgColour} flex items-center rounded-lg px-4 py-6 h-40 w-full space-x-5`}>
          <div className="flex flex-col">
            <FontAwesomeIcon icon={icon} className="text-3xl" />
          </div>
          <div className="flex flex-col w-full text-start">
            <div className="font-semibold pb-1">
              {title}
            </div>
            <div className="text-xs">
              {description}
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export function DashboardPage() {

  const router = useRouter();
  const {prop1, prop2, prop3} = router.query;

  return (
    <div className="bg-gray-200">
      <Head>
        <title>Dashboard | ERP</title>
      </Head>
      <AuthenticatedLayout username={prop1 + ' ' + prop2} organisation={prop3}>
        <div className="flex flex-row mx-32 pt-10 gap-20">
          {/* HR Management Button */}
          <ButtonLikeCard
            basis='basis-1/3'
            icon={faUsers}
            description="Transform Your HR Operations with Effortless Efficiency: Experience the Power of Our Comprehensive HR Management Solution"
            link="dashboard/manage_hr"
            title="HR MANAGEMENT"
            bgColour="bg-[#FACC89]"
            key="hr_management"
          />

          {/* Finance  Button */}
          <ButtonLikeCard
            basis='basis-1/3'
            icon={faCoins}
            description="Finance feature: An indispensable tool in our solution. Seamlessly track expenses, gain valuable insights, and maintain precise financial records to drive informed decision-making."
            link="dashboard/finances"
            title="FINANCE"
            bgColour="bg-[#E2E9FE]"
            key="finance"
          />

          {/* Inventory Button */}
          <ButtonLikeCard
            basis='basis-1/3'
            icon={faBook}
            description="Our Inventory feature: Effectively manage your inventory, streamline operations, and optimize stock levels to drive efficiency and maximize profitability."
            link="dashboard/inventory"
            title="INVENTORY"
            bgColour="bg-[#B1FF92]"
            key="inventory"
          />
        </div>

        {/* Second Row of buttons */}
        <div className="flex flex-row mx-32 pt-10 gap-20">
          <ButtonLikeCard
            basis='basis-1/3'
            title='TPIP'
            icon={faHandshake}
            description='Third-Party Integrator platform: Unlock new opportunities as organizations effortlessly share and integrate their inventory data for enhanced business operations'
            link='dashboard/tpip'
            bgColour='bg-[#ECDEFF]'
          />

          <ButtonLikeCard
            basis='basis-1/3'
            title='TOTAL INCOME'
            icon={faChartSimple}
            description={
              <div>

              </div>
            }
            link='dashboard/tpip'
            bgColour='bg-[#F2F5FE]'
          />

          <ButtonLikeCard
            basis='basis-1/3'
            title='TOTAL EXPENSE'
            icon={faChartPie}
            description={
              <div>

              </div>
            }
            link='dashboard/tpip'
            bgColour='bg-[#F2F5FE]'
          />
        </div>

        {/* Third Row of Buttons */}
        <div className="flex flex-row mx-32 pt-10 gap-20">
          <ButtonLikeCard
            basis='basis-1/2'
            title='SOME DATA'
            // icon=''
            description={prop1 + ' ' + prop2}
            link=''
            bgColour='bg-[#F2F5FE]'
          />

          <ButtonLikeCard
            basis='basis-1/2'
            title='SOME DATA'
            // icon=''
            description={prop3}
            link=''
            bgColour='bg-[#F2F5FE]'
          />

        </div>



      </AuthenticatedLayout>
    </div>
  );
}

export default DashboardPage;