//@ts-nocheck
import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import ListItemCustom from '../ListItemCustom/ListItemCustom'

const Column = ({ column }: any) => {
  return (
    <div
      style={{
        backgroundColor: 'gray',
        margin: 10,
        padding: 20,
        color: 'white',
        minheight: 400,
        width: 250,
      }}
    >
      <div>{column.id}</div>  
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div ref={provided.innerRef}>
            <div>
              {column.list.map((itemObject, index) => {
                return <ListItemCustom index={index} itemObject={itemObject} />
              })}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column
