import { v4 as uuidv4 } from "uuid";
import taskImage1 from "../assets/images/task1.jpg";
import taskImage7 from "../assets/images/task7.jpg";
import { getColors } from "../components/utils/getColors";
import { Columns } from "../types";

const now = new Date();
const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

export const boardData: Columns = {
  backlog: {
    name: "Backlog",
    items: [
      {
        id: uuidv4(),
        title: "Bug Fixing for User Authentication",
        description:
          "Identify and resolve issues related to user authentication, including login, registration, and password reset functionalities. ",
        priority: "medium",
        deadline: oneHourLater.getTime(),
        image: taskImage1,
        alt: "Task 1 image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },

      {
        id: uuidv4(),
        title: "UI/UX Refinement for Mobile App",
        description:
          "Conduct a thorough review of the mobile application's user interface and user experience. ",
        priority: "low",
        deadline: 50,
        image: taskImage7,
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
