import clsx from "clsx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import classes from "./Dropdown.module.css";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { Link } from "react-router-dom";

const Dropdown = ({
  dropdownRef,
  isActive,
  setActive,
  label,
  onSelect,
  children,
  dropdownItems,
  styled,
}) => {
  useOnClickOutside(dropdownRef, () => setActive(false));
  return (
    <div
      className={clsx(
        classes.dropdown,

        styled && classes.styledDropdown
      )}
      onClick={() => {
        if (isActive) {
          setActive(false);
        } else {
          setActive(true);
        }
      }}
    >
      <>
        <p className={classes.selectedValue}>{label}</p> {children}
        {isActive ? (
          <FaAngleUp className={classes.icon} />
        ) : (
          <FaAngleDown className={classes.icon} />
        )}
      </>

      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={classes.list}>
          {dropdownItems.map((el, idx) => {
            return (
              <Link
                to={`/${el}`}
                key={"item" + idx}
                className={clsx(classes.listItem)}
                onClick={() => {
                  onSelect(el);
                }}
              >
                {el}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
