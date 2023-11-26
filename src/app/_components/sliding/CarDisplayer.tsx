"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UrlObject } from "url";

const CarDisplayer = ({
  link,
  model,
  src,
  carname,
  carprice,
  children,
}: {
  model: string;
  link: UrlObject | string;
  src: string | StaticImport;
  carname: string;
  carprice: string | number;
  children?: React.ReactNode;
}) => {
  const router = useRouter();

  return (
    <section>
      <strong>Model Type {model}</strong>

      <Link href={`${link}`} className="ms-3 d-block text-start ">
        See specification
      </Link>

      <section className="row gx-0 mb-5">
        <section className="col-lg-8 border-light p-0 card ">
          <section className="card-body">
            <section>
              <Image
                onClick={() => router.push(`${link}`)}
                className="img-fluid"
                src={src}
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
                <span className="text-primary">{carname}</span>
              </p>
              <p className="my-0 p-0">
                <i className="fa-brands fa-buromobelexperte me-1"></i>
                Model :<span className="text-primary">{model}</span>
              </p>
              <p className="my-0 p-0">
                <i className="fa-solid fa-file-invoice-dollar me-1"></i>
                Price :
                <span className="text-primary">
                  {carprice}

                  <i className="fa-solid fa-dollar-sign"></i>
                </span>
              </p>
            </section>
          </section>

          <section className="mx-auto text-center vstack gap-2">
            <button className="btn  btn-white border border-dark btn-sm">
              GET QUICK QUOTES
            </button>
            <button className="btn  btn-primary">BOOK TEST DRIVE</button>
          </section>
        </section>
      </section>

      {children}
    </section>
  );
};

export default CarDisplayer;
