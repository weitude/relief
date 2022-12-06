import {createContext, useContext, useEffect, useState} from "react";
import {message} from "antd";
import React from "react";

const ReliefContext = createContext({});

const ReliefProvider = (props) => {
    const LOCALSTORAGE_KEY = "save-me";
    const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);
    const [status, setStatus] = useState({});
    const [me, setMe] = useState(savedMe || "");
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        if (signedIn) {
            localStorage.setItem(LOCALSTORAGE_KEY, me);
        }
    }, [signedIn]);

    const displayStatus = (s) => {
        if (s.msg) {
            const {type, msg} = s;
            const content = {content: msg, duration: 0.5}
            switch (type) {
                case 'success':
                    message.success(content)
                    break
                case 'error':
                    message.error(content)
                    break
                default:
                    break
            }
        }
    }

    return (
        <ReliefContext.Provider
            value={{
                status, me, setMe, signedIn, setSignedIn
            }}
            {...props}
        />
    );
};


const useRelief = () => useContext(ReliefContext);
export {ReliefProvider, useRelief};