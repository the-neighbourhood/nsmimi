import React from "react";
import Image from "next/image";

export default function CatAdopter() {
  return (
    <Image
      src="/pages/catadopter.png"
      alt="cat"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      onClick={() => {
        window.location.href =
          "https://www.behance.net/gallery/163480611/Case-Study-CatAdopter(A-Responsive-Website)/modules/922077501";
      }}
    />
  );
}
