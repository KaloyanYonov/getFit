import { NavLink } from "react-router-dom"

export default function NotFound(){
    return(
        <>
            <p>Oops! You entered an invalid URL.</p>
            <NavLink to='/' >Return to home page</NavLink>
        </>
    )
}