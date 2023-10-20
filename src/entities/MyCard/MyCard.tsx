import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import Chip from "@mui/material/Chip";
import MyDialog from "../../shared/MyDialog/MyDialog";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { TaskData } from "../../app/services/interface";

const MyCard: FC<TaskData> = ({
    title,
    actions,
    tags_keys,
    description,
    id,
    status,
    date
}) => {
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(p=>!p);
    };

    const handleClose = () => {
        setOpen(p=>!p);
    };

    return (
        <Card
            sx={{
                width: 275,
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": { background: "lightgray" },
            }}
            onClick={handleClickOpen}
        >
            <CardContent>
                {tags_keys?.map((tag) => (
                    <Chip
                        key={tag.id}
                        style={{ width: 70, height: 10, marginRight: 10 }}
                        color={tag.tags.color}
                        size="small"
                    />
                ))}
                <Typography
                    sx={{ fontSize: 30 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography variant="body2">
                    <CheckIcon />{" "}
                    {actions?.filter((action) => action.status == 1).length} /{" "}
                    {actions?.length}
                </Typography>
                <Typography>
                    {date}
                </Typography>
            </CardContent>
            <CardActions>
                <MyDialog
                    status={status}
                    id={id}
                    actions={actions}
                    tags_keys={tags_keys}
                    description={description}
                    title={title}
                    open={open}
                    onCloses={handleClose}
                />
            </CardActions>
        </Card>
    );
};

export default MyCard;
