import React from 'react'
import withAuth from '../../../components/withAuth'
import TPIP from './tpip';
import Report from './report';
import { useState } from 'react';
import { useEffect } from 'react';

const index = () => {
  const [activeTab, setActiveTab] = useState("tpip");
  const [tpipData, setTpipData] = useState([]);

  useEffect(() => {
    getTpips();
  }, []);

  async function getTpips() {
    try {
      const response = await fetch("https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/auth_tpip/getTPIP", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setTpipData(data.tpip);
    } catch (error) {
      console.log(error);
    }
  }


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useState(() => {

    console.log(window.location.hash)
    if (window.location.hash === '#tpip') {
      setActiveTab("tpip");
    }else if (window.location.hash === '#report') {
      setActiveTab("report"); 
    }

  }, []);

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-semibold mt-2">Third Party Integrator Platforms</div>

          <div className="text-sm mb-4 breadcrumbs">
            <ul className="flex">
              {activeTab === "tpip" && (
                <>
                  <li>TPIP</li>
                  <li>TPIP</li>
                </>
              )}
              {activeTab === "report" && (
                <>
                  <li>TPIP</li>
                  <li>Report</li>
                </>
              )}
            </ul>
          </div>

          <div className="tabs tabs-boxed w-fit mb-4">
            <a
              className={`tab ${activeTab === "tpip" ? "tab-active" : ""}`}
              onClick={() => handleTabClick("tpip")}
            >
              TPIP
            </a>
            <a
              className={`tab ${activeTab === "report" ? "tab-active" : ""}`}
              onClick={() => handleTabClick("report")}
            >
              Report
            </a>
          </div>

          {activeTab === "tpip" && <TPIP tpipData={tpipData}/>}
          {activeTab === "report" && <Report tpipData={tpipData}/>}
        </div>


      </div>
    </div>
  )
}

export default withAuth(index)
