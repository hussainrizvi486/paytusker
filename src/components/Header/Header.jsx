<<<<<<< HEAD
import { Menu, Search, User2 } from "lucide-react"

export const Header = () => {
    return (
        <header className="page-header navbar-main">

            <section className="nav-section nav-left">
                <div className="nav-menu">
                    <Menu />
                </div>
                <div className="nav-brand">
                    <h1 className="nav-typo__logo">
                        Logo
                    </h1>
                </div>
            </section>

            <section className="nav-section">
                <form className="nav-search__container">
                    <div className="nav-search__box">
                        <input type="text" placeholder="Search, Alias" />
                        <button><Search /></button>
                    </div>
                </form>
            </section>

            <section className="nav-section nav-right">
                <ul className="nav-links-group">

                    <li className="nav-link" aria-label="login">
                        <User2 />
                    </li>
                </ul>
            </section>


=======
import { Search, ShoppingCart, User2, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"

export const Header = () => {
    return (
        <header className="page-header header-main__nav">
            <div className="header-left__section">
                <div className="header-text__logo">
                    <Link to={"/"}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
            </div>

            <div className="header-center__section">
                <div className="search-box__wrapper">
                    <HeaderSearchBox />

                </div>
            </div>

            <div className="header-right__section">
                <nav className="header-nav">

                    <Link className="header-nav__link" to={"/cart"}>
                        <ShoppingCart />
                    </Link>

                    <Link className="header-nav__link" to={"/login"}>
                        <User2 />
                    </Link>

                    <Link className="header-nav__link" to={"/address"}>

                        <MapPin />
                    </Link>


                </nav>
            </div>
>>>>>>> a3b95bfe40b0048aa7834916fbc4e067082fa031
        </header>
    )
}

<<<<<<< HEAD
=======

const HeaderSearchBox = ({ placeholder = "Type somthing here." }) => {
    return (
        <form className="header-search-box">
            <div className="search-box__input">
                <input type="text" placeholder={placeholder} />
                <button >
                    <Search />
                </button>
            </div>

            <div className="search-results__container">
                <ul className="search-results__list">
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum Lorem, ipsum.</li>
                    <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum </li>
                    <li>Lorem ipsum Lorem, ipsum.</li>
                    <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit.</li>
                </ul>
            </div>
        </form>
    )
}
>>>>>>> a3b95bfe40b0048aa7834916fbc4e067082fa031
