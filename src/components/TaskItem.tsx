import * as Checkbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import { Check, TrashSimple } from "phosphor-react";

interface TasksProps {
  done: boolean;
  description: string;
}

interface TaskItemprops {
  task: TasksProps;
  index: number;
  toggleTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

export function TaskItem({
  task: { description, done },
  index,
  toggleTask,
  deleteTask,
}: TaskItemprops) {
  const addClass = clsx(
    "w-6 h-6 p=[2px] border-2 border-solid border-brand-100 rounded-full",
    {
      "animate-[spin_.3s_ease-out_1]": done,
    }
  );
  return (
    <div
      key={index + description}
      className="w-full flex gap-4 justify-between bg-gray-500 min-h-[56px] border-1 border-solid border-gray-400 rounded-lg py-4 px-4"
    >
      <Checkbox.Root
        checked={done}
        onClick={(a) => toggleTask(index)}
        className={addClass}
      >
        <Checkbox.Indicator asChild>
          <Check className="h-5 w-5 text-cyan-500" size={24} />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <span className="text-sm text-gray-100 font-normal leading-5 p-0 flex-1">
        {description}
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
}
