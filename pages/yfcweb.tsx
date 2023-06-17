import React from "react";
import Image from "next/image";

export default function YfcWeb() {
  return (
    <Image
      src="/pages/yfcweb.png"
      alt="yfcweb"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
