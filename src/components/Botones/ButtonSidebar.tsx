import { ButtonSidebarInterface } from "../../types";

export const ButtonSidebar = ({
  children,
  name,
  style,
  onClick,
  id,
}: ButtonSidebarInterface) => {
  return (
    <li id={id} onClick={(e) => onClick(e)} className={style}>
      {children} {name}
    </li>
  );
};
