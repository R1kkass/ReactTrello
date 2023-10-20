import Button from "@mui/material/Button";
import { ChangeEvent, FC, useState } from "react";
import { SetTaskProps } from "./interface";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack, Typography } from "@mui/material";
import { taskApi } from "../../app/services/TasksService";

const SetDescription: FC<SetTaskProps> = ({
    id,
    description,
    status_id,
    title,
}) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [descriptions, setDescriptions] = useState<string>(description);

    const [setDescription] = taskApi.useSetStatusMutation();

    return (
        <>
            {!visible ? (
                <>
                    <Typography variant="h6">Описание</Typography>
                    <Button variant="outlined" onClick={() => setVisible(true)}>
                        Изменить
                    </Button>
                </>
            ) : (
                <Stack spacing={2}>
                    <TextField
                        onInput={(e: ChangeEvent<HTMLInputElement>) =>
                            setDescriptions(e.target.value)
                        }
                        defaultValue={descriptions}
                        id="outlined-basic"
                        label="Описание"
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
                                setDescription({
                                    id,
                                    description: descriptions,
                                    title,
                                    status_id,
                                })
                            }
                            variant="contained"
                        >
                            Изменить
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

export default SetDescription;
