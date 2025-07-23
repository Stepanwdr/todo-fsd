import { useMutation, useQueryClient } from '@tanstack/react-query';
import { taskApi } from 'entities/task';
import { toast } from 'react-toastify';

interface HookOptions {
  cb: () => void
}

export const useAddTask = (options:HookOptions) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (text: string) => taskApi.createTask(text),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Задача добавлена!');
      options.cb()
    },
    onError: () => toast.error('Не удалось добавить задачу'),
  });
};