import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import { IAuthContextData, ILogin, IUser } from "../types/auth";
import { authService } from "../services/apiService/authService";
import { tokenService } from "../services/tokenService";
import { useTeam } from "./TeamContext";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

let authChannel: BroadcastChannel;

export const signOut = () => {
  authChannel.postMessage("signOut");
  logout();
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
        const user = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email
        };

        setUser(user)
      })
      .catch(() => {
        signOut()
      })
    }
  }, []);

  const signIn = useCallback(async ({ email, password }: ILogin) => {
    
    const SignInResponse = await authService.signIn({
      email,
      password,
    });

    const { token } = SignInResponse.data;
    tokenService.save(token, null);

    const meResponse = await authService.me();
    const user = {
      id: meResponse.data.id,
      name: meResponse.data.name,
      email: meResponse.data.email
    };

    setUser(user);
    
    router.push('/home');
  }, [])

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
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
    signOut,
    setUser 
  } = useContext(AuthContext);
  
  return {
    isAuthenticated,
    user,
    signIn,
    signOut,
    setUser 
  }
}