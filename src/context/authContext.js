import jwtDecode from 'jwt-decode';
import { createContext, useCallback, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  if (token !== null && userRole === null && userId === null) {
    const { role, id } = jwtDecode(token);
    setUserRole(role);
    setUserId(id);
  }

  const signIn = useCallback(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('token');
    setToken(null);
    setUserRole(null);
    window.location.reload();
  }, []);

  return (
    <AuthContext.Provider value={{ token, signIn, signOut, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
