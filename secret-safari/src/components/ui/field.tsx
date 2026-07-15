import * as React from "react";

function cn(...inputs: (string | undefined | null | boolean | { [key: string]: boolean })[]) {
  return inputs.filter(Boolean).join(" ");
}

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  error?: string;
  description?: string;
  required?: boolean;
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, error, description, required, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-1.5 w-full", className)} {...props}>
        {label && (
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 select-none">
            {label}
            {required && <span className="text-rose-500 ml-1">*</span>}
          </label>
        )}
        
        {children}
        
        {description && !error && (
          <p className="text-xs text-slate-400">{description}</p>
        )}
        
        {error && (
          <p className="text-xs font-medium text-rose-500">{error}</p>
        )}
      </div>
    );
  }
);
Field.displayName = "Field";

export { Field };