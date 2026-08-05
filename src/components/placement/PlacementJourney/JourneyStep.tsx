import {
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

type JourneyStepProps = {
  step: {
    id: number;
    title: string;
    description: string;
  };
  isLast: boolean;
};

export default function JourneyStep({
  step,
  isLast,
}: JourneyStepProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
          <CheckCircle2 className="h-8 w-8 text-blue-600" />
        </div>

        <span className="mt-6 inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
          Step {step.id}
        </span>

        <h3 className="mt-5 text-3xl font-black text-slate-900">
          {step.title}
        </h3>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          {step.description}
        </p>
      </div>

      {!isLast && (
        <ArrowDown className="my-8 h-10 w-10 text-blue-500" />
      )}
    </div>
  );
}