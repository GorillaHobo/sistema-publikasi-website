import React, { useRef } from "react";
import { IconType } from "react-icons";
import {
  FaMicrosoft,
  FaApple,
  FaLinux,
  FaReact,
  FaAngular,
  FaAdobe,
  FaAmazon,
  FaAndroid,
  FaBlackberry,
  FaFire,
  FaGoogle,
  FaYoutube,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import styled from "@emotion/styled";
import useLazyLoad from "../lib/useLazyLoader";

import SectionTitle from "./SectionTitle";

const Icons: IconType[] = [
  FaMicrosoft,
  FaApple,
  FaLinux,
  FaReact,
  FaAngular,
  FaAdobe,
  FaAmazon,
  FaAndroid,
  FaBlackberry,
  FaFire,
  FaGoogle,
  FaYoutube,
  FaXbox,
  FaPlaystation,
];

const StyledPartners = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.li`
  color: ${(props) => props.theme.colors.blackLight};
  font-size: 3rem;
  padding: 1rem 3rem;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: translateY(20px);
  transition: opacity ease ${(props) => props.theme.speed.medium},
    transform ease ${(props) => props.theme.speed.medium};
  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

const getIcon = (icon: IconType) => {
  return React.createElement(icon);
};

const Partners = () => {
  const iconRef = useRef<HTMLUListElement | null>(null);
  const [isVisible] = useLazyLoad({
    elementRef: iconRef,
    rootMargin: "130px",
  });
  return (
    <>
      <SectionTitle title="Partners" />
      <StyledPartners ref={iconRef}>
        {Icons.map((icon, index) => (
          <StyledIcon
            key={index}
            className={isVisible && "active"}
            style={{ transitionDelay: `${80 * index}ms` }}
          >
            {getIcon(icon)}
          </StyledIcon>
        ))}
      </StyledPartners>
    </>
  );
};

export default Partners;
