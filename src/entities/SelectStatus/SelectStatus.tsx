import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { taskApi } from "../../app/services/TasksService";
import { SelectStatusProps } from "./interface";
import { statusApi } from "../../app/services/StatusService";

export default function SelectStatus({
    title,
    description,
    status,
    id,
}: SelectStatusProps) {
    const [statuses, setStatuses] = React.useState(status.id);
    const [setStatusFn] = taskApi.useSetStatusMutation();
    const { data: statusData } = statusApi.useGetStatusQuery();

    const handleChange = (event: SelectChangeEvent) => {
        setStatuses(Number(event.target.value));
        setStatusFn({
            title,
            description,
            id,
            status_id: Number(event.target.value),
        });
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={String(statuses)}
                    label="Age"
                    onChange={handleChange}
                >
                    {statusData?.map((status) => (
                        <MenuItem value={status.id}>{status.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
