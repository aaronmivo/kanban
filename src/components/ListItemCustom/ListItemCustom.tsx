import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const ListItemCustom = ({ itemObject, index }: any) => {
  return (
    <Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
      {(provided, snapshot) => (
        <div
          key={itemObject.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: 'none',
            padding: 16,
            margin: '0 0 8px 0',
            minHeight: '50px',
            backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
            color: 'white',
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
