import { Button } from "@mui/material";
import { taskApi } from "../../app/services/TasksService";
import { DeleteButtonProps } from "./interface";
import { FC } from "react";
import Loading from "../../shared/Loading/Laoding";

const DeleteButton: FC<DeleteButtonProps> = ({ id }) => {
    const [deleteTask, {isLoading}] = taskApi.useDeleteTaskMutation();

    return (
        <>
            <Button
                onClick={() => deleteTask(id)}
                variant="outlined"
                color="error"
            >
                Удалить
            </Button>
            {
                isLoading && <Loading/>
            }
        </>
    );
};

export default DeleteButton;
