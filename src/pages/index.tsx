import { Button, useColorMode } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { LoginForm } from '../components/Form/LoginForm';
import { AuthLayout } from '../compositions/Layout/AuthLayout';

const Index: NextPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
};

export default Index;