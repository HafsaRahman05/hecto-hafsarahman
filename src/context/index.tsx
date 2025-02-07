import { createContext, useState, useContext, ReactNode } from "react";

// Define the Auth Context
interface AuthContextType {
  user: { isAdmin: boolean } | null;
  login: (user: { isAdmin: boolean }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ isAdmin: boolean } | null>(null);

  const login = (userData: { isAdmin: boolean }) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for using Auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
