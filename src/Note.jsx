import { useTranslation } from "react-i18next";

const Note = ({addNoteProp, selectedNoteProp, updateNoteProp}) => {

  const { t } = useTranslation();

  const editNote = (myInput, value) => {
    
    updateNoteProp({
      ...selectedNoteProp,
      [myInput]: value
    })    
  }
  
  return(
    <>
      <div className="input-group">
        <button className="btn-add-note" onClick={addNoteProp}>{t('ADD IDEA')}</button>
      </div>

      <div className="input-group">
      {!selectedNoteProp ? (
        <p>{t('Add idea and click on it to edit')}</p>
        ) : (
        <div className="input-notes-group">
          <label>{t('Title')}</label>
          <input
            type="text"
            className="myInput note-input"
            id="title"
            value={selectedNoteProp.title}
            onChange={(e) => editNote("title", e.target.value)}
          />
          <label>{t('Description')}</label>
          <textarea
            type="text"
            className="note-input"
            value={selectedNoteProp.description}
            onChange={(e) => editNote("description", e.target.value)}
          />
        </div>
      )}
      </div>
      



    </>
  );
}

export default Note;