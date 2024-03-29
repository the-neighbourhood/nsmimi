import React from "react";
import Image from "next/image";

export default function CatAdopter() {
  return (
    <Image
      src="/pages/catadopter.png"
      alt="cat"
      width={1440}
      height={44886}
      sizes="100vw"
      quality={100}
      style={{ width: "100%", height: "auto" }}
      onClick={() => {
        window.location.href =
          "https://www.behance.net/gallery/152479485/CatAdopter";
      }}
      unoptimized
    />
  );
}
