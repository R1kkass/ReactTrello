import "./Main.scss";
import MyCard from "../../entities/MyCard/MyCard";
import AddTask from "../../entities/AddTask/AddTask";
import { taskApi } from "../../app/services/TasksService";
import { statusApi } from "../../app/services/StatusService";

const Main = () => {
    const { data: tasks } = taskApi.useGetTasksQuery();

    const { data: statuses } = statusApi.useGetStatusQuery();

    return (
        <div className="Main">
            {statuses?.map((status) => (
                <div className="Main__column" key={status.id}>
                    <h1>{status.name}</h1>
                    {tasks?.map(
                        (task) =>
                            task.status.name == status.name && (
                                <MyCard
                                    date={task.date}
                                    status={task.status}
                                    id={task.id}
                                    key={task.id}
                                    tags_keys={task.tags_keys}
                                    actions={task.actions}
                                    title={task.title}
                                    description={task.description}
                                />
                            )
                    )}
                    <AddTask status={status.id} />
                </div>
            ))}
        </div>
    );
};

export default Main;
