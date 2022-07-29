import { toast } from "react-toastify";

type notificationType = "success" | "warning" | "error";

export const notify = (message: string, type: notificationType) => {
	switch (type) {
		case "warning":
			toast.warn(message);
			break;
		case "error":
				toast.error(message);
				break;	
		default:
			toast.success(message);
			break;
	}
}