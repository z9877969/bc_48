import PropTypes from "prop-types";

const selectStyles = {
  display: "block",
  width: "150px",
  margin: "0 auto",
  fontSize: "24px",
  marginTop: "12px",
};

const PrioritySelect = ({ filter, changeFilter }) => {
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
