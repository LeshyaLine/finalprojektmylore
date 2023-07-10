"use client";
import styles from "./location.module.css";
import React, { useEffect, useState } from "react";

function Location() {

  const [location, setLocation] = useState("");


  useEffect(() => {
    const storedData = localStorage.getItem("userdaten") || "";
    const infoData = JSON.parse(storedData);
    setLocation(infoData.nation)
  },[])

  return (
    <div className={styles.bodyComponent}>
      Aktueller Standort:
      <br />
      {location}-City
    </div>
  );
}

export default Location;
