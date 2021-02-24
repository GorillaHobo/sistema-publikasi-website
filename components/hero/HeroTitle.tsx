import { useRef, Props } from "react";
import useLazyLoader from "../../lib/useLazyLoader";
import styled from "@emotion/styled";
import { heroState } from "../../contexts/HeroContext";

const StyledHeroTitle = styled.div`
  color: white;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  margin-bottom: ${(props) => props.theme.spacings.xl};

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  & p {
    width: 400px;
  }
  & p,
  span {
    opacity: 0;
    transition: opacity ease-in-out ${(props) => props.theme.speed.slower},
      transform ease-in-out ${(props) => props.theme.speed.slower};
    transform: translateY(50px);
    &.appear {
      opacity: 1;
      transform: translateY(0px);
      &.delay {
        transition-delay: ${(props) => props.theme.speed.slower};
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin-bottom: 0;
  }
`;

const Title = styled.span`
  font-size: 6rem;
  font-weight: bold;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 3rem;
  }
`;

const HeroTitle: React.FC = ({
  page,
  children,
}: {
  page: string;
  children?: React.ReactChild;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible] = useLazyLoader({ elementRef: containerRef });
  const { title, desc } = heroState[page];

  return (
    <StyledHeroTitle ref={containerRef}>
      <Title className={isVisible && "appear"}>{title}</Title>

      {/* hide description only on contact page */}
      {page !== "contact" && (
        <p className={isVisible && "appear delay"}>{desc}</p>
      )}
      {children}
    </StyledHeroTitle>
  );
};

export default HeroTitle;
