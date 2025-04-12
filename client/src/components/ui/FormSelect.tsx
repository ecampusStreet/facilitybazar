import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "./form";

interface FormSelectProps {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

const FormSelect = React.forwardRef<HTMLDivElement, FormSelectProps>(
  ({ name, label, options, placeholder, className, ...props }, ref) => {
    const { formItemId, error } = useFormField();

    return (
      <FormItem ref={ref} className={cn(className)}>
        {/* {label && <FormLabel>{label}</FormLabel>} */}
        <FormControl>
          <Select name={name} {...props}>
            <SelectTrigger
              id={formItemId}
              aria-invalid={!!error}
              className={cn(error && "border-destructive")}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);
FormSelect.displayName = "FormSelect";

export { FormSelect };
