import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { tokenService } from "../services/tokenService";

export function withSsrGuest<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const { token } = tokenService.get(context);

    if(token) {
      return {
        redirect: {
          destination: '/home',
          permanent: false,
        }
      }
    }

    return await fn(context);
  }
}