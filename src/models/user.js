import { useState, useCallback } from 'react';

export default function useAuthModel() {
  const [user, setUser] = useState(null);
  const signin = useCallback(() => {
    // signin implementation
    // setUser(user from signin API)
    setUser('set1');
  }, []);
  const signout = useCallback(() => {
    // signout implementation
    // setUser(null)
    setUser(null);
  }, []);
  return {
    user,
    signin,
    signout,
  };
}
