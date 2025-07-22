import { FC } from "react";
import {Box, CircularProgress, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import type { TaskFilter } from "shared/types/task";
import { TaskItem } from "entities/task";
import { useTasksQuery } from "entities/task/hooks";

interface Props {
  filter: TaskFilter;
}

export const TaskListWidget: FC<Props> = ({ filter }) => {
  const { data, isLoading, error } = useTasksQuery();

  if (isLoading) return <Box justifyContent={"center"}><CircularProgress /></Box>;
  if (error) return <Typography color="error">Ошибка загрузки</Typography>;

  const filtered =
    data?.filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    }) ?? [];

  return (
    <motion.div
      style={{
        flexGrow: 1,
        maxHeight:"400px",
        overflowY: "auto",
        overflowX: "hidden"
    }}
      initial={false}
    >
      <AnimatePresence>
        {filtered.map((task) => (
          <motion.div
            key={task.id}
            layout
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, x: -40, height: 0, transition: { duration: 0.1 } }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <TaskItem task={task} />
          </motion.div>
        ))}

        {!filtered.length && <motion.div
          layout
          initial={{opacity: 0, y: -20, height: 0}}
          animate={{opacity: 1, y: 0, height: "auto"}}
          exit={{opacity: 0, x: -40, height: 0, transition: {duration: 0.1}}}
          transition={{duration: 0.1, ease: "easeInOut"}}
        >
        Список пуст
        </motion.div>}
      </AnimatePresence>
    </motion.div>
  );
};