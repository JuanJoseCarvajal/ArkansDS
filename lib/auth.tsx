'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

export type UserRole = 'client' | 'agency';

export type AuthUser = {
  name: string;
  email: string;
  role: UserRole;
};

type AuthContextValue = {
  user: AuthUser | null;
  isReady: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const storageKey = 'arkans-session';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as AuthUser;
        if ((parsed.role === 'client' || parsed.role === 'agency') && parsed.email) setUser(parsed);
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
    setIsReady(true);
  }, []);

  const login = (nextUser: AuthUser) => {
    setUser(nextUser);
    window.localStorage.setItem(storageKey, JSON.stringify(nextUser));
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem(storageKey);
  };

  const value = useMemo(() => ({ user, isReady, login, logout }), [user, isReady]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
