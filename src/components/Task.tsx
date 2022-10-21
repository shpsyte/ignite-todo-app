import { ReactNode } from "react";

interface TaskProps {
  children: ReactNode;
}

export function Task({ children }: TaskProps) {
  return <div className="w-full h-full flex flex-col gap-4">{children}</div>;
}
