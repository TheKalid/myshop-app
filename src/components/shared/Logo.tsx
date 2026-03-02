import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link
            to='/'
            className={`text-2x1 font-bold tracking-tighter transition-all`}
        >
            <p className="hidden lg:block">
                home
                <span className="text-cyan-600">3D</span>
            </p>
            <p className="flex text-4x1 lg:hidden">
                <span className="-skew-x-6">H</span>
                <span className="text-cyan-600 skew-x-6">3D</span>
            </p>
        </Link>
    );
}