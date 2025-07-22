import React from "react";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDeleteTaskMutation } from "entities/task/hooks";

interface Props {
  taskId: string;
}

export const RemoveTaskButton: React.FC<Props> = ({ taskId }) => {
  const { mutate , isPending } = useDeleteTaskMutation();
  return (
    <IconButton
      color="error"
      onClick={() => mutate(taskId)}
      disabled={isPending}
    >
      <Delete />
    </IconButton>
  );
};