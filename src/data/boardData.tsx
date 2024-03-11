import { v4 as uuidv4 } from "uuid";
import { getColors } from "../components/utils/getColors";
import { Columns } from "../types";

export const boardData: Columns = {
  backlog: {
    name: "Backlog",
    items: [
      {
        id: uuidv4(),
        title: "UI/UX Refinement for Mobile App",
        description:
          "Conduct a thorough review of the mobile application's user interface and user experience. ",
        priority: "low",
        deadline: 50,

        alt: "Task 2 image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
    ],
  },
  pending: {
    name: "Pending",
    items: [
      {
        id: uuidv4(),
        title: "optimization of database indexing",
        description:
          "optimize database indexing strategies in the admin panel backend to improve query performance ",
        priority: "low",
        deadline: 50,

        alt: "Task 4 image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
    ],
  },
  todo: {
    name: "To Do",
    items: [
      {
        id: uuidv4(),
        title: "implementation of user profile feature",
        description:
          "develop UI components for profile editing, avatar uploads, and other profile-related functionalities.",
        priority: "medium",
        deadline: 50,

        alt: "task image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
    ],
  },
  doing: {
    name: "Doing",
    items: [
      {
        id: uuidv4(),
        title: "refactoring of authentication service",
        description:
          " optimize authentication workflows, update dependencies, and ensure adherence to coding standards for robust authentication functionality.",
        priority: "low",
        deadline: 50,
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
    ],
  },
  done: {
    name: "Done",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "high",
        deadline: 50,

        alt: "task image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
    ],
  },
};
