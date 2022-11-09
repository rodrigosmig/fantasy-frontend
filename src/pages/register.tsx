import { Button, useColorMode } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { LoginForm } from '../components/Form/LoginForm';
import { AuthLayout } from '../components/Layout/AuthLayout';

const Register: NextPage = () => {
  return (
    <AuthLayout>
      Register
    </AuthLayout>
  )
};

export default Register;