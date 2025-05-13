import React, { useState, createContext } from 'react';
import api from '../api';

interface AuthProviderProps extends React.PropsWithChildren {
  children: React.ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface LoginResponse {
  token: string;
  role: string;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    const reponse = await api.post<LoginResponse>('/auth/login', {
      email,
      password
    })

    if (reponse.status === 200) {
      setIsAuthenticated(true);
      // Trocar para cookie
      localStorage.setItem('token', reponse.data.token);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        login,
        logout, 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;