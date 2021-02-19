import Link from "next/link";
import { useRouter } from "next/router";
import { INavMenuItem } from "./Nav";
import styled from "@emotion/styled";

const StyledNavMenuItem = styled.li`
  padding: ${(props) => props.theme.spacings.xsm}
    ${(props) => props.theme.spacings.sm};

  font-weight: 700;

  transition: background-color ease 200ms, color ease 200ms;
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

  &.active {
    color: ${(props) => props.theme.colors.blue};
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
  const router = useRouter();
  return (
    <Link href={item.href}>
      <a>
        <StyledNavMenuItem
          className={`${border && "border"} ${
            item.href === router.pathname && "active"
          }`}
        >
          {item.name}
        </StyledNavMenuItem>
      </a>
    </Link>
  );
};

export default NavMenuItem;
