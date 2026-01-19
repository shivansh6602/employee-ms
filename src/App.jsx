import React, {useContext, useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'




const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)


const handleLogin = (email, password) => {
  if(email == 'admin@gmail.com' && password == '123'){
 setUser('admin')
  }else if(authData && authData.employees.find( (e) => e.email === email && e.password === password)){
    setUser('employee')
  
    
  }else {
    alert("Invalid Credential");
    
  }
}


// const data =  useContext(AuthContext)
// console.log(data);



  return (
  <>
    {!user && <Login handleLogin={handleLogin} />}

    {user === 'admin' && <AdminDashboard />}

    {user === 'employee' && <EmployeeDashboard />}
  </>
)

}

export default App