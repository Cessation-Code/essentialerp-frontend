import React from 'react'
import Report from './report';
import Inventory from './inventory';
import { useState } from 'react';
import withAuth from '../../../components/withAuth';
import {getInventoryItems} from "./inventory"
import { useEffect } from 'react';

const index = () => {
  const [activeTab, setActiveTab] = useState("inventory");

  const [inventoryItems, setInventoryItems] = useState([]);

  // Fetch inventory items on page load
  useEffect(() => {
    const fetchInventoryItems = async () => {
      try {
        const items = await getInventoryItems();
        setInventoryItems(items);
      } catch (error) {
        // Handle error if needed
        console.log(error);
      }
    };
    fetchInventoryItems();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useState(() => {

    console.log(window.location.hash)
    if (window.location.hash === '#inventory') {
      setActiveTab("inventory");
        }else if (window.location.hash === '#report') {
      setActiveTab("report"); 
    }

  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold my-2">Inventory</h3>

        <div className="text-sm mb-2 breadcrumbs">
          <ul className="flex">
            {activeTab === "inventory" && (
              <>
                <li>Inventory</li>
                <li>Inventory</li>
              </>
            )}
            {activeTab === "report" && (
              <>
                <li>Inventory</li>
                <li>Report</li>
              </>
            )}
          </ul>
        </div>

        <div className="tabs tabs-boxed w-fit mb-2">
          <a
            className={`tab ${activeTab === "inventory" ? "tab-active" : ""}`}
            onClick={() => handleTabClick("inventory")}
          >
            Inventory
          </a>
          <a
            className={`tab ${activeTab === "report" ? "tab-active" : ""}`}
            onClick={() => handleTabClick("report")}
          >
            Report
          </a>
        </div>

        {activeTab === "inventory" && <Inventory />}
        {activeTab === "report" && <Report  inventoryItems={inventoryItems}/>}
      </div>


    </div>
  )
}

export default withAuth(index);
