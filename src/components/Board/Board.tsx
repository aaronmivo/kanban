//@ts-nocheck
import React, { useState } from 'react'
import { DragDropContext} from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

import Column from '../Column/Column.tsx'


const Board = () => {
    const initialColumns = {
        todo: {
          id: "todo",
          list: [
            { id: uuidv4(), text: "text1" },
            { id: uuidv4(), text: "text2" },
            { id: uuidv4(), text: "text3" }
          ]
        },
        inprogress: {
          id: "inprogress",
          list: [
            { id: uuidv4(), text: "text4" },
            { id: uuidv4(), text: "text5" },
            { id: uuidv4(), text: "text6" }
          ]
        },
        completed: {
          id: "completed",
          list: []
        },
        onhold: {
            id: "onhold",
            list:[]
        },
      };

const [columns, setColumns] = useState(initialColumns)


const onDragEnd = ({ source, destination }) => {
    if (destination === undefined || destination === null) return null;

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    if (start === end) {

      console.log(start);
      const newList = start.list.filter((_, idx) => idx !== source.index);

      newList.splice(destination.index, 0, start.list[source.index]);

      const newCol = {
        id: start.id,
        list: newList
      };

      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {

      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      const newStartCol = {
        id: start.id,
        list: newStartList
      };
      const newEndList = end.list;

      newEndList.splice(destination.index, 0, start.list[source.index]);


      const newEndCol = {
        id: end.id,
        list: newEndList
      };

      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }));
      return null;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.values(columns).map((column) => {
          console.log(column)
          return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
              <Column column={column} key={column.id} />
            </div>
          )
        })}
      </DragDropContext>
    </div>
  )
}

export default Board
