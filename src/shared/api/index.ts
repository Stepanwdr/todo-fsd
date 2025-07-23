import { delay } from "../lib";
import type { Task } from "../types";

// В реальном проекте тут можно реализовать типо baseApi использованием --Axios-инстанс--
// const baseApi  = axios.create({
//   baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3001',
//   timeout: 10000,
// });
//
// // добавляем токен (пример)
// baseApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });


// --- localStorage-реализация (для demo) ---
export const taskApi = {
  getTasks: async (): Promise<Task[]> => {
    await delay(700);
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  },
  createTask: async (text: string): Promise<Task> => {
    await delay(600);
    const tasks = await taskApi.getTasks();
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    return newTask;
  },
  updateTask: async (updated: Task): Promise<Task> => {
    await delay(500);
    const tasks = await taskApi.getTasks();
    const next = tasks.map((task) => (task.id === updated.id ? updated : task));
    localStorage.setItem("tasks", JSON.stringify(next));
    return updated;
  },
  deleteTask: async (id: string): Promise<void> => {
    await delay(500);
    const tasks = await taskApi.getTasks();
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((t) => t.id !== id))
    );
  },
};
