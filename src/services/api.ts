import { NextPageContext } from 'next';
import axios from 'axios';
import { tokenService } from './tokenService';

export type ContextType = NextPageContext | null | undefined

export const setupApiClient = (context: ContextType) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  api.interceptors.request.use(config => {
    const { token } = tokenService.get(context);
    
    config.headers =  {
      Authorization: token ? `Bearer ${token}` : ''
    }

    return config;
  });

  return api;
}

