import { useState } from "react";
import { AuthContext } from "../contents/auth.context";

const AuthProvider = ({children}) => {
    const [number, setNumber ] = useState(0)
    return (
        <>
            <AuthContext.Provider value={{number, setNumber}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider;