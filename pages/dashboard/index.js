import React from "react"
import Link from "next/link";
import { useRouter } from 'next/router';
import AuthenticatedLayout from "../../components/layouts/authenticated_layout";


export default function DashboardPage() {
  const router = useRouter();
  const { from, additionalData } = router.query;

  return (

    // <div>
    //   <h2>Other Page</h2>
    //   <p>From: {from}</p>
    //   <p>Name: { additionalData[0] }</p>
    //   <p>Email: { additionalData[1] }</p>
    // </div>
    // find out on how to pass props to a component

    <div className="flex">
      <AuthenticatedLayout>
        {/* <Main /> */}
      </AuthenticatedLayout>
    </div>

  );

}