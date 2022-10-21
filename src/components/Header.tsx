import React from "react";

interface TasksProps {
  done: boolean;
  description: string;
}
interface HeaderProps {
  task: TasksProps[];
}

export const TaskHeader = React.memo(({ task }: HeaderProps) => {
  return (
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
        <span className="text-xs text-brand-300 font-semibold">Concluidas</span>
        <span className="text-xs font-semibold text-gray-200 bg-gray-400 rounded-full py-[2px] px-[8px]">
          {task.filter((a) => a.done).length}
        </span>
      </div>
    </div>
  );
});
