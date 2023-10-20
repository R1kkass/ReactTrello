import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { tagApi } from "../../app/services/TagService";
import { taskApi } from "../../app/services/TasksService";
import Loading from "../../shared/Loading/Laoding";

interface SetTagsProps {
    id: number;
}

export default function SetTags({ id }: SetTagsProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [addTags, { isLoading }] = taskApi.useAddTagsMutation();

    const { data: tags } = tagApi.useGetStatusQuery();

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                +
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {tags?.map((tag) => (
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            addTags({ tag_id: tag.id, task_id: id });
                        }}
                    >
                        {tag.name}
                    </MenuItem>
                ))}
            </Menu>
            {isLoading && <Loading />}
        </div>
    );
}
