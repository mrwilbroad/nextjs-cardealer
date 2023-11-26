import React from "react";

const FallingUi = () => {
  return (
    <section className="container mt-4" aria-hidden={true}>
      <section className="card ">
        <section className="card-body">
          <section className="row justify-content-center">
            <section className="col-lg-5">
              <h6 className="card-title placeholder-grow">
                <span className="placeholder col-7"></span>
              </h6>
              <p className="card-subtitle  placeholder-grow">
                <span className="placeholder  col-6"></span>
              </p>
              <section
                className="placeholder col-12 mx-auto"
                style={{
                  height: "10em",
                  width: "10em",
                }}
              ></section>
            </section>
            <section className="col-lg-4">
              <h6 className="card-title placeholder-grow">
                <span className="placeholder col-5"></span>
              </h6>
              <p className="card-subtitle  placeholder-grow">
                <span className="placeholder  col-5"></span>
              </p>
              <p className="card-subtitle  placeholder-grow">
                <span className="placeholder  col-5"></span>
              </p>
              <button
                tabIndex={-1}
                className="btn btn-sm btn-primary disabled placeholder col-5 "
                aria-hidden={true}
              ></button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default FallingUi;
