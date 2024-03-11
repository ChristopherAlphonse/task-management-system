import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { getColors } from "../utils/getColors";

interface Tag {
  title: string;
  bg: string;
  text: string;
}

interface ColumnsData {
  id: string;
  title: string;
  description: string;
  priority: string;
  deadline: number;
  image: string;
  alt: string;
  tags: Tag[];
}

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddTask: (taskData: ColumnsData) => void;
}

const AddModal = ({
  isOpen,
  onClose,
  setOpen,
  handleAddTask,
}: AddModalProps) => {
  const initialTaskData: ColumnsData = {
    id: uuidv4(),
    title: "",
    description: "",
    priority: "",
    deadline: 0,
    image: "",
    alt: "",
    tags: [],
  };

  const [taskData, setTaskData] = useState<ColumnsData>(initialTaskData);
  const [tagTitle, setTagTitle] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [submitButtonColor, setSubmitButtonColor] = useState(
    "bg-gray-400 text-gray-800",
  );

  useEffect(() => {
    const isAnyFieldEmpty =
      taskData.title === "" ||
      taskData.description === "" ||
      taskData.priority === "" ||
      taskData.deadline === 0;

    setIsSubmitDisabled(isAnyFieldEmpty);
    setSubmitButtonColor(
      isAnyFieldEmpty
        ? "bg-gray-400 text-gray-800"
        : "bg-orange-400 text-blue-50",
    );
  }, [taskData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleAddTag = () => {
    if (tagTitle.trim() !== "") {
      const { bg, text } = getColors();
      const newTag: Tag = { title: tagTitle.trim(), bg, text };
      setTaskData({ ...taskData, tags: [...taskData.tags, newTag] });
      setTagTitle("");
    }
  };

  const closeModal = () => {
    setOpen(false);
    onClose();
    setTaskData(initialTaskData);
  };

  const handleSubmit = () => {
    handleAddTask(taskData);
    closeModal();
  };

  return (
    <div
      className={`w-screen h-screen place-items-center fixed top-0 left-0 ${
        isOpen ? "grid" : "hidden"
      }`}
    >
      <div
        className="w-full h-full bg-black opacity-70 absolute left-0 top-0 z-20"
        onClick={closeModal}
      ></div>
      <form className="md:w-[30vw] w-[90%] bg-white rounded-lg shadow-md z-50 flex flex-col items-center gap-3 px-5 py-6">
        <input
          required
          type="text"
          name="title"
          value={taskData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
        />
        <input
          required
          type="text"
          name="description"
          value={taskData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
        />
        <select
          name="priority"
          onChange={handleChange}
          value={taskData.priority}
          className="w-full h-12 px-2 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
        >
          <option value="">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          required
          type="number"
          name="deadline"
          value={taskData.deadline}
          onChange={handleChange}
          placeholder="Deadline"
          className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
        />
        <label htmlFor="tagTitle">Tag Title:</label>
        <input
          type="text"
          id="tagTitle"
          value={tagTitle}
          onChange={(e) => setTagTitle(e.target.value)}
          placeholder="Tag Title"
          className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
        />
        <button
          className="w-full rounded-md h-9 bg-slate-500 text-amber-50 font-medium"
          onClick={handleAddTag}
        >
          Add Tag
        </button>
        <div className="w-full">
          {taskData.tags.length > 0 && <span>Tags:</span>}
          {taskData.tags.map((tag, index) => (
            <div
              key={index}
              className="inline-block mx-1 px-[10px] py-[2px] text-[13px] font-medium rounded-md"
              style={{ backgroundColor: tag.bg, color: tag.text }}
            >
              {tag.title}
            </div>
          ))}
        </div>
        <div className="w-full flex items-center gap-4 justify-between">
          <input
            type="text"
            name="alt"
            value={taskData.alt}
            onChange={handleChange}
            placeholder="Image Alt"
            className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
          />
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <button
          className={`w-full mt-3 rounded-md h-9 font-medium ${submitButtonColor}`}
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Submit Task
        </button>
      </form>
    </div>
  );
};

export default AddModal;
