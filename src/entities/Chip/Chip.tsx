import { Box } from "@mui/material";
import Close from "@mui/icons-material/Close";
import { FC } from "react";
import { ChipProps } from "./interface";
import Chip from "@mui/material/Chip";
import { taskApi } from "../../app/services/TasksService";
import Loading from "../../shared/Loading/Laoding";

const MyChip: FC<ChipProps> = ({ color, name, id }) => {
    const [deleteChip, {isLoading}] = taskApi.useDeleteTagMutation();

    return (
        <>
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <Close onClick={() => deleteChip(id)} />
            <Chip
                key={id}
                label={name}
                style={{
                    width: 70,
                    height: 20,
                    marginRight: 10,
                }}
                color={color}
                size="medium"
            />
        </Box>
        {isLoading && <Loading/>}
        </>
    );
};

export default MyChip;
