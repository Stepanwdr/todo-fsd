import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { taskApi } from "entities/task";
import { toast } from "react-toastify";


export const useTasksQuery = () =>
  useQuery({ queryKey: ["tasks"], queryFn: taskApi.getTasks });

export const useDeleteTaskMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: taskApi.deleteTask,
    onSuccess:async () => {
     await qc.invalidateQueries({queryKey: ["tasks"]})
      toast.success('Задача успешно удалено!');
    }
  });
};

export const useUpdateTaskMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: taskApi.updateTask,
    onSuccess: async ({completed}) => {
      const tab = completed ? 'Выполненный' : 'Активный'
      await qc.invalidateQueries({queryKey: ["tasks"]})
      toast.success(`Статус задачи обновлён на "${tab}"`);
    },
  });
};