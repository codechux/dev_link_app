// contexts/AuthContext.tsx
import { createContext, useContext, ReactNode } from "react";
import { User } from "firebase/auth";

interface AuthContextType {
  currentUser: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
  value: AuthContextType;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  value,
}) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
