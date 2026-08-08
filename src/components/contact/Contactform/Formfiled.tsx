import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type FormFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder: string;
  textarea?: boolean;
  register: UseFormRegister<T>;
  error?: FieldError;
};

export default function FormField<T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  textarea = false,
  register,
  error,
}: FormFieldProps<T>) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          id={name}
          rows={6}
          placeholder={placeholder}
          {...register(name)}
          className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-slate-300 focus:border-blue-600"
          }`}
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={`h-12 w-full rounded-xl border bg-white px-4 outline-none transition ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-slate-300 focus:border-blue-600"
          }`}
        />
      )}

      {error && (
        <p className="mt-2 text-sm font-medium text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
}