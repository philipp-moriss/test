import { createContext, useContext, useReducer, ReactNode } from "react";

interface FormState {
  phone: string;
  password: string;
  isPasswordShown: boolean;
  isAgeConfirmed: boolean;
  isBonusConfirmed: boolean;
  errors: {
    phone?: string;
    password?: string;
    isAgeConfirmed?: string;
    isBonusConfirmed?: string,
  };
}

type FormAction =
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_AGE_CONFIRMED"; payload: boolean }
  | { type: "SET_BONUS_CONFIRMED"; payload: boolean }
  | { type: "SET_SHOW_PASSWORD"; payload: boolean }
  | { type: "SET_ERRORS"; payload: Partial<FormState["errors"]> }
  | { type: "RESET_FORM" };

const initialState: FormState = {
  phone: "",
  password: "",
  isPasswordShown: false,
  isAgeConfirmed: false,
  isBonusConfirmed: false,
  errors: {},
};

const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
} | null>(null);

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_PHONE":
      return { ...state, phone: action.payload, errors: {...state.errors, phone: ""} };
    case "SET_PASSWORD":
      return { ...state, password: action.payload,  errors: {...state.errors, password: ""} };
    case "SET_SHOW_PASSWORD":
      return { ...state, isPasswordShown: action.payload };
    case "SET_AGE_CONFIRMED":
      return { ...state, isAgeConfirmed: action.payload, errors: {...state.errors, isAgeConfirmed: ""} };
    case "SET_BONUS_CONFIRMED":
      return { ...state, isBonusConfirmed: action.payload, errors: {...state.errors, isBonusConfirmed: ""} };
    case "SET_ERRORS":
      return { ...state, errors: { ...state.errors, ...action.payload } };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

export function FormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
