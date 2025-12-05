import { createContext, useState } from "react";

export const userContext = createContext();

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

  return (
    <userContext.Provider value={{ user, setUser, users, setUsers }}> 
        {children}
    </userContext.Provider>
  )
}

export default UserContext