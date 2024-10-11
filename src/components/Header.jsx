import { useContext } from "react";
import { CiLocationOn } from "react-icons/ci"
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { ProductContext } from "../context/ProductContext";

const Header = () => {

    const { langType, lang, changeLang } = useContext(LanguageContext);
    const { cart, } = useContext(ProductContext);



    return (
        <header className="custom-container ">
            <div className="d-flex justify-content-between py-2 border-bottom">
                <ul className="d-flex remove-dot p-0 m-0">
                    <li className="pe-5 font-size14"><span className="text-color"><CiLocationOn /></span>{lang.country}</li>
                    <li className="pe-5 font-size14">{lang.location}</li>
                    <li className="font-size14">{lang.deliveryTime} <span className="fw-bold">00:24:19</span></li>
                </ul>
                <ul className="d-flex remove-dot p-0 m-0">
                    <li className="pe-5 font-size14">{lang.workingTime}</li>
                    <li className="font-size14">
                        <select value={langType} onChange={changeLang}>
                            <option value="uz">UZ</option>
                            <option value="en">EN</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="custom-container d-flex justify-content-between py-3">
                <img src="../public/logo.svg" alt="logo" />
                <Link className="btn btn-outline-warning" to={"basket"}>{lang.basket} ({cart.length})</Link>
            </div>
        </header>
    )
}

export default Header
