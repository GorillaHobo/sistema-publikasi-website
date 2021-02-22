import styled from "@emotion/styled";
import Link from "next/link";
import { BsBoxArrowInUpRight as LinkIcon } from "react-icons/bs";
import { AiOutlineSave as SaveIcon } from "react-icons/ai";

type IIcon = "arrow" | "save";

interface IButton {
  name: string;
  href?: string;
  icon?: IIcon;
  shadow?: boolean;
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border: none;

  font-family: inherit;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.7rem 1rem;

  transition: background-color ease 200ms;
  & svg {
    font-size: 1.1rem;
    margin-left: 5px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.blueLight};
    cursor: pointer;
  }

  &.shadow {
    box-shadow: ${(props) => props.theme.shadows.medium};
  }
`;

const Button = ({ name, href = "#", icon, shadow = false }: IButton) => {
  const getIcon = (icon: IIcon) => {
    switch (icon) {
      case "arrow":
        return <LinkIcon />;
      case "save":
        return <SaveIcon />;
      default:
        return <></>;
    }
  };

  return (
    <Link href={href}>
      <a>
        <StyledButton className={shadow && "shadow"}>
          {name} {getIcon(icon)}
        </StyledButton>
      </a>
    </Link>
  );
};

export default Button;
