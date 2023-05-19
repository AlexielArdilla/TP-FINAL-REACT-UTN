import React, { useState } from 'react'
import EcommerceContext from './EcommerceContext'

function GlobalState({ children }) {

    const [userLogin, setUserLogin] = useState(false);
    function loginUser() {

        setUserLogin(true);

    }
    function logoutUser() {

        setUserLogin(false);
        console.log("Desde dentro de logoutUser!!!")

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
