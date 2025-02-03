import { useEffect } from "react";

import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import Routers from "./routers/Routers/routes";
import { setUser, setUserName } from "./slices/Signup";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";

function App() {
  const auth = getAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            dispatch(setUser(currentUser));
            dispatch(setUserName(currentUser.displayName));
        } else {
            dispatch(setUser(''))
            dispatch(setUserName(''))
        }
    });

    return () => unsubscribe;
}, [auth, dispatch]);

  return (
    <>
      <Header />
      <div className="max-w-1200 w-full mx-auto">
        <Routers/>
      </div>
      <Footer />
    </>
  );
}

export default App;
