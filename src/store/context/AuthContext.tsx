import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import { tokenService } from "../../services/tokenService";
import { authService } from "../../services/apiService/authService";
import { AuthContextData, Login, User } from "../../types/auth";


interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

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
  const [user, setUser] = useState<User>({} as User);

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
          nome: response.data.nome,
          email: response.data.email
        };

        setUser(user)
      })
      .catch(() => {
        signOut()
      })
    }
  }, []);

  const signIn = useCallback(async ({ email, senha }: Login) => {
    
    const signInResponse = await authService.signIn({
      email,
      senha,
    });

    const { token } = signInResponse.data;
    tokenService.save(token, null);

    const meResponse = await authService.me();

    const user = {
      id: meResponse.data.id,
      nome: meResponse.data.nome,
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