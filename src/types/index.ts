export type TaskT = {
  id: string;
  priority: string;
  title: string;
  description: string;
  deadline: number;
  image?: string;
  alt?: string;
  tags: {
    title: string;
    bg: string;
    text: string;
  }[];
};

type Column = {
  name: string;
  items: TaskT[];
};

export type Columns = {
  [key: string]: Column;
};
