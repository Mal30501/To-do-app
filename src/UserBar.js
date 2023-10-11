import LogOut from './LogOut';
import Login from './Login';
import Register from './Register';
export default function UserBar({User, setUser}){
    if(User){
        return <LogOut User={User} setUser={setUser}/>
    } else{
        return(
          <>
          <Login setUser={setUser} />
          <Register setUser={setUser} />
          </>
        )
    }
}