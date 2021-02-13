import Link from "next/link";
import { INavMenuItem } from "./Nav";
import styled from "@emotion/styled";

const StyledNavMenuItem = styled.li`
  padding: ${(props) => props.theme.spacings.xSmall}
    ${(props) => props.theme.spacings.small};

  font-weight: 700;
  &.border {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.blue};
    border: ${(props) => props.theme.colors.blue} 2px solid;
    border-radius: 9999px;

    &:hover {
      background-color: ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.white};
      border: ${(props) => props.theme.colors.blue} 2px solid;
    }
  }
  &:hover {
    color: ${(props) => props.theme.colors.blue};
    cursor: pointer;
  }
`;

// border add border prop to add border to show border
const NavMenuItem = ({
  item,
  border,
}: {
  item: INavMenuItem;
  border?: boolean;
}) => {
  return (
    <Link href={item.href}>
      <StyledNavMenuItem className={border && "border"}>
        {item.name}
      </StyledNavMenuItem>
    </Link>
  );
};

export default NavMenuItem;
