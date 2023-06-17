import React from "react";
import Image from "next/image";

export default function YfcApp() {
  return (
    <Image
      src="/pages/yfcapp.png"
      alt="yfcapp"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
