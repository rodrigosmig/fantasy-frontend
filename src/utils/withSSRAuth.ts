import { AxiosError } from "axios";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { tokenService } from "../services/tokenService";

export function withSSRAuth<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const { token } = tokenService.get(context);
  
    if(!token) {
      return {
        redirect: {
          destination: '/?error=unauthorized',
          permanent: false,
        }
      }
    }

    try {
      return await fn(context);      
    } catch (error) {
      const err = error as AxiosError

      if (err.response?.status === 404) {
        return {
          notFound: true,
        }
      }
      
      tokenService.delete(context)

      return {
        redirect: {
          destination: '/',
          permanent: false
        },
      }
    }
  }
}
