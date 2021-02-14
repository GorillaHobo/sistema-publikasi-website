import Link from "next/link";
import styled from "@emotion/styled";

const StyledButtonNormal = styled.button`
  padding: ${(props) => props.theme.spacings.xs}
    ${(props) => props.theme.spacings.sm};

  font-weight: 700;

  $ a {
    font-family: inherit;
  }

  &.border {
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};
    border: ${(props) => props.theme.colors.white} 2px solid;
    border-radius: 9999px;

    &:hover {
      background-color: ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.white};
      border: ${(props) => props.theme.colors.blue} 2px solid;
    }
  }
  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;

const ButtonNormal = (border: boolean) => {
  return (
    <Link href="#">
      <StyledButtonNormal className={border && "border"}>
        Testing
      </StyledButtonNormal>
    </Link>
  );
};

export default ButtonNormal;
