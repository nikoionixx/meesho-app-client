
import { MeeshoLogo } from "../logo/logo.component";
import SearchInputComponent from "../search-input/search-input.component";
import { faUser  } from "@fortawesome/free-regular-svg-icons";
import IconButtonComponent from "../iconbutton/icon-button.component";
import { faMobileScreen, faShop } from "@fortawesome/free-solid-svg-icons";


const NavbarComponent = () => {
    return (
        <div className="w-full border-b bg-white">
            <div className="container mx-auto flex py-4 justify-between items-center">
            <div className="flex gap-5">
                <MeeshoLogo />
                <SearchInputComponent />
            </div>

            <div className="flex">
                <ul className="flex items-center ">
                    <li className="flex border-r-2 border-grey-400 px-4">
                        <IconButtonComponent type={'horizontal'} icon={faMobileScreen} title={'Download App'} />
                    </li>
                    <li className="flex border-r-2 border-grey-400 px-4">
                        <IconButtonComponent type={'horizontal'} title={'Become a Supplier'} />
                    </li>
                    <li className="flex gap-5 px-4 ">
                        <IconButtonComponent type={'vertical'} icon={faUser} title={'Profile'} />
                        <IconButtonComponent type={'vertical'} icon={faShop} title={'Cart'} />
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default NavbarComponent;