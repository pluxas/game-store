import HeaderBlock from "./Header";
import Nav from "./Nav";

const Header = () => {
    return (
        <>
            <div className="max-w-1200 w-full mx-auto relative">
                <div className="hidden smallSize:block">
                    <HeaderBlock />
                </div>
                <Nav />
            </div>
            <div className="border-solid border-border-after-header border mt-6"></div>
        </>
    );
};

export default Header;
