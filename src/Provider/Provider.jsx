import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const Authcontext = createContext(null)

const Provider = ({ children }) => {
   
    const [user, setuser] = useState(false)

    const authinfo = {
        user,
        setuser,
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};
Provider.propTypes = {
    children: PropTypes.node,
};

export default Provider;