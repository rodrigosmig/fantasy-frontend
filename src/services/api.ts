import { GetServerSidePropsContext } from 'next';
import { AxiosResponse } from 'axios';
import axios, { AxiosError } from 'axios';
import { IRefreshTokenResponse, ITokenExpiredError } from '../types/auth';
import { tokenService } from './tokenService';
import { signOut } from '../contexts/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

type ContextType = GetServerSidePropsContext | null | undefined

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
/* 
  api.interceptors.response.use(response => {
    return response;
  }, (error: AxiosError<ITokenExpiredError>) => {
    if (error.response?.status === 401) {
      if (error.response.data.code === 'token.expired') {
        const { refreshToken } = tokenService.get(context);

        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          api.post('/refresh', {
            refreshToken,
          }).then((response: AxiosResponse<IRefreshTokenResponse>) => {
            tokenService.save(response.data.token, response.data.refreshToken, context);
            
            failedRequestsQueue.forEach(request => request.onSuccess(response.data.token));
            failedRequestsQueue = [];
          }).catch(err => {
            failedRequestsQueue.forEach(request => request.onFailure(err))
            failedRequestsQueue = [];

            if (typeof window !== "undefined") {
              signOut()
            }
          }).finally(() => {
            isRefreshing = false
          });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers = {
                Authorization: `Bearer ${token}`
              }

              resolve(api(originalConfig))
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            } 
          })
        });
      } else {
        if (typeof window !== "undefined") {
          signOut()
        } else {
          return Promise.reject(new AuthTokenError())
        }
      }
    }
  }); */

  return api;
}

