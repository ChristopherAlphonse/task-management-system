/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import AddModal from "../../components/Modals/Modal";
import Task from "../../components/Task";
import { onDragEnd } from "../../components/utils/onDragEnd";
import { boardData } from "../../data/boardData";
import { Columns } from "../../types";

const Home = () => {
  const [columns, setColumns] = useState<Columns>(boardData);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  const openModal = (columnId: any) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddTask = (taskData: any) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
  };

  return (
    <>
      <DragDropContext
        onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}
      >
        <div className="w-full   flex flex-wrap items-start justify-between px-5 pb-8 lg:gap-0 gap-5 ">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div
              className="w-full xl:w-1/6 lg:w-1/4 md:w-1/3 flex flex-col gap-4 mt-9 mr-1 "
              key={columnId}
            >
              <div className="w-full bg-slate-200 rounded-lg shadow-sm text-zinc-600 font-medium text-lg p-3 items-center flex justify-center uppercase tracking-widest">
                {column.name}
              </div>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col gap-4 items-center py-5 px-4 bg-gray-100 rounded-lg shadow-md mx-2"
                  >
                    {column.items.map((task: any, index: any) => (
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided: any) => (
                          <Task provided={provided} task={task} />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() => openModal(columnId)}
                className="w-full flex items-center justify-center py-3 bg-amber-500 text-white rounded-lg cursor-pointer hover:bg-amber-600 mt-0 transition duration-300 ease-in-out"
              >
                <IoAddOutline size={20} className="mr-2" />
                Add Task
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      <AddModal
        isOpen={modalOpen}
        onClose={closeModal}
        setOpen={setModalOpen}
        handleAddTask={handleAddTask}
      />
    </>
  );
};

export default Home;
