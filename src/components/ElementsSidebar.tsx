import { ElementSidebarInterface } from "../types/index";
import { Link } from "react-router-dom";

interface Props {
  ElementSidebar: ElementSidebarInterface;
}

const ElementsSidebar = ({
  children,
  name,
  link,
  style,
}: Props["ElementSidebar"]) => {
  return (
    <li className={style}>
      {children} <Link to={link}>{name}</Link>{" "}
    </li>
  );
};

export default ElementsSidebar;
