import  { type FC, useState } from "react";
import { ListItem, ListItemText } from "@mui/material";

import { Task } from "shared/types/task";
import { ToggleTaskCheckbox } from "features/toggle-task";
import { EditButton, TaskEditor } from "features/edit-task";
import { RemoveTaskButton } from "features/remove-task/ui/RemoveTaskButton";

interface Props {
  task: Task;
}

export const TaskItem: FC<Props> = ({ task }) => {
  const [edit, setEdit] = useState(false);

  return (
    <ListItem divider>
      {edit ? (
        <TaskEditor task={task} onClose={() => setEdit(false)} />
      ) : (
        <>
          <ToggleTaskCheckbox task={task} />
          <ListItemText
            primary={task.text}
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          />
          <RemoveTaskButton taskId={task.id} />
          <EditButton onClick={() => setEdit(true)} />
        </>
      )}
    </ListItem>
  );
};