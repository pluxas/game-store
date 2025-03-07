import { useSelector } from "react-redux"

const useAuth = () => {
    const {email} = useSelector((state) => state.SignUp)

  return {
    isAuth: !!email,
    email,
  }
}

export default useAuth