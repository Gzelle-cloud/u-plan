import WorkshopItem from "./WorkshopItem";
import { useSelector } from "react-redux";
import { getWorkshopItems } from "../../redux/workshopSlice";

function Workshop() {
  const workshopItems = useSelector(getWorkshopItems)

  return(
    <>
      <div className="wrapper">   
        {workshopItems.map(workshopItem => <WorkshopItem key={workshopItem.id} workshopItemProp={workshopItem}/>)}    
      </div>
    </>
    
  )
}

export default Workshop;