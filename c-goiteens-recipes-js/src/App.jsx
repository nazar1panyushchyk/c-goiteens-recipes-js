import Recipe from './Recipe';
import recipesData from './recipes.json';
import { IoTimer } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";

function App() {
  
  let iconsData = {
    time: <IoTimer/>,
    calories: <FaFire/>,
  }

  return (
    <div>
      {recipesData.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} icon={iconsData}/>
      ))}
    </div>
  );
}

export default App;
