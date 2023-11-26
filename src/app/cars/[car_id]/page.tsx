"use client";
import React, { Suspense } from "react";
import Car from "@/app/_components/Car";
import FallingUi from "@/app/_components/FallingUi";

type cars_props = {
  params: {
    car_id: string;
  };
};

const CarPage = ({ params }: cars_props) => {
  return (
    <Suspense fallback={<FallingUi />}>
      <Car car_id={params.car_id} />
    </Suspense>
  );
};

export default CarPage;
