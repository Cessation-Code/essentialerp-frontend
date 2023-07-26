import React from "react";
import AuthenticatedLayout from "../../components/layouts/authenticated_layout/authenticated_layout";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCoins,
  faBook,
  faHandshake,
  faChartSimple,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import withAuth from "../../components/withAuth";

const ButtonLikeCard = ({
  colspan,
  title,
  icon,
  description,
  link,
  bgColour,
  width,
  height,
}) => {
  return (
    <div className={colspan}>
      <Link href={link}>
        <button
          className={`${bgColour} flex items-center rounded-lg px-4 py-6 h-40 w-${width} h-${height} space-x-5`}
        >
          {icon && (
            <div className="flex flex-col">
              <FontAwesomeIcon icon={icon} className="text-3xl" />
            </div>
          )}
          <div className="flex flex-col w-full text-start">
            <div className="font-semibold pb-1">{title}</div>
            <div className="text-xs">{description}</div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export function DashboardPage(props) {
  console.log(props.employee.employee);
  return (
    <div className="bg-white h-full">
      <Head>
        <title>Dashboard | ERP</title>
      </Head>
      <div className="grid grid-cols-3 mx-10 pt-10 gap-6">
        {/* HR Management Button */}
        <ButtonLikeCard
          colspan="col-span-1"
          icon={faUsers}
          width={"full"}
          description="Transform Your HR Operations with Effortless Efficiency: Experience the Power of Our Comprehensive HR Management Solution"
          link="dashboard/finance"
          title="Income"
          bgColour="bg-[#FACC89]"
          key="finance"
        />

        {/* Finance  Button */}
        <ButtonLikeCard
          colspan="col-span-1"
          width={"full"}
          icon={faCoins}
          description="Finance feature: An indispensable tool in our solution. Seamlessly track expenses, gain valuable insights, and maintain precise financial records to drive informed decision-making."
          link="dashboard/finances"
          title="FINANCE"
          bgColour="bg-[#E2E9FE]"
          key="finance"
        />

        {/* Inventory Button */}
        <ButtonLikeCard
          colspan="col-span-1"
          icon={faBook}
          description="Our Inventory feature: Effectively manage your inventory, streamline operations, and optimize stock levels to drive efficiency and maximize profitability."
          link="dashboard/inventory"
          title="INVENTORY"
          bgColour="bg-[#B1FF92]"
          width={"full"}
          key="inventory"
        />
      </div>

      {/* Second Row of buttons */}
      <div className="mx-10 pt-10 gap-6 ">
        <ButtonLikeCard
          colspan="col-span-3"
          title="TPIP"
          width={"full"}
          height={"[800px]"}
          icon={faHandshake}
          description="Third-Party Integrator platform: Unlock new opportunities as organizations effortlessly share and integrate their inventory data for enhanced business operations"
          link="dashboard/tpip"
          bgColour="bg-[#ECDEFF]"
        />
      </div>

      {/* Third Row of Buttons */}
      <div className="mx-10 pt-10 gap-6">
        <ButtonLikeCard
          colspan="col-span-3"
          title="TPIP"
          icon={faHandshake}
          width={"full"}
          description="Third-Party Integrator platform: Unlock new opportunities as organizations effortlessly share and integrate their inventory data for enhanced business operations"
          link="dashboard/tpip"
          bgColour="bg-[#ECDEFF]"
        />
      </div>
    </div>
  );
}

export default withAuth(DashboardPage);


