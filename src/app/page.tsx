"use client";
import CarPhoto from "./_components/CarPhoto";

export default function Home() {
  const InitialVl = {
    model: "",
    search: "",
  };
  return (
    <main className="container py-5">
      <section className="vstack gap-3">
        <section className="row justify-content-between">
          <section className="col-lg-3 col-md-4 col-sm-4">
            <section className="vstack gap-2">
              <section>
                <strong>Hyundai Model</strong>
                <input
                  className="form-control"
                  name="search"
                  type="search"
                  placeholder="search model/type here"
                />
              </section>

              <section className="vstack gap-2">
                <section className="form-check">
                  <input type="radio" className="form-check-input" />
                  <span className="form-check-text">Model 1</span>
                </section>
              </section>
            </section>
          </section>

          <section className="col-lg-7 col-md-8 col-sm-8  card border-light shadow">
            <section className="card-body">
              <CarPhoto />
            </section>
          </section>
        </section>

        {/* about us */}
        <section id="about-us" className="card border-light">
          <section className="mt-4 card-body">
            <section className="row g-3">
              <section className="col-lg-4">
                <section className="card">
                  <section className="card-body">
                    <h5 className="text-blue">About us</h5>
                    <p>
                      At
                      <strong className="text-blue mx-2">
                        Car Dealer Tz organization
                      </strong>
                      At Our Visionary Car Dealership, our driving force is a
                      profound commitment to redefine the automotive landscape
                      through innovation, unwavering quality, and an unrelenting
                      dedication to our customers. Established in 2010, our
                      journey began with a visionary, John Smith, whose passion
                      and foresight ignited our quest to revolutionize car
                      buying experiences
                    </p>
                  </section>
                </section>
              </section>

              <section className="col-lg-4">
                <section className="card">
                  <section className="card-body">
                    <h5 className="text-blue">Our Story</h5>
                    <p>
                      Our narrative is one of resilience and ambition.
                      Originating in Dar es Salaam, John Smith's dream grew from
                      a modest endeavor into a symbol of unparalleled automotive
                      excellence.
                    </p>
                  </section>
                </section>
              </section>

              <section className="col-lg-4">
                <section className="card">
                  <section className="card-body">
                    <h5 className="text-blue">Our Mission</h5>
                    <p>
                      At Our Visionary Car Dealership, our mission resonates
                      clearly: to redefine car buying experiences. Our approach,
                      deeply rooted in honesty, integrity, and
                      customer-centricity, aims to provide hassle-free,
                      transparent transactions, fostering trust and satisfaction
                      for both our valued customers and communities.
                    </p>
                  </section>
                </section>
              </section>

              <section className="col-lg-4">
                <section className="card">
                  <section className="card-body">
                    <h5 className="text-blue">What Drives Us</h5>
                    <p>
                      Our principles of honesty, integrity, and innovation form
                      the cornerstone of our decisions. These principles nurture
                      a culture of transparency and trust, empowering us to
                      consistently uphold our commitment to exceptional service,
                      ensuring a seamless and satisfying car buying journey for
                      our customers.
                    </p>
                  </section>
                </section>
              </section>

              <section className="col-lg-4">
                <section className="card">
                  <section className="card-body">
                    <h5 className="text-blue">Our Team</h5>
                    <p>
                      The bedrock of our success lies in our diverse team, each
                      member contributing unique expertise, which collectively
                      fuels our shared vision of transforming the car buying
                      process.
                    </p>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
