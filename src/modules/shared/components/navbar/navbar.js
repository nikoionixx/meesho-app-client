import { MeeshoLogo } from "../logo/logo.component";
import SearchInputComponent from "../search-input/search-input.component";

const NavbarComponent = () => {
    return (
        <div className="w-full border-b bg-white">
            <div className="container mx-auto flex py-4 justify-between items-center">
            <div className="flex gap-5">
                <MeeshoLogo />
                <SearchInputComponent />
            </div>

            <div className="flex">
                <p>Right</p>
            </div>
            </div>
        </div>
    );
}

export default NavbarComponent;