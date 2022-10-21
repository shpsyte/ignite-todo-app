import Clip from "../assets/clip.png";

export function NoTask() {
  return (
    <div className="w-full h-[287px] flex flex-col gap-0 items-center justify-center py-4 border-t-2 border-t-gray-400 rounded-lg ">
      <img className="mb-4" width={56} src={Clip} alt="Logo" />
      <span className="text-sm text-gray-300 font-bold p-0">
        Você ainda nao tem tarefas cadastradas
      </span>
      <span className="text-sm text-gray-300 font-normal p-0">
        Crie tarefas e organizes seus itens a fazer
      </span>
    </div>
  );
}
