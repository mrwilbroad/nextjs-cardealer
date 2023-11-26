"use client";
import React from "react";
import { Swiper } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";

const SlidingView = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      spaceBetween={400}
      slidesPerView={1}
      modules={[Pagination, EffectFade]}
      pagination={{ clickable: true }}
    >
      {children}
    </Swiper>
  );
};

export default SlidingView;
