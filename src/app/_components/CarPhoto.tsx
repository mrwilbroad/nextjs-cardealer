"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import car_pic from "@/app/_lib/cars/car_five.jpeg";
import car_models from "@/app/_lib/car_model.json";
import SlidingView from "./sliding/SlidingView";
import CarDisplayer from "./sliding/CarDisplayer";

const CarPhoto = () => {
  return (
    <SlidingView>
      {car_models.map((model, index) => (
        <SwiperSlide key={model.id} className="py-3">
          <CarDisplayer
            carname={model.make}
            carprice={model.price}
            model={model.model}
            src={car_pic}
            link={`/cars/${model.id}`}
          />
        </SwiperSlide>
      ))}
    </SlidingView>
  );
};

export default CarPhoto;
