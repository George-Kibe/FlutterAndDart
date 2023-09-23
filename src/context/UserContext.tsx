import { Children, createContext, useContext } from "react";
import { useUser } from "@clerk/clerk-expo";

const UserContext = createContext<any>(null);

const UserContextProvider = ({children}) => {
    const authUser = useUser();
    const dbUser = null;

    return(
        <UserContext.Provider value={{dbUser, authUser}} >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);