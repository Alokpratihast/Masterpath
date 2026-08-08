import LoginForm from "./LoginForm";

export default function AuthCard() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Admin Login
        </h1>

        <p className="mt-2 text-slate-500">
          Sign in to MasterPath Admin Panel
        </p>
      </div>

      <LoginForm />
    </div>
  );
}