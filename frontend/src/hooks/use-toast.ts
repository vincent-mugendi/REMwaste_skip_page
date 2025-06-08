import { toast as sonnerToast } from "sonner";


// Utility wrapper for displaying toast notifications
export const toast = ({ title, description }: { title: string; description: string }) => {
  sonnerToast(`${title}`, {
    description,
  });
};
