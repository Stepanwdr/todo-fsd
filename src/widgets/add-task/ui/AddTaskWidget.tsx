import {FC, useState} from "react";
import { TextField, Button, Stack } from "@mui/material";

import { useAddTask } from "features/add-task";

export const AddTaskWidget: FC = () => {
  const [text, setText] = useState("");
  const { mutate, isPending } = useAddTask({ cb:() => setText('')})

  const handleAdd = () => {
    if (!text.trim()) return;
    mutate(text);
  } ;

  return (
    <Stack direction="row" gap={1} mb={2}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="small"
        fullWidth
        label="Новая задача"
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <Button
        variant="contained"
        onClick={handleAdd}
        disabled={isPending || !text.trim()}
      >
        Добавить
      </Button>
    </Stack>
  );
};