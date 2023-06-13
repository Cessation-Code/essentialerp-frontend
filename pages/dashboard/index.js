import React from "react"
import Link from "next/link";
import { useRouter } from 'next/router';


export default function DashboardPage(){
    const router = useRouter();
    const { from, additionalData } = router.query;

    return (
        <div>
          <h2>Other Page</h2>
          <p>From: {from}</p>
          <p>Name: { additionalData[0] }</p>
          <p>Email: { additionalData[1] }</p>
        </div>
      );

}