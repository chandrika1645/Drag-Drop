import './App.css';
import Jobdetails from './Components/Jobdetails.js';
import Table from './Components/Table.js';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import { useState } from 'react';


const initialComponents = [
  { id: '1', component: <Jobdetails /> },
  { id: '2', component: <Table /> },
  
];

function App() {

  const [components, setComponents] = useState(initialComponents);

  const handleDragDrop =(results)=>{
    const {source, destination, type} = results;

    if(!destination) return;

    if(source.droppableId === destination.droppableId && source.index === destination.index) return;
    
    if(type === 'left-content'){

    const updatedComponents = [...components];
    const [removed] = updatedComponents.splice(source.index, 1);
    updatedComponents.splice(destination.index, 0, removed);

    setComponents(updatedComponents);

    
    }
  
  };

  return (
    

    <DragDropContext onDragEnd={handleDragDrop}>
      <div className='page'>
        <Droppable droppableId='Droppable1' type="left-content">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className='left-content'>
              <Draggable draggableId='1' index={0}>
                {(provided) => (
                  <div {...provided.dragHandleProps}{...provided.draggableProps} ref={provided.innerRef}>
                    <Jobdetails />
                  </div>
                )}
              </Draggable>

              <Draggable draggableId='2' index={1}>
                {(provided) => (
                  <div
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <Table />
                  </div>
                )}
              </Draggable>

              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId='Droppable2' type="left-content">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className='right-content'>
              
            </div>
          )}
        </Droppable>
        
      </div>
    </DragDropContext>
  );
}


export default App;
