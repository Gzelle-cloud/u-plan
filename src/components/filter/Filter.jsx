import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/ideasSlice";

const Filter = ({ categoryProp }) => {

  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <>
    
      <p onClick={() => {dispatch(filterCategory(categoryProp))}} className={selectedCategory === categoryProp ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
        {categoryProp}
      </p>
    
    </>
  )
}

export default Filter;