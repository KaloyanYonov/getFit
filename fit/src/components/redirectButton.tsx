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
                bg-[#A89B9D]
                hover:bg-[#816C61]
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            {name}
        </NavLink>
    );
}
