import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

const backendItems = [
    { id: uuidv4(), content: "Task" },
    { id: uuidv4(), content: "Tesk" },
]

const backendColumns = {
    [uuidv4()]: {
        name: "Backlog",
        items: backendItems
    },
    [uuidv4()]: {
        name: "Work In Progress",
        items: []
    },
    [uuidv4()]: {
        name: "In Review",
        items: []
    },
    [uuidv4()]: {
        name: "Completed",
        items: [],
    },
    [uuidv4()]: {
        name: "On hold",
        items: [],
    }
}

function Board() {
    const [columns, setColumns] = useState(backendColumns);
    return (
        <div style={{ display: "flex", justifyContent: "center", height: '100%' }}>
            Board
            <DragDropContext
                onDragEnd={result => console.log(result)}
            >
                {Object.entries(columns).map(([id, column]) => {
                    return (
                        <Droppable droppableId={id} key={id}>
                            {(provided, snapshot) => {
                                return (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                            padding: 4,
                                            width: 250,
                                            minHeight: 500
                                        }}
                                    >
                                       {column.items.map((item, index) => {
                                           return(
                                               <Draggable key={item.id} draggableId={item.id} index={index}>
                                                   {(provided, snapshot) => {
                                                       return(
                                                           <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                userSelect: 'none',
                                                                padding: 16,
                                                                margin: '0 0 8px 9',
                                                                minHeight: '50px',
                                                                backgroundColor: snapshot.isDragging
                                                                ? "#263B4A"
                                                                : "#456C86",
                                                                color: "white",
                                                                ...provided.draggableProps.style
                                                            }}>

                                                           </div>
                                                       )
                                                   }}
                                               </Draggable>
                                           )
                                       })}
                                       {provided.placeholder}
                                    </div>
                                )
                            }}
                        </Droppable>
                    )
                })}

            </DragDropContext>
        </div>
    )
}

export default Board
