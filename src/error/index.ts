import axios from "axios";
import { Notify } from "../services/toast";
import errorMessages from "./errorMessages";

export type ErrorAction = (status: number, statusCode: string) => void;

const errorCoverage = (error: unknown, actions: ErrorAction[], defaultMessage: string = errorMessages.DEFAULT_MESSAGE) => {
  if (axios.isAxiosError(error)) {
    const status: number = error.response?.status || 0;
    const statusCode: string = error.response?.data;
    actions.forEach((action) => action(status, statusCode));
  } else {
    Notify.error(defaultMessage);
  }
}

export default errorCoverage;