import { NavLink } from "react-router-dom";

type RedirectButtonProps = {
    to: string;
    name: string;
};

export default function RedirectButton({ to, name }: RedirectButtonProps) {
    return (
        <NavLink
            to={to}
            className="px-8 py-3 text-white rounded-lg font-medium transition
            bg-gradient-to-b from-blue-300 to-blue-200 
            hover:from-blue-400 hover:to-blue-200 hover:bg-gradient-to-b

                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            {name}
        </NavLink>
    );
}
