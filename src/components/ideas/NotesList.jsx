import { useDispatch, useSelector } from "react-redux";
import edit from "../../assets/edit_btn.png"
import trash from "../../assets/trash-can.png"
import { addItemtoWorkshop, getWorkshopItems } from "../../redux/workshopSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NotesList = ({myNotesProp, deleteNoteProp, selectedNoteProp, setSelectedNoteProp}) => {
  const { t } = useTranslation();
  
  const dispatch = useDispatch();
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleClick = (id, title, category, description) => {
    dispatch(addItemtoWorkshop({title, category, description}));
    setSelectedNoteId(id);
  }

  return <>

    <div className="wrapper">
      {myNotesProp.map(({id, title, category, description}) => (
        <div 
          key={id}
          className={`note ${id === selectedNoteProp ? "note selected" : "note default"}`}>
          
          <h4 className="field">{title}</h4> 
          <div>                       
            <span className={category !== "" ? "tag" : ""}>{category !== "" ? `#${category}` : ""}</span>
          </div>
          
          <p className="field">{description.length > 80 ? `${description.substring(0, 80)}...` : description.substring(0, 80)}</p>
          
          <div className="noteButtons">
            <button 
              className="workshopButton" 
              title={t("Take idea to the Workshop")} 
              onClick={() => handleClick(id, title, category, description)}>
              {selectedNoteId === id ? t("in Workshop") : t("take to Workshop")}
            </button>
            <div className="editButtons">
              <button  className="btn-delete-note" title={t("Edit idea")} onClick={() => setSelectedNoteProp(id)}>
                <img src={edit} width="20px" alt="Edit idea"/>
              </button>
              <button className="btn-delete-note" title={t("Delete idea")} onClick={() => deleteNoteProp(id)}>
                <img src={trash} width="20px" alt="Delete idea"/>
              </button>
            </div>
          </div>
          

        </div>
      ))
    }
      
    </div>    
  </>

}

export default NotesList;