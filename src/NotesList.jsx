
import trash from "./assets/trash-can.png"

const NotesList = ({myNotesProp, deleteNoteProp, selectedNoteProp, setSelectedNoteProp}) => {

  return <>

    <div className="wrapper">
      {myNotesProp.map(({id, title, description}) => (
        <div 
          key={id}
          className={`note ${id === selectedNoteProp ? "note selected" : "note default"}`}
          onClick={() => setSelectedNoteProp(id)}>
          <h4 className="field">{title}</h4>
          <p className="field">{description.length > 80 ? `${description.substring(0, 80)}...` : description.substring(0, 80)}</p>
          
          <button className="btn-delete-note" onClick={() => deleteNoteProp(id)}>
            <img src={trash} width="20px" alt="Delete note"/>
          </button>
        </div>
      ))
    }
      
    </div>    
  </>

}

export default NotesList;