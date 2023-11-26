"use client";
import React, { useCallback } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const MomoizedLinks = useCallback((title: string, hrf: string) => {
    return (
      <Link
        href={hrf}
        className={`nav-link  ${pathname === hrf && "active-link"}`}
      >
        {title}
      </Link>
    );
  }, [pathname]);

  return (
    <header className="container-fluid p-3 bg-white user-select-none bg-light shadow">
      <section className="vstack gap-0">
        <Nav as="ul" className="justify-content-center">
          <Nav.Item as="li" className="mx-2">
            <section className="hstack gap-1">
              <p>
                <strong className="text-blue fs-4">CAR DEALER</strong>
                <span className="text-blue fw-bold rounded-circle border p-1 border-primary">
                  <i>TZ</i>
                </span>
              </p>
              <p className="vr" />
              <p>
                <span className="d-block fw-bold text-blue">
                  {" "}
                  BE YOU WITH US
                </span>
                <span>LATEST CAR MODELS</span>
              </p>
            </section>
          </Nav.Item>
        </Nav>

        <section>
          <Navbar expand="lg" bg="white" variant="white">
            <Navbar.Toggle aria-controls="navbar-collapse-id" />
            <Navbar.Collapse as="div">
              <Nav as="nav" className="nav-bar-links mx-auto text-center">
                {MomoizedLinks("HOME", "/")}
                {MomoizedLinks("SHOWROOM", "/showroom")}
                {MomoizedLinks("USED CAR", "/used-car")}
                {MomoizedLinks("ABOUT US", "/#about-us")}
                {MomoizedLinks(" CONTACT US", "/contact-us")}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </section>
      </section>
    </header>
  );
};

export default Navigation;
