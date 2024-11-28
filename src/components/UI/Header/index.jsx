import HeaderBlock from "./Header";
import Nav from "./Nav";

const Header = () => {
    return (
        <>
            <div className="max-w-1200 w-full mx-auto relative">
                <HeaderBlock/>
                <Nav/>
            </div>
            <div className="border-solid border-border-after-header border mt-6"></div>
        </>
    );
};

export default Header;
