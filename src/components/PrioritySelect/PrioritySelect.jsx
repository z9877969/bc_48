import PropTypes from "prop-types";
import { useEffect } from "react";

const selectStyles = {
  display: "block",
  width: "150px",
  margin: "0 auto",
  fontSize: "24px",
  marginTop: "12px",
};

const PrioritySelect = ({ filter, changeFilter }) => {

  // useEffect(() => {
  //   console.log("object", filter);
  //   // eslint-disable-next-line
  // }, [])

  return (
    <select
      name="priority"
      style={selectStyles}
      value={filter}
      onChange={changeFilter}
    >
      <option value="all">All</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

PrioritySelect.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default PrioritySelect;

// const fn = ({ a, b }) => {
//   return a + b;
// };
// fn({ a: 2, b: 6 });
// <fn a={2} b={6} />;
