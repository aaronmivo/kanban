import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './ListItemCustom.css';

const ListItemCustom = ({ itemObject, index }: any) => {
  return (
    <Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="task"
          key={itemObject.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: 'none',
            padding: 16,
            margin: '0 0 16px 0',
            minHeight: '50px',
            backgroundColor: "white",
            color: 'black',
            ...provided.draggableProps.style,
          }}
        >
          {itemObject.text}
        </div>
      )}
    </Draggable>
  )
}

export default ListItemCustom
