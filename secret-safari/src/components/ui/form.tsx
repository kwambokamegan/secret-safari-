import * as React from "react";

function cn(...inputs: (string | undefined | null | boolean | { [key: string]: boolean })[]) {
  return inputs.filter(Boolean).join(" ");
}

const Form = React.forwardRef<
  HTMLFormElement,
  React.FormHTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => {
  return (
    <form
      ref={ref}
      className={cn("space-y-6 w-full", className)}
      {...props}
    />
  );
});
Form.displayName = "Form";

const FormSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("space-y-4 border-b border-slate-100 pb-6 last:border-0 last:pb-0", className)}
      {...props}
    />
  );
});
FormSection.displayName = "FormSection";

const FormActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-end gap-3 pt-2", className)}
      {...props}
    />
  );
});
FormActions.displayName = "FormActions";

export { Form, FormSection, FormActions };