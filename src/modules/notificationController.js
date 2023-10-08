export default class NotificationController {
  static showToast(message) {
    const toast = document.querySelector(".toast");
    toast.textContent = message;
    toast.classList.add("show-toast");

    setTimeout(() => {
      toast.classList.remove("show-toast");
    }, 3000); // Hide after 3 seconds
}
}