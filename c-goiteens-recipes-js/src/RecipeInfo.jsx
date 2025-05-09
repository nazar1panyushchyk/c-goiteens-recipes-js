import PropTypes from "prop-types";

export default function RecipeInfo({ icon, text }) {
  return (
    <>
      <div>
        <img src={icon} alt="icon" />
        <p>
          {text}, {icon}
        </p>
      </div>
    </>
  );
}

RecipeInfo.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};