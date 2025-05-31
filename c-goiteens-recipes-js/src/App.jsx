import Recipe from './Recipe';
import recipesData from './recipes.json';
import { IoTimer } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";
import { FaPlateWheat } from "react-icons/fa6";
import styled from 'styled-components';

const Recipes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 70px;
  color: black;
`;

function App() {
  
  let iconsData = {
    time: <IoTimer/>,
    calories: <FaFire/>,
    servings: <FaPlateWheat />,
  }

  return (
    <Recipes>
      {recipesData.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} icon={iconsData}/>
      ))}
    </Recipes>
  );
}

export default App;
