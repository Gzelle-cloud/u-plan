import checkIdea from "../../assets/сheckIdea.png"
import icon from "../../assets/icon.png"
import { useDispatch, useSelector } from "react-redux"
import { getWorkshopItems, removeItemFromWorkshop, toggleDoneFlag } from "../../redux/workshopSlice";
import trash from "../../assets/trash-can.png"
import { useTranslation } from "react-i18next";

const WorkshopItem = ({ workshopItemProp }) => {

  const { t } = useTranslation();
  const workshopItems = useSelector(getWorkshopItems);
  const ideas = workshopItems.find(item => item.title === workshopItemProp.title) || {};
  const dispatch = useDispatch();


  return (
    <>
     

     <div className="note default">
      <h4 className="field">{workshopItemProp.title} </h4>
      <div>
        <span className="tag">#{ideas.category}</span>
      </div>      
      <p className="field">{ideas.description}</p>
      <button 
        className="btn-delete-note" 
        title={t("Mark as done")} 
        onClick={() => {dispatch(toggleDoneFlag({title: workshopItemProp.title}))}}>
        <img 
        src={ideas.done ? checkIdea : icon} width="20px" alt="Idea done"/>
      </button>
      <button 
       className="btn-delete-note" 
       title={t("Remove from Workshop")} 
       onClick={() => dispatch(removeItemFromWorkshop({title: workshopItemProp.title}))}>
        <img src={trash} width="20px" alt="Delete idea"/> 
      </button>
    </div> 

    
    </>
     
    
  )
}

export default WorkshopItem;