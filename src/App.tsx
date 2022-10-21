import Logo from "./assets/logo.svg";
import Clip from "./assets/clip.png";
import { Check, PlusCircle, TrashSimple } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useState, useRef, useReducer } from "react";
import {
  INITIAL_STATE,
  TaskProps,
  taskReducer,
} from "../src/Reducers/taskReducer";

function App() {
  const [state, dispatch] = useReducer(taskReducer, INITIAL_STATE);

  const [task, setTask] = useState<TaskProps[]>([] as TaskProps[]);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log("state", state.loading);

  const addTask = () => {
    // dispatch({ type: "LOADING" });
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
      return task.map((task, i) => {
        if (i === index) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    });
  };

  return (
    <div className="h-screen grid grid-rows-[200px_1fr]">
      <header className="bg-gray-700 flex justify-center items-center">
        <img src={Logo} alt="Logo" />
      </header>
      <div className="flex justify-center items-start ">
        <div className="w-full h-full max-w-4xl flex flex-col justify-start gap-8 mt-[-27px] p-1">
          <div className="w-full flex gap-4 flex-wrap md:flex-nowrap ">
            <input
              ref={inputRef}
              type="text"
              placeholder="Adicionar Tarefa"
              // value={inputValue}
              // onChange={(e) => setinputValue(e.target.value)}
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
              onClick={addTask}
            >
              Criar <PlusCircle size={16} />
            </button>
          </div>

          <div className="flex w-full flex-col justify-between items-start sm:flex-row sm:items-center ">
            <div className="flex gap-2">
              <span className="text-xs text-brand-200 font-semibold">
                Tarefas Criadas
              </span>
              <span className="text-xs font-semibold text-gray-200 bg-gray-400 rounded-full py-[2px] px-[8px]">
                {task.length}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-xs text-brand-300 font-semibold">
                Concluidas
              </span>
              <span className="text-xs font-semibold text-gray-200 bg-gray-400 rounded-full py-[2px] px-[8px]">
                {task.filter((a) => a.done).length}
              </span>
            </div>
          </div>

          {task.length === 0 ? (
            <div className="w-full h-[287px] flex flex-col gap-0 items-center justify-center py-4 border-t-2 border-t-gray-400 rounded-lg ">
              <img className="mb-4" width={56} src={Clip} alt="Logo" />
              <span className="text-sm text-gray-300 font-bold p-0">
                Você ainda nao tem tarefas cadastradas
              </span>
              <span className="text-sm text-gray-300 font-normal p-0">
                Crie tarefas e organizes seus itens a fazer
              </span>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col gap-4">
              {task.map((task, index) => {
                return (
                  <div
                    key={index + task.description}
                    className="w-full flex gap-4 justify-between bg-gray-500 min-h-[56px]
                              border-1 border-solid border-gray-400 rounded-lg py-4 px-4"
                  >
                    <Checkbox.Root
                      checked={task.done}
                      onClick={(a) => toggleTask(index)}
                      className="w-6 h-6 p=[2px] border-2 border-solid border-brand-100 rounded-full"
                    >
                      <Checkbox.Indicator asChild>
                        <Check className="h-5 w-5 text-cyan-500" size={24} />
                      </Checkbox.Indicator>
                    </Checkbox.Root>

                    <span className="text-sm text-gray-100 font-normal leading-5 p-0 flex-1">
                      {task.description}
                    </span>
                    <button
                      onClick={() => deleteTask(index)}
                      className="flex items-center justify-center"
                      type="button"
                    >
                      <TrashSimple
                        size={16}
                        className="hover:text-gray-300 transition duration-300 ease-in-out "
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
