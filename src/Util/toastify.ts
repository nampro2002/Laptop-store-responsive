import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = {
  notify(msg: string) {
    toast.success(msg, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  },
  error(msg: string) {
    toast.error(msg, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  },
};
