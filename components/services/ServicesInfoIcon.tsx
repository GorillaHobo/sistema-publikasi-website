import styled from "@emotion/styled";
import { IIcons } from "../../contexts/servicesState";

import { BsCheckBox as Check } from "react-icons/bs";
import { FiUpload as Publish } from "react-icons/fi";
import {
  AiOutlineFileSearch as MagnifyingGlass,
  AiOutlineEdit as Document,
} from "react-icons/ai";

const StyledServicesInfoIcon = styled.div`
  font-size: 4rem;
  color: ${(props) => props.theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;
const ServicesInfoIcon = ({ icon }: { icon: IIcons }) => {
  const getIcon = (icon: IIcons) => {
    switch (icon) {
      case "dictionary":
        return <Check />;
      case "document":
        return <Document />;
      case "magnifyingglass":
        return <MagnifyingGlass />;
      case "publish":
        return <Publish />;
      default:
        return <></>;
    }
  };
  return <StyledServicesInfoIcon>{getIcon(icon)}</StyledServicesInfoIcon>;
};

export default ServicesInfoIcon;
