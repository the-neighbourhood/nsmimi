import React from "react";
import Image from "next/image";

export default function YfcApp() {
  return (
    <Image
      src="/pages/yfcapp.png"
      alt="yfcapp"
      width={1440}
      height={36864}
      sizes="100vw"
      quality={100}
      style={{ width: "100%", height: "auto" }}
      onClick={() => {
        window.location.href =
          "https://www.figma.com/proto/g1xEO17nGhTKye51WtdP0p/yfc-app-and-website?page-id=0%3A1&type=design&node-id=68-692&viewport=714%2C189%2C0.1&scaling=scale-down&starting-point-node-id=68%3A692&show-proto-sidebar=1";
      }}
      unoptimized
    />
  );
}
