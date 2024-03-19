import React, { useEffect, useState } from "react";
import { LeadForm } from "../components/LeadForm";
import { DesktopDisplayCard } from "../components/DesktopDisplayCard";

export const HomePage = () => {
  const [isMobileView, setMobileView] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const updateMobileView = () => {
      setMobileView(window.innerWidth <= 640);
    };

    window.addEventListener("resize", updateMobileView);
    return () => {
      window.removeEventListener("resize", updateMobileView);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobileView ? "column" : "row",
        justifyContent: "space-between",
        width: "100%",
        // height: "100%",
      }}
    >
      {isMobileView ? (
        <>
          <div style={{  width: "100%" ,lineHeight:"4"}}>
            <DesktopDisplayCard />
          </div>
          <div style={{ width: "100%" }}>
            <LeadForm />
          </div>
        </>
      ) : (
        <>
          <div style={{ minWidth: "65vw", maxWidth: "65%" }}>
            <DesktopDisplayCard />
          </div>
          <div style={{ minWidth: "35vw", maxWidth: "35%" }}>
            <LeadForm />
          </div>
        </>
      )}
    </div>
  );
};
