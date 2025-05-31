import PropTypes from "prop-types";

export default function RecipeInfo({ icon, text }) {
  return <p>{icon} {text}</p>;
}

RecipeInfo.propTypes = {
  text: PropTypes.element.isRequired,
  icon: PropTypes.string.isRequired,
};