import Link from "next/link";
import { INavMenuItem } from "./Nav";
import styled from "@emotion/styled";

const StyledNavMenuItem = styled.li`
  padding: ${(props) => props.theme.spacings.small};
`;

const NavMenuItem = ({
  item,
  className,
}: {
  item: INavMenuItem;
  className?: string;
}) => {
  return (
    <StyledNavMenuItem>
      <Link href={`${item.href}`}>{item.name}</Link>
    </StyledNavMenuItem>
  );
};

export default NavMenuItem;
