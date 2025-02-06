import { useTranslation } from "react-i18next";
import Filter from "./Filter";

const AllCategories = () => {
  const categories = ['Personal', 'Professional', 'Creative', 'All'];

  return (
    <>            
      {categories.map(category => <Filter key={category} categoryProp={category}/>)
      } 
    </>
  )
} 

export default AllCategories;