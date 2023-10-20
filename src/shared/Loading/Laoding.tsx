import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
    return (
        <div>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: 9999,
                }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
