import { toast as sonnerToast } from "sonner";
// Utility wrapper for displaying toast notifications
export const toast = ({ title, description }) => {
    sonnerToast(`${title}`, {
        description,
    });
};
