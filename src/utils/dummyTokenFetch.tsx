import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { tokenAtom } from "../atoms/token-atom";
import { TOKEN_NOT_PROVIDED } from "../constants/constants";

export const DummyTokenFetch = () => {
  const [localTokenState, setLocalTokenState] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading");

  const setToken = useSetAtom(tokenAtom);

  useEffect(() => {
    const tokenTimeout = setTimeout(() => {
    setToken(TOKEN_NOT_PROVIDED);
      setLocalTokenState(true);
    }, 5000);

    return () => clearTimeout(tokenTimeout);
  }, [setToken]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => (prev.length < 10 ? `${prev}.` : "Loading"));
    }, 500);

    return () => clearInterval(interval);
  }, [setLoadingText]);

  return <>{localTokenState ? <Navigate to="/opening" replace /> : loadingText}</>;
};
