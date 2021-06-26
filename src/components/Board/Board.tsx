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
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      console.log(start);
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList
      };

      // Update the state
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
            <div>
              <Column column={column} key={column.id} />
            </div>
          )
        })}
      </DragDropContext>
    </div>
  )
}

export default Board
