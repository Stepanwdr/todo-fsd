import  { FC, useState } from "react";
import { TextField, IconButton, Stack } from "@mui/material";
import { Save, Cancel } from "@mui/icons-material";
import { Task } from "shared/types/task";
import { useUpdateTaskMutation } from "widgets/task-list";

interface Props {
  task: Task;
  onClose: () => void;
}

export const TaskEditor: FC<Props> = ({ task, onClose }) => {
  const [text, setText] = useState(task.text);
  const { mutate, isPending } = useUpdateTaskMutation();

  const save = () => {
    if (!text.trim()) return;
    mutate({ ...task, text }, { onSuccess: onClose });
  };

  return (
    <Stack direction="row" gap={1} width="100%">
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="small"
        fullWidth
        autoFocus
        onKeyDown={(e) => e.key === "Enter" && save()}
      />
      <IconButton onClick={save} color="success">
        <Save />
      </IconButton>
      <IconButton onClick={onClose}>
        <Cancel />
      </IconButton>
    </Stack>
  );
};