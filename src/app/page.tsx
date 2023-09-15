import React from "react";
import CraftsmanshipLeft from "./Component/Craftsmanship/CraftsmanshipLeft";
import CraftsmanshipRight from "./Component/Craftsmanship/CraftsmanshipRight";
import Navbar from "./Component/Navbar/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <CraftsmanshipLeft />
      <CraftsmanshipRight />
    </div>
  );
};

export default page;
