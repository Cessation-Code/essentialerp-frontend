import React from "react";
import AuthenticatedLayout from "../../components/layouts/authenticated_layout/authenticated_layout";
import Head from "next/head";

const Card = ({ title, children, width, height, gridColumn }) => {
  return (
    <div className={`card w-${width} h-${height} bg-secondary-focus shadow-xl`} style={{ gridColumn }}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export function DashboardPage() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Dashboard | ERP</title>
      </Head>
      <AuthenticatedLayout>
        <div className="flex-grow py-8 flex">
          <div className="container mx-10">
            <div className="grid grid-cols-3 gap-4">
              {/* First Row */}
              {/* Card 1 */}
              <Card
                title="Card 1"
                width={96}
                height={"auto"}
                gridColumn="span 1"
                children={
                  <>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end ">
                      <button className="btn btn-primary mt-4">Buy Now</button>
                    </div>
                  </>
                }
              />

              {/* Card 2 */}
              <Card
                title="Card 2"
                width={96}
                height={"auto"}
                gridColumn="span 1"
                children={
                  <>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </>
                }
              />

              {/* Card 3 */}
              <Card
                title="Card 3"
                width={96}
                height={"auto"}
                gridColumn="span 2"
                children={
                  <>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </>
                }
              />

              {/* Second Row */}
              {/* Card 4 */}
              <Card
                title="Card 4"
                width={96}
                height={"auto"}
                gridColumn="span 2"
                children={
                  <>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </>
                }
              />

              {/* Card 5 */}
              <Card
                title="Card 5"
                width={"15%"}
                height={"auto"}
                gridColumn="span 1"
                children={
                  <>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </>
                }
              />

              {/* Card 6 */}
              <Card
                title="Card 6"
                width={"15%"}
                height={"auto"}
                gridColumn="span 1"
                children={
                  <>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}

export default DashboardPage;
