import React from 'react'
import withAuth from '../../../components/withAuth'
import TPIP from './tpip';
import Report from './report';
import { useState } from 'react';

const index = () => {
  const [activeTab, setActiveTab] = useState("tpip");
      
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div>
       <div> 
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold my-4">TPIP PAGE</h3>
      
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
      
          {activeTab === "tpip" && <TPIP />}
          {activeTab === "report" && <Report />}
        </div>
      
        
    </div>
    </div>
  )
}

export default withAuth(index)
