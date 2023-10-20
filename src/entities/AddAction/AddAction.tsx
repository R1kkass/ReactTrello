import Button from "@mui/material/Button";
import { ChangeEvent, FC, useState } from "react";
import { AddTaskProps } from "./interface";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack, Typography } from "@mui/material";
import { taskApi } from "../../app/services/TasksService";
import Loading from "../../shared/Loading/Laoding";

const AddAction: FC<AddTaskProps> = ({ id }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [title, setTitle] = useState("");

    const [addMutation, { isLoading }] = taskApi.useAddActionMutation();

    return (
        <>
            {isLoading && <Loading />}

            {!visible ? (
                <>
                    <Typography variant="h6">Действия</Typography>

                    <Button variant="outlined" onClick={() => setVisible(true)}>
                        Добавить
                    </Button>
                </>
            ) : (
                <Stack spacing={2}>
                    <TextField
                        onInput={(e: ChangeEvent<HTMLInputElement>) =>
                            setTitle(e.target.value)
                        }
                        id="outlined-basic"
                        label="Действие"
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
                                addMutation({
                                    task_id: id,
                                    descriptions: title,
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

export default AddAction;
