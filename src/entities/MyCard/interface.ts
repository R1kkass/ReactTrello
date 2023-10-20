import { TaskData } from "../../app/services/interface";

export interface MyCardProps extends TaskData {
    status: {
        id: number;
        name: string;
    };
}
