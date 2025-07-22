import { FC } from "react";
import { Checkbox } from "@mui/material";
import type { Task } from "shared/types/task";
import { useUpdateTaskMutation } from "entities/task/hooks";

interface Props {
  task: Task;
}

export const ToggleTaskCheckbox: FC<Props> = ({ task }) => {
  const { mutate,isPending } = useUpdateTaskMutation();
  return (
    <Checkbox
      checked={task.completed}
      onChange={() =>
        mutate({ ...task, completed: !task.completed })
      }
      disabled={isPending}
    />
  );
};