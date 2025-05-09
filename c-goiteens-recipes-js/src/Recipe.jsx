import RecipeInfo from "./RecipeInfo";
import PropTypes from "prop-types";
export default function Recipe({ recipe, icon }) {
    const { name, time, servings, calories, difficulty, image } = recipe;

    return (
      <>
        <h1>Hello</h1>
        <p>{name}</p>
        <img src={image} alt="image" width="300" />
        <RecipeInfo text={time} icon={icon.time} />
        <RecipeInfo text={servings} />
        <RecipeInfo text={calories} icon={icon.calories} />
        <RecipeInfo text={difficulty} />
      </>
    );
}
Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  icon: PropTypes.shape({
    time: PropTypes.element.isRequired,
    calories: PropTypes.element.isRequired,
  }).isRequired,
};