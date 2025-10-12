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
                bg-gradient-to-r from-purple-600 to-gray-300
                hover:from-purple-700 hover:to-gray-500
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            {name}
        </NavLink>
    );
}
