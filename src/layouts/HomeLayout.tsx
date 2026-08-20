import Header from "../components/Header"
import { Outlet } from 'react-router';

export default function HomeLayout() {
    return (
        <>
            <Header />
            <div className="w-full min-h-screen mt-20">
                <Outlet />
            </div>
        </>
    )
};
