export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}