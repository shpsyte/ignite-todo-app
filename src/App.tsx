import React from "react";

import Logo from "./assets/logo.svg";
import { Check, PlusCircle, TrashSimple } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useState, useRef, useEffect, ReactNode } from "react";
import clsx from "clsx";
import { Task } from "./components/Task";
import { TaskItem } from "./components/TaskItem";
import { NoTask } from "./components/NoTask";
import { TaskHeader } from "./components/Header";
interface TasksProps {
  done: boolean;
  description: string;
}

const STORAGE_KEY = "@todo:tasks";

function App() {
  const [task, setTask] = useState<TasksProps[]>(() => {
    const tasks = localStorage.getItem(STORAGE_KEY);

    if (tasks) {
      return JSON.parse(tasks) as TasksProps[];
    }

    return [] as TasksProps[];
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saveToLocalStorage = () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(task));
    };
    saveToLocalStorage();
  }, [task]);

  const addTask = (e: any) => {
    var newtask = inputRef.current?.value || "";
    if (newtask !== "") {
      setTask((task) => {
        return [...task, { description: newtask, done: false }];
      });
      inputRef.current!.value = "";
      inputRef.current?.focus();
    }
  };
  const deleteTask = (index: number) => {
    setTask((task) => {
      return task.filter((_, i) => i !== index);
    });
  };

  const toggleTask = (index: number) => {
    setTask((task) => {
      const tasks = task.map((task, i) => {
        if (i === index) {
          return { ...task, done: !task.done };
        }
        return task;
      });

      return tasks;
    });
  };

  const AddTask = () => {
    return (
      <div className="w-full flex gap-4 flex-wrap md:flex-nowrap ">
        <input
          ref={inputRef}
          type="text"
          placeholder="Adicionar Tarefa"
          className="w-full items-center p-4 gap-2 h-[54px] bg-gray-500 border-gray-700 border-solid border rounded-lg 
                    placeholder-gray-300 text-sm leading-[22px]
                    focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-transparent
                    transition duration-300 ease-in-out"
        />
        <button
          type="button"
          className="w-full md:w-[90px] h-[52px] flex justify-center items-center p-4 gap-2 bg-brand-200 rounded-lg
              text-gray-100 text-[14px] font-semibold leading-5
              hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-transparent
              transition duration-300 ease-in-out"
          onClick={(e) => addTask(e)}
        >
          Criar <PlusCircle size={16} />
        </button>
      </div>
    );
  };

  return (
    <div className="h-screen grid grid-rows-[200px_1fr]">
      <header className="bg-gray-700 flex justify-center items-center">
        <img src={Logo} alt="Logo" />
      </header>
      <div className="flex justify-center items-start ">
        <div className="w-full h-full max-w-4xl flex flex-col justify-start gap-8 mt-[-27px] p-1">
          <AddTask />
          <TaskHeader task={task} />
          {task.length === 0 && <NoTask />}
          {task.length > 0 && (
            <Task>
              {task.map((task, index) => {
                return (
                  <TaskItem
                    key={index}
                    task={task}
                    index={index}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                  />
                );
              })}
            </Task>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
