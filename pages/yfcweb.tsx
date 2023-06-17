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
      style={{ width: "100%", height: "auto" }}
      onClick={() => {
        window.location.href =
          "https://www.figma.com/proto/g1xEO17nGhTKye51WtdP0p/yfc-app-and-website?page-id=594%3A16419&type=design&node-id=594-19426&viewport=658%2C1140%2C0.06&scaling=min-zoom&starting-point-node-id=594%3A19426&show-proto-sidebar=1";
      }}
      unoptimized
    />
  );
}
