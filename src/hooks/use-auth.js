import { useSelector } from "react-redux"

const useAuth = () => {
    const {email, firstName} = useSelector((state) => state.SignUp)

  return {
    
  }
}

export default useAuth