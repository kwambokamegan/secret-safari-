import * as React from "react";
import { FolderOpen } from "lucide-react";

function cn(...inputs: (string | undefined | null | boolean | { [key: string]: boolean })[]) {
  return inputs.filter(Boolean).join(" ");
}

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, title = "No items found", description, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex min-h-[320px] flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 p-8 text-center bg-slate-50/50",
          className
        )}
        {...props}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-500">
          {icon || <FolderOpen className="h-6 w-6 text-blue-600" />}
        </div>
        <h3 className="mt-4 text-sm font-semibold text-slate-900">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-slate-500 max-w-xs mx-auto">{description}</p>
        )}
        {children && <div className="mt-6 w-full max-w-xs">{children}</div>}
      </div>
    );
  }
);
Empty.displayName = "Empty";

export { Empty };