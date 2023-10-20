import Button from "@mui/material/Button";
import { ChangeEvent, FC, useState } from "react";
import { AddTaskProps } from "./interface";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack } from "@mui/material";
import { taskApi } from "../../app/services/TasksService";

const AddTask: FC<AddTaskProps> = ({ status }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [title, setTitle] = useState("");

    const [addTasks] = taskApi.useAddTasksMutation();

    return (
        <>
            {!visible ? (
                <Button onClick={() => setVisible(true)}>
                    + Добавить задачу
                </Button>
            ) : (
                <Stack spacing={2}>
                    <TextField
                        onInput={(e: ChangeEvent<HTMLInputElement>) =>
                            setTitle(e.target.value)
                        }
                        id="outlined-basic"
                        label="Задача"
                        variant="outlined"
                    />
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            onClick={() =>
                                addTasks({
                                    status_id: status,
                                    title,
                                })
                            }
                            variant="contained"
                        >
                            Добавить
                        </Button>
                        <Button onClick={() => setVisible(false)}>
                            <CloseIcon />
                        </Button>
                    </Box>
                </Stack>
            )}
        </>
    );
};

export default AddTask;
