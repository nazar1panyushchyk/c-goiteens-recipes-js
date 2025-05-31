import RecipeInfo from "./RecipeInfo";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
const RecipeContainer = styled.div`
  width: 300px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;
const Image = styled.img`
  border-radius: 10px 10px 0 0;
`;
const Information = styled.div`
  display: flex;
  gap: 12px;
   background-color:rgb(241, 237, 222);
`;
const Levels = styled.div`
  display: flex;
  justify-content: space-evenly;
  .recipe-container:nth-child(1) & p:nth-child(1),
  .recipe-container:nth-child(2) & p:nth-child(1) {
    background-color:rgb(209, 117, 137);
    color: white;
    font-weight: bold;
    }

  .recipe-container:nth-child(3) & p:nth-child(2) {
    background-color:rgb(209, 117, 137);
    color: white;
    font-weight: bold;
  }
  .recipe-container:nth-child(4) & p:nth-child(3) {
    background-color:rgb(209, 117, 137);
    color: white;
    font-weight: bold;
  }
`;
const Level = styled.p`
  background-color: #e8dbab;
  border-radius: 20px;
  width: 80px;
  height: 30px;
  text-align: center;
`;
export default function Recipe({ recipe, icon }) {
  const { name, time, servings, calories, difficulty, image } = recipe;

  return (
    <>
      <RecipeContainer className="recipe-container">
        <div className="image">
          <Image src={image} alt="image" width="300" />
        </div>
        <div className="text">
          <Text>{name}</Text>
        </div>
        <Information className="info">
          <RecipeInfo text={time} icon={icon.time} />
          <RecipeInfo text={servings} icon={icon.servings} />
          <RecipeInfo text={calories} icon={icon.calories} />
        </Information>
        <div className="difficulty">
          <Text>Difficulty {difficulty}</Text>
        </div>
        <Levels>
          <Level>Easy</Level>
          <Level>Medium</Level>
          <Level>Hard</Level>
        </Levels>
      </RecipeContainer>
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
