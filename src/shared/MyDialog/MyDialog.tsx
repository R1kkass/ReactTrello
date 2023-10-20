import Dialog from "@mui/material/Dialog";
import {
    Box,
    Button,
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import { taskApi } from "../../app/services/TasksService";
import Close from "@mui/icons-material/Close";
import SelectStatus from "../../entities/SelectStatus/SelectStatus";
import AddAction from "../../entities/AddAction/AddAction";
import Loading from "../Loading/Laoding";
import SetDescription from "../../entities/SetDescription/SetDescription";
import DeleteButton from "../../entities/DeleteButton/DeleteButton";
import SetTags from "../../entities/SetTags/SetTags";
import MyChip from "../../entities/Chip/Chip";
import { TaskData } from "../../app/services/interface";

export interface SimpleDialogProps extends Omit<TaskData, 'date'> {
    open: boolean;
    onCloses: () => void;
    status: {
        name: string;
        id: number;
    };
}

function MyDialog(props: SimpleDialogProps) {
    const {
        onCloses,
        open,
        title,
        description,
        actions,
        tags_keys,
        id,
        status,
    } = props;

    const handleClose = () => {
        onCloses();
    };

    const [setAction, { isLoading }] = taskApi.useSetStatusActionMutation();
    const [deleteAction, { isLoading: loading }] =
        taskApi.useDeleteActionMutation();

    return (
        <>
            <Dialog
                style={{ padding: 10 }}
                fullWidth
                onClose={onCloses}
                onClick={handleClose}
                open={open}
            >
                <Stack
                    style={{
                        padding: 20,
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography variant="h4">{title}</Typography>
                        <DeleteButton id={id} />
                    </Box>
                    <SelectStatus
                        status={status}
                        title={title}
                        description={description}
                        id={id}
                    />
                    <Box sx={{ p: 2, border: "1px dashed grey" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h6">Метки</Typography>
                            <SetTags id={id} />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {tags_keys?.map((tag) => (
                                <MyChip id={tag.id} key={tag.id} color={tag.tags.color} name={tag.tags.name}/>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ p: 2, border: "1px dashed grey" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: 2,
                            }}
                        >
                            <SetDescription
                                title={title}
                                description={description}
                                status_id={status.id}
                                id={id}
                            />
                        </Box>
                        <Typography variant="h6">{description}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            p: 2,
                            border: "1px dashed grey",
                        }}
                    >
                        <AddAction id={id} />
                    </Box>

                    <List>
                        {actions?.map((action) => (
                            <ListItem disablePadding key={action.id}>
                                <ListItemButton>
                                    <ListItemText
                                        primary={action.descriptions}
                                    />
                                    <Checkbox
                                        onClick={() =>
                                            setAction({
                                                id: action.id,
                                                descriptions:
                                                    action.descriptions,
                                                status: !Boolean(action.status),
                                            })
                                        }
                                        defaultChecked={Boolean(action?.status)}
                                    />
                                    <Button
                                        onClick={() => deleteAction(action.id)}
                                    >
                                        <Close />
                                    </Button>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            </Dialog>
            {isLoading || loading ? <Loading /> : null}
        </>
    );
}

export default MyDialog;
