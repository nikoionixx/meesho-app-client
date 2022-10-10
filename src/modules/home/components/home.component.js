
import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from '../../shared/components/navbar/navbar';

const HomeComponent = () => {
  return (
    <React.Fragment>
      <NavbarComponent />
      <div className="container mx-auto mt-24">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default HomeComponent;
