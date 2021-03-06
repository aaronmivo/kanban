//@ts-nocheck
import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import ListItemCustom from '../ListItemCustom/ListItemCustom'
import TaskModal from '../TaskModal/TaskModal';
import './Column.css'

import { Divider } from '@chakra-ui/layout'

const Column = ({ column, add }: any) => {

  return (
    <div

    >
      
      <div>{column.title}</div>
      <TaskModal title={column.title} add={add} column={column}/> 
      <Divider/>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div className="column"
          ref={provided.innerRef}       
          style={{
            backgroundColor: '#EBEDF3',
            margin: 10,
            padding: 20,
            color: 'white',
            minHeight: '70vh',
            width: "20vw",
          }}>
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
