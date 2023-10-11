export default function LogOut({User,setUser}){
    return(
        <form onSubmit={event=>{event.preventDefault(); setUser(``)}}>
                User Email : <b>{User}</b>
                <input type ="submit" value ="Log out"/>
        </form>
    )
}