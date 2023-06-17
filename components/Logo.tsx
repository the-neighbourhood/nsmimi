import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const LogoContainer = styled.div`
  background-color: ${(props) => props.theme.components.menu.colors.background};
`;

interface LogoProps {
  background?: boolean;
  height: number;
  width: number;
}

export default function Logo({ background, height, width }: LogoProps) {
  const router = useRouter();

  const imgComp = (
    <Image
      src="/logo.svg"
      alt="logo"
      height={height}
      width={width}
      onClick={() => router.push("/")}
      style={{ cursor: "pointer" }}
    />
  );

  if (background) {
    return (
      <LogoContainer onClick={() => router.push("/")}>{imgComp}</LogoContainer>
    );
  }

  return imgComp;
}
