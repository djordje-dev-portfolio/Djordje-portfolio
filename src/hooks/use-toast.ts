import { useState, useEffect } from "react";

// Minimal toast hook implementation for the demo
type ToastProps = {
  title: string;
  description?: string;
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = ({ title, description }: ToastProps) => {
    setToasts((prev) => [...prev, { title, description }]);
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return { toast, toasts };
}
