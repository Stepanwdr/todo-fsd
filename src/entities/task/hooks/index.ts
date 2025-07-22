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
    },
    onError:()=>{
      toast('Ошибка при удаление')
    }
  });
};

export const useUpdateTaskMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: taskApi.updateTask,
    onSuccess: () => {
      qc.invalidateQueries({queryKey: ["tasks"]})
      toast.success('Задача успешно обновлена!');
    },
  });
};