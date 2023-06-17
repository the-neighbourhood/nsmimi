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
          "https://www.figma.com/proto/Bj5q0U5Ex8huInKPwEKogM/ArtistBioApp?page-id=432%3A5171&type=design&node-id=432-6211&viewport=808%2C565%2C0.18&scaling=scale-down&starting-point-node-id=432%3A6211";
      }}
      unoptimized
    />
  );
}
