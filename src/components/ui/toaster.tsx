import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-card border border-primary/30 p-4 rounded-xl shadow-lg shadow-black/50 pointer-events-auto min-w-[300px]"
          >
            <h4 className="text-foreground font-display font-bold text-lg">{toast.title}</h4>
            {toast.description && (
              <p className="text-muted-foreground font-sans text-sm mt-1">{toast.description}</p>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
