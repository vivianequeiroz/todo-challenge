import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../App";
import { EmptyTaskList } from "./EmptyTaskList";
import { TaskList } from "./TaksList";
import styles from "./TaskInput.module.css";
import { TaskStatus } from "./TaskStatus";

const tasks: Task[] = [
  {
    id: 1,
    content: "Study react so I can perform better at work!",
    isFinished: true,
  },
  {
    id: 2,
    content: "Go to the gym",
    isFinished: false,
  },
  {
    id: 3,
    content: "Eat at every 3 hours",
    isFinished: false,
  },
];
export function TaskInput() {
  const [newInputTask, setNewInputTask] = useState("");
  const [tasksList, setNewTasksList] = useState(tasks);
  const [lastTaskId, setLastTaskId] = useState(tasks.slice(-1)[0].id);

  const isNewTaskInputEmpty = newInputTask.length === 0;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewInputTask(event.target.value);
  }

  function handleNewTaskCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNewInputTask("");

    const newTask = {
      id: lastTaskId + 1,
      content: newInputTask,
      isFinished: false,
    };

    setNewTasksList([...tasksList, newTask]);

    setLastTaskId((id) => {
      return id + 1;
    });
  }

  function getFinishedTasks(): number {
    const finishedTasks = tasksList.filter((task) => {
      return task.isFinished === true;
    });

    return finishedTasks.length;
  }

  function deleteTask(taskContentToDelete: string) {
    const tasksAfterDelete = tasksList.filter((task) => {
      return task.content !== taskContentToDelete;
    });

    setNewTasksList(tasksAfterDelete);
  }

  function updateTasksStatus(taskContent: string, isFinished: boolean) {
    const updatedTasks = tasksList.map((task) => {
      if (task.content === taskContent) {
        task.isFinished = isFinished;
      }
      return task;
    });

    setNewTasksList(updatedTasks);
  }

  return (
    <div>
      <form onSubmit={handleNewTaskCreate}>
        <div className={styles.taskWrapper}>
          <input
            value={newInputTask}
            onChange={handleNewTaskChange}
            className={styles.taskInput}
            placeholder="Add a new task"
          ></input>
          <button
            disabled={isNewTaskInputEmpty}
            type="submit"
            className={styles.taskButton}
          >
            Create
            <span>
              <PlusCircle size={18} />
            </span>
          </button>
        </div>
      </form>

      <div className={styles.taskStatusWrapper}>
        <TaskStatus
          createdTasks={tasksList.length}
          finishedTasks={getFinishedTasks()}
        />
      </div>
      {tasksList.length > 0 ? (
        <div>
          {tasksList.map((task) => {
            return (
              <TaskList
                content={task.content}
                key={task.id}
                onChangeTaskStatus={updateTasksStatus}
                onDeleteTask={deleteTask}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <EmptyTaskList />
        </div>
      )}
    </div>
  );
}
