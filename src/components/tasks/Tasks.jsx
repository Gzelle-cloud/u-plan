import { useTranslation } from "react-i18next";
import check from "../../assets/check.png";
import completed from "../../assets/completed.png";
import Swal from 'sweetalert2';

import React, { useEffect, useState } from 'react';

function Tasks() {
  const [userInput, setUserInput] = useState('');
  const [toDoList, setToDoList] = useState(() => {
    return localStorage.getItem('toDoList') ? JSON.parse(localStorage.getItem('toDoList')) : [];
  });

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList))
  }, [toDoList])

  const { t } = useTranslation();

  const onChangeEvent = (input) => {
    setUserInput(input);
  };

  const addItem = (input) => {
    if (input === '') {
      Swal.fire({
        title: t('Please, enter your task'),
        confirmButtonColor: "#F3AA9A",
      });
    } else {
      const newItem = { text: input, completed: false };
      setToDoList((prevList) => [...prevList, newItem]);
      setUserInput('');
    }
  };

  const deleteItem = () => {
    setToDoList([]);
  };

  const crossWord = (index) => {
    setToDoList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}  className="tasks-block">
        <div>
          <p className="text">{t('Focus on what matters today')}</p>
          <div className="input-tasks-group">
            <input className="input"
              type="text"
              placeholder={t('Type here')}
              onChange={(e) => onChangeEvent(e.target.value)}
              value={userInput}
            />
            <button 
              type="button"
              onClick={() => addItem(userInput)}
              className="btn btn-add-task"
            >
              {t('ADD')}
            </button>
          </div>
        </div>

        <ul>
          {toDoList.map((item, index) => (
            <li
              key={index}
              onClick={() => crossWord(index)}
              className={item.completed ? 'crossed' : ''}
              title="Click to mark this task completed"
            >
              <img
                src={item.completed ? completed : check}
                width="10px"
                alt="check-mark"
              />
              <span> </span>
              {item.text}
            </li>
          ))}
        </ul>

        <div >
          <button
            type="button"
            onClick={deleteItem}
            className="btn btn-delete-task"
          >
            {t('DELETE ALL')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Tasks;
