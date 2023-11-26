import React from "react";
import CarsData from "@/app/_lib/car_model.json";
import SlidingView from "@/app/_components/sliding/SlidingView";
import { SwiperSlide } from "swiper/react";
import car_pic from "@/app/_lib/cars/car_five.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";


export async function generateMetadata(
  { params }: { params:{car_id: string} }
): Promise<Metadata> {
  const FilteredData = CarsData.filter((model) => model.id === params.car_id)[0];

  return {
    title: "TEE",
    description: `${FilteredData.description, FilteredData.make, FilteredData.model}`
  };
}

const Car = ({ car_id }: { car_id: string }) => {
  const router = useRouter();
  const FilteredData = CarsData.filter((model) => model.id === car_id)[0];

  return (
    <section className="container">
      <section className="row">
        <section className="col-lg-12">
          <SlidingView>
            <SwiperSlide className="py-3">
              <button
                type="button"
                className="btn btn-sm btn-light border border-dark"
                onClick={() => router.push("/")}
              >
                <span className="fa-solid fa-backward"></span>
                <span className="fw-bold mx-1">Go Back</span>
              </button>
              <section className="row gx-0 mb-5">
                <section className="col-lg-8 border-light p-0 card ">
                  <section className="card-body">
                    <section>
                      <Image
                        onClick={() => {}}
                        className="img-fluid"
                        src={car_pic}
                        alt="Car image "
                      />
                    </section>
                  </section>
                </section>
                <section className="col-lg-4  justify-content-between vstack gap-2 text-center ">
                  <section className="card border-light">
                    <section className="card-body text-start vstack gap-0">
                      <p className="my-0 p-0">
                        <i className="fa-solid fa-arrow-up-9-1 me-1"></i>
                        Name:
                        <span className="text-primary">
                          {FilteredData.make}
                        </span>
                      </p>
                      <p className="my-0 p-0">
                        <i className="fa-brands fa-buromobelexperte me-1"></i>
                        Model :
                        <span className="text-primary">
                          {FilteredData.model}
                        </span>
                      </p>
                      <p className="my-0 p-0">
                        <i className="fa-solid fa-file-invoice-dollar me-1"></i>
                        Price :
                        <span className="text-primary">
                          {FilteredData.price}

                          <i className="fa-solid fa-dollar-sign"></i>
                        </span>
                      </p>

                      <p className="my-0 p-0">
                        <i className="fa-solid fa-calendar-days me-1"></i>
                        Year:
                        <span className="text-primary">
                          {FilteredData.year}
                        </span>
                      </p>

                      <section className="mt-3">
                        <strong>Other details include</strong>
                        <section>
                          <section className="mt-3 vstack  gap-0">
                            <strong>Engine details</strong>

                            <p className="my-0 p-0">
                              <i className="fa-solid fa-warehouse me-1"></i>
                              Capacity :
                              <span className="text-primary">
                                {FilteredData.engine.capacity}
                              </span>
                            </p>
                            <p className="my-0 p-0">
                              <i className="fa-solid fa-file-invoice-dollar me-1"></i>
                              Boost type :
                              <span className="text-primary">
                                {FilteredData.engine.boostType}

                                <i className="fa-solid fa-dollar-sign"></i>
                              </span>
                            </p>

                            <p className="my-0 p-0">
                              <i className="fa-brands fa-bore-hole me-1"></i>
                              Cylinder Bore :
                              <span className="text-primary">
                                {FilteredData.engine.cylinderBore}
                              </span>
                            </p>
                            <p className="my-0 p-0">
                              <i className="fa-brands fa-centos me-1"></i>
                              Engine configuration:
                              <span className="text-primary">
                                {FilteredData.engine.engineConfiguration}

                                <i className="fa-solid fa-dollar-sign"></i>
                              </span>
                            </p>

                            <p className="my-0 p-0">
                              <i className="fa-solid fa-disease me-1"></i>
                              Injection Type :
                              <span className="text-primary">
                                {FilteredData.engine.injectionType}
                              </span>
                            </p>
                            <p className="my-0 p-0">
                              <i className="fa-solid fa-battery-full me-1"></i>
                              maximum Power :
                              <span className="text-primary">
                                {FilteredData.engine.maxPowerAtRPM}

                                <i className="fa-solid fa-dollar-sign"></i>
                              </span>
                            </p>

                            <p className="my-0 p-0">
                              <i className="fa-solid fa-car-battery me-1"></i>
                              Maximum Torque :
                              <span className="text-primary">
                                {FilteredData.engine.maxTorque}
                              </span>
                            </p>
                            <p className="my-0 p-0">
                              <i className="fa-solid fa-file-invoice-dollar me-1"></i>
                              Number of Cylinders :
                              <span className="text-primary">
                                {FilteredData.engine.numberOfCylinders}

                                <i className="fa-solid fa-dollar-sign"></i>
                              </span>
                            </p>

                            <p className="my-0 p-0">
                              <i className="fa-solid fa-battery-full me-1"></i>
                              Power output :
                              <span className="text-primary">
                                {FilteredData.engine.powerOutput}
                              </span>
                            </p>
                            <p className="my-0 p-0">
                              <i className="fa-solid fa-file-invoice-dollar me-1"></i>
                              Presence of Intercooler :
                              <span className="text-primary">
                                {FilteredData.engine.presenceOfIntercooler}

                                <i className="fa-solid fa-dollar-sign"></i>
                              </span>
                            </p>

                            <p className="my-0 p-0">
                              <i className="fa-solid fa-strikethrough me-1"></i>
                              Stroke Cycle :
                              <span className="text-primary">
                                {FilteredData.engine.strokeCycle}
                              </span>
                            </p>
                            <p className="my-0 p-0">
                              <i className="fa-solid fa-battery-full me-1"></i>
                              Turn over maximum torque:
                              <span className="text-primary">
                                {FilteredData.engine.turnoverOfMaxTorque}

                                <i className="fa-solid fa-dollar-sign"></i>
                              </span>
                            </p>

                            <p className="my-0 p-0">
                              <i className="fa-brands fa-buromobelexperte me-1"></i>
                              valve per Cycler :
                              <span className="text-primary">
                                {FilteredData.engine.valvesPerCylinder}
                              </span>
                            </p>
                          </section>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </SwiperSlide>
          </SlidingView>
        </section>
      </section>
    </section>
  );
};

export default Car;
