import { Input } from "@/components";
import { FieldError, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

type InputFormProps = {
  name: string;
  label: string;
  error?: FieldError;
  type?: string;
  required?: boolean;
};

export const InputForm = ({
  name,
  label,
  error,
  required = true,
  type = "text"
}: InputFormProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div className="mb-4 flex flex-col text-foreground">
      <div className="flex items-center justify-between">
        <label htmlFor={name}>
          {label}
          {required && (
            <span className="pl-0.5 font-semibold text-semanticColor-2">*</span>
          )}
        </label>
      </div>

      <Input
        id={name}
        type={type}
        className={cn(errors[name] && "border-semanticColor-2")}
        {...register(name)}
      />
      {error && <span className="text-[#A1B2C3B2]">{error.message}</span>}
    </div>
  );
};
