import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import { IAuthContextData, ILogin, IUser } from "../types/auth";
import { authService } from "../services/apiService/authService";
import { tokenService } from "../services/tokenService";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

let authChannel: BroadcastChannel;

export const signOut = () => {
  authChannel.postMessage("signOut");
  //logout();
}

const logout = async () => {
  /* try {
    await authService.signOut();
  } catch (error) {
    console.log(error.response.data)
  } */

  tokenService.delete(null)

  Router.push('/');
  //Router.reload()
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter()
  const [user, setUser] = useState<IUser>({} as IUser);
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          logout();
          break;
        default:
          break;
      }
    }
    
  }, []);

  useEffect(() => {
    const { token } = tokenService.get(null);

    if (token) {
      authService.me().then(response => {
        const { user: updatedUser } = response.data;
        setUser(updatedUser)
      })
      .catch(() => {
        signOut()
      })
    }
  }, []);

  const signIn = async ({ email, password }: ILogin) => {
    const response = await authService.signIn({
      email,
      password,
    })

    const { token, refreshToken, user } = response.data;

    tokenService.save(token, refreshToken, null);

    setUser(user);
    
    router.push('/home');
  }

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      //signOut,
      setUser,
      user,
      isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useSession = () => {
  const {
    isAuthenticated,
    user,
    signIn,
    //signOut,
    setUser 
  } = useContext(AuthContext);
  
  return {
    isAuthenticated,
    user,
    signIn,
    //signOut,
    setUser 
  }
}