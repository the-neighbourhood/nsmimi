import React from "react";
import Image from "next/image";

export default function YfcWeb() {
  return (
    <Image
      src="/pages/yfcweb.png"
      alt="yfcweb"
      width={1440}
      height={47790}
      sizes="100vw"
      quality={100}
      style={{ width: "100%", height: "auto" }}
      onClick={() => {
        window.location.href =
          "https://www.figma.com/file/g1xEO17nGhTKye51WtdP0p/yfc-app-and-website?type=design&node-id=594%3A16419&t=wSbPQUAYqp7DBuWu-1";
      }}
    />
  );
}
