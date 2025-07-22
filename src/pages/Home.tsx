import { type FC, useState } from "react";
import { Container, Typography, Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import type { TaskFilter } from "shared/types/task";
import { TaskListWidget } from "widgets/task-list";
import { AddTaskWidget } from "widgets/add-task";

const Home: FC = () => {
  const [filter, setFilter] = useState<TaskFilter>("all");

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
    <Container maxWidth="md">
      <Box py={4}>
        <Typography variant="h4" gutterBottom>
          Список задач
        </Typography>
        <AddTaskWidget />
        <ToggleButtonGroup
          exclusive
          value={filter}
          onChange={(_, value) => value && setFilter(value)}
          sx={{ mb: 2 }}
        >
          <ToggleButton value="all">Все</ToggleButton>
          <ToggleButton value="active">Активные</ToggleButton>
          <ToggleButton value="completed">Выполненные</ToggleButton>
        </ToggleButtonGroup>
        <TaskListWidget filter={filter} />
      </Box>
    </Container>
    </Box>
  );
};

export default Home;