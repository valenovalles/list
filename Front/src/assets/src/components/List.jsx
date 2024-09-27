import React, { useState } from 'react';

function List({ task }) {
  const [clickedItems, setClickedItems] = useState({});

  function handleClick(index) {
    // Cambia el estado del item clickeado (tacha o destacha)
    setClickedItems({
      ...clickedItems,
      [index]: !clickedItems[index]
    });
  }

  return (
    <div>
      <h2>Mis tareas</h2>
      <ul className='ppal__list'>
        {task.map((singleTask, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={clickedItems[index] ? "list__item clicked" : "list__item"}
          >
            {singleTask}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
