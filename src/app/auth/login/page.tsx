import { AuthBranding } from '@/shared/components/layout/AuthBranding';
import { LoginForm } from '@/modules/auth';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AuthBranding />
      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
}