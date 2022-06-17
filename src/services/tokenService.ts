import { ITokenContext } from './../types/auth';
import nookies, { destroyCookie, parseCookies, setCookie } from 'nookies';
const ACCESS_TOKEN_KEY = 'fantasy-game.token';
const ACCESS_REFRESH_TOKEN_KEY = 'fantasy-game.refreshToken';

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;

export const tokenService = {
  save: (accessToken: string, refreshToken: string, context: ITokenContext) => {
    setCookie(context, ACCESS_TOKEN_KEY, accessToken, {
      maxAge: 60 * 60 * 2, // 1 hours
      path: '/'
    });

    setCookie(context, ACCESS_REFRESH_TOKEN_KEY, refreshToken, {
      maxAge: 60 * 60 * 2, // 1 hours
      path: '/'
    });
  },
  get: (context: ITokenContext) => {
    const cookies = parseCookies(context);

    return {
      token: cookies[ACCESS_TOKEN_KEY] || '',
      refreshToken: cookies[ACCESS_REFRESH_TOKEN_KEY] || '',
    }
  },
  delete: (context: ITokenContext) => {
    destroyCookie(context, ACCESS_TOKEN_KEY);
    destroyCookie(context, ACCESS_REFRESH_TOKEN_KEY);
  }
}
