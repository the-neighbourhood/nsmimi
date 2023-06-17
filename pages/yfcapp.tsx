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
      onClick={() => {
        window.location.href =
          "https://www.figma.com/file/g1xEO17nGhTKye51WtdP0p/yfc-app-and-website?type=design&node-id=594%3A16419&t=wSbPQUAYqp7DBuWu-1";
      }}
    />
  );
}
