import React, { useEffect } from 'react'
import Report from './report';
import Inventory from './inventory';
import { useState } from 'react';
import withAuth from '../../../components/withAuth';

const index = () => {
  const [activeTab, setActiveTab] = useState("inventory");
  const [inventoryItems, setInventoryItems] = useState([]);
  
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {

    console.log(window.location.hash)
    if (window.location.hash === '#inventory') {
      setActiveTab("inventory");
        }else if (window.location.hash === '#report') {
      setActiveTab("report"); 
    }

    getInventoryItems();
  }, []);


  async function getInventoryItems() {
    try {
      // get expense items
      await fetch("https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/product/", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      }
      ).then(response => response.json()).then(data => {
        // save it to state
        setInventoryItems(data.products)
        console.log(data)
      });
    } catch (error) {
      console.log(error);
    }
  }

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

        {activeTab === "inventory" && <Inventory inventoryItems={inventoryItems} />}
        {activeTab === "report" && <Report inventoryItems={inventoryItems} />}
      </div>


    </div>
  )
}

export default withAuth(index);
