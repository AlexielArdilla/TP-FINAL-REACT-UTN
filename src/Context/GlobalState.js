import React, { useState } from 'react'
import EcommerceContext from './EcommerceContext'

function GlobalState({ children }) {

    const [userLogin, setUserLogin] = useState(localStorage.getItem("login"));
    
    function loginUser() {

        setUserLogin(true);
        localStorage.setItem("login", true);

    }
    function logoutUser() {

        setUserLogin(false);
        localStorage.removeItem("login");
        //console.log("Desde dentro de logoutUser!!!")

    }

    return (
        <EcommerceContext.Provider
            value={{
                userLogin,
                loginUser,
                logoutUser
            }}
        >
            {children}
        </EcommerceContext.Provider>
    )

}

export default GlobalState
