export interface TaskProps {
  description: string;
  done: boolean;
}

export const INITIAL_STATE = {
  loading: false,
  tasks: [] as TaskProps[],
  error: false,
};

export const taskReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        tasks: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
