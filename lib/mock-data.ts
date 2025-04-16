import { Course } from "./types";

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Introdução ao React",
    description: "Aprenda os fundamentos do React e comece a criar aplicações web modernas.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    progress: 0,
    modules: [
      {
        id: "m1",
        title: "Fundamentos do React",
        lessons: [
          { id: "l1", title: "O que é React?", completed: false },
          { id: "l2", title: "Componentes e Props", completed: false },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "TypeScript Avançado",
    description: "Domine TypeScript e melhore a qualidade do seu código JavaScript.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60",
    progress: 30,
    modules: [
      {
        id: "m1",
        title: "Tipos Básicos",
        lessons: [
          { id: "l1", title: "Introdução aos Tipos", completed: true },
          { id: "l2", title: "Interfaces", completed: false },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Next.js na Prática",
    description: "Construa aplicações web escaláveis com Next.js e React.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60",
    progress: 60,
    modules: [
      {
        id: "m1",
        title: "Introdução ao Next.js",
        lessons: [
          { id: "l1", title: "Setup Inicial", completed: true },
          { id: "l2", title: "Roteamento", completed: true },
        ],
      },
    ],
  },
];