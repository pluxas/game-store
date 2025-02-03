import { Route, Routes } from "react-router-dom"

import RouteBlock from "./RouteBlock"
import Account from "./ProfileRouters/Account"
import Orders from "./ProfileRouters/Orders"
import ChangePassword from "./ProfileRouters/ChangePassword"
import MyFavorites from "./ProfileRouters/MyFavorites"

const Profile = () => {
  return (
    <div>
      <h1 className="font-fontFamily font-semibold text-3xl text-white my-7">Profile</h1>  
      <div className="flex gap-10">
        <RouteBlock/>
        <Routes>
          <Route index element={<Account />} />
          <Route path="My-Account" element={<Account/>}/>
          <Route path="My-Orders" element={<Orders/>}/>
          <Route path="My-Favorites" element={<MyFavorites/>}/>
          <Route path="Change-Password" element={<ChangePassword/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Profile