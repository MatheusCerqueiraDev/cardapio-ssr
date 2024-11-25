// toastNotifications.js
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const showSuccessToast = (message) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};

export const showErrorToast = (message) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};
