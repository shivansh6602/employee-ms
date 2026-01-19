import React, {useContext, useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'




const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)


const handleLogin = (email, password) => {
  if(email == 'admin@gmail.com' && password == '123'){
 setUser('admin')
  }else if(authData){
    const employee = authData.employees.find( (e) => e.email === email && e.password === password)
    setUser('employee')
  setLoggedInUserData(employee)
    
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

    {user === 'employee' && <EmployeeDashboard data={loggedInUserData} />}
  </>
)

}

export default App