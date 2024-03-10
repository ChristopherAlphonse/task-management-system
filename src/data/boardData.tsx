import { v4 as uuidv4 } from "uuid";
import taskImage1 from "../assets/images/task1.jpg";
import taskImage2 from "../assets/images/task2.jpg";
import taskImage3 from "../assets/images/task3.jpg";
import taskImage4 from "../assets/images/task4.jpg";
import taskImage5 from "../assets/images/task5.jpg";
import taskImage6 from "../assets/images/task6.jpg";
import taskImage7 from "../assets/images/task7.jpg";
import taskImage8 from "../assets/images/task8.jpg";
import { getColors } from "../components/utils/getColors";
import { Columns } from "../types";

export const boardData: Columns = {
  backlog: {
    name: "Backlog",
    items: [
      {
        id: uuidv4(),
        title: "Bug Fixing for User Authentication",
        description:
          "Identify and resolve issues related to user authentication, including login, registration, and password reset functionalities. Ensure seamless user experience and robust security measures.",
        priority: "medium",
        deadline: 50,
        image: taskImage1,
        alt: "Task 1 image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Feature Enhancement: Dashboard Metrics",
        description:
          "Implement additional metrics and data visualization tools on the dashboard to provide users with comprehensive insights into their performance metrics. Enhance user engagement and decision-making capabilities.",
        priority: "low",
        deadline: 50,
        image: taskImage2,
        alt: "Task 2 image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Performance Optimization for Database Queries",
        description:
          "Optimize database queries and improve data retrieval performance to enhance overall system responsiveness and scalability. Identify and eliminate bottlenecks to ensure efficient data processing and user satisfaction.",
        priority: "low",
        deadline: 50,
        image: taskImage8,
        alt: "Task 2 image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "UI/UX Refinement for Mobile App",
        description:
          "Conduct a thorough review of the mobile application's user interface and user experience. Refine UI elements, streamline navigation flows, and enhance overall usability to deliver an intuitive and visually appealing mobile experience.",
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
        title: "integration of payment gateway",
        description:
          "integrate a secure payment gateway into the admin panel backend to facilitate online transactions. implement necessary apis and ensure seamless communication between the payment gateway and the application for smooth transaction processing.",
        priority: "high",
        deadline: 50,
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "enhancement of user permission system",
        description:
          "enhance the user permission system in the admin panel backend to provide granular control over user access rights. implement role-based access control (rbac) mechanisms and refine permission settings to ensure data security and compliance.",
        priority: "low",
        deadline: 50,
        image: taskImage1,
        alt: "task image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "implementation of automated testing suite",
        description:
          "implement an automated testing suite for the admin panel backend to streamline the testing process and improve code quality. develop comprehensive test cases and integrate testing tools to automate regression, unit, and integration testing.",
        priority: "high",
        deadline: 50,
        image: taskImage3,
        alt: "Task 3 image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "optimization of database indexing",
        description:
          "optimize database indexing strategies in the admin panel backend to improve query performance and reduce latency. analyze database query patterns, identify inefficient queries, and implement appropriate indexing techniques to enhance overall system responsiveness.",
        priority: "low",
        deadline: 50,
        image: taskImage4,
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
          "implement the user profile feature in the admin panel frontend to allow users to view and manage their personal information. develop UI components for profile editing, avatar uploads, and other profile-related functionalities.",
        priority: "medium",
        deadline: 50,
        image: taskImage2,
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
          "refactor the authentication service in the admin panel backend to improve code maintainability and scalability. optimize authentication workflows, update dependencies, and ensure adherence to coding standards for robust authentication functionality.",
        priority: "low",
        deadline: 50,
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Back-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "medium",
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
        image: taskImage1,
        alt: "task image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "high",
        deadline: 50,
        image: taskImage5,
        alt: "task image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "high",
        deadline: 50,
        image: taskImage6,
        alt: "task image",
        tags: [
          { title: "Test", ...getColors() },
          { title: "Front", ...getColors() },
        ],
      },
    ],
  },
};
