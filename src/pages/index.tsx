import type { NextPage } from 'next';

import { LoginForm } from 'compositions/Forms/LoginForm';
import { AuthLayout } from 'compositions/Layout/AuthLayout';

const Index: NextPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
};

export default Index;