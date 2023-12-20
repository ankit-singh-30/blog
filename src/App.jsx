import { useEffect, useState } from "react";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/auth";
import { login,logout } from "./store/authSlice";
import {useDispatch} from "react-redux";

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .finally(()=> setLoading(false));
  },[]);

  return !loading ? (
    <>
      <div className="container max-w-full min-h-screen">
        <Header />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  ) : null;
}

export default App;
