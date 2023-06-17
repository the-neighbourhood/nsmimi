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
    />
  );
}
