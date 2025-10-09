import { NavLink } from "react-router-dom";

export default function RedirectButton({ to, name }: { to: string; name: string }) {
    return (
        <div className="block border m-10">
            <NavLink to={to}>{name}</NavLink>
        </div>
    )
}
