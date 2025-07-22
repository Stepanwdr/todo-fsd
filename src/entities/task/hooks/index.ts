import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { taskApi } from "entities/task";
import { toast } from "react-toastify";


export const useTasksQuery = () =>
  useQuery({ queryKey: ["tasks"], queryFn: taskApi.getTasks });

export const useDeleteTaskMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: taskApi.deleteTask,
    onSuccess: () => {
      qc.invalidateQueries({queryKey: ["tasks"]})
      toast.success('Задача успешно удалено!');
    }
  });
};

export const useUpdateTaskMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: taskApi.updateTask,
    onSuccess: ({completed}) => {
      const tab = completed ? 'Выполненный' : 'Активный'
      qc.invalidateQueries({queryKey: ["tasks"]})
      toast.success(`Статус задачи обновлён на "${tab}"`);
    },
  });
};