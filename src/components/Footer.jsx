import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="custom-container">

            <div className="row pt-4 pb-3">
                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ height: "198px" }}>
                    <ul className="list-unstyled">
                        <li className="mb-5 pb-5"><img src="../public/logo.svg" alt="Logo" /></li>
                        <li className="mb-3"></li>
                        <li className="mb-3"></li>
                        <li className="mt-5">© Copyright 2021 — Куда Пицца</li>
                    </ul>

                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <ul className="list-unstyled">
                        <li className="fw-bold fs-5 mb-3">Куда пицца</li>
                        <li className="mb-3">О компании</li>
                        <li className="mb-3">Пользовательское соглашение</li>
                        <li>Условия гарантии</li>
                    </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <ul className="list-unstyled">
                        <li className="fw-bold fs-5 mb-3">Помощь</li>
                        <li className="mb-3">Ресторан</li>
                        <li className="mb-3">Контакты</li>
                        <li className="mb-3">Поддержка</li>
                        <li>Отследить заказ</li>
                    </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <ul className="list-unstyled">
                        <li className="fw-bold fs-5 mb-3">Контакты</li>
                        <li className="mb-3">
                            <span className="text-color">
                                <MdOutlineLocalPhone />
                            </span>{" "}
                            +7 (926) 223-10-11
                        </li>
                        <li className="mb-3">
                            <span className="text-color">
                                <CiLocationOn />
                            </span>{" "}
                            Москва, ул. Юных Ленинцев, д.99
                        </li>
                        <li>
                            <span className="text-color">
                                <IoLogoFacebook />
                            </span>{" "}
                            Facebook{" "}
                            <span className="text-color">
                                <FaInstagram />
                            </span>{" "}
                            Instagram
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
