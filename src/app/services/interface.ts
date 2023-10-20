export interface IData<T> {
    data: { data: T };
}

export interface TaskData {
    id: number;
    title: string;
    description: string;
    date: number;
    status: {
        id: number;
        name: string;
    };
    actions: [
        {
            id: number;
            descriptions: string;
            status: number;
        }
    ];
    tags_keys: [
        {
            id: number;
            tags: {
                name: string;
                color:
                    | "default"
                    | "primary"
                    | "secondary"
                    | "error"
                    | "info"
                    | "success"
                    | "warning";
            };
        }
    ];
}
