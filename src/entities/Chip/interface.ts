export interface ChipProps {
    id: number;
    name: string;
    color:
        | "default"
        | "primary"
        | "secondary"
        | "error"
        | "info"
        | "success"
        | "warning";
}
