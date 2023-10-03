import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [asAcc, setAsAcc] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const toggleSinupLogin = () => {
    setError("");
    setAsAcc((prev) => !prev);
  };

  //  Login with Google
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      if (user != null) {
        return navigate("/dashboard");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //  Sign Up / Login With Input
  const signupLoginHandler = async (email, password) => {
    if (!email || !password)
      return setError("Please fill in both email and password fields.");

    setLoading(true);
    setError(null);

    // Sign Up ()
    if (!asAcc) {
      try {
        if (password.length < 7) {
          setError("Password must be minimum of 7 characters");
          return setLoading(false);
        }
        await createUserWithEmailAndPassword(auth, email, password);
        return navigate("/dashboard");
      } catch (error) {
        setError("Email is already associated with an existing account.");
      } finally {
        setLoading(false);
      }
    }

    // Login ()
    if (asAcc) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        return navigate("/dashboard");
      } catch (error) {
        setError(`Incorrect email or password entered`);
      } finally {
        setLoading(false);
      }
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        logOut,
        toggleSinupLogin,
        asAcc,
        signupLoginHandler,
        error,
        loading,
        success,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
