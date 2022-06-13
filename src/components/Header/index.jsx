import logo from "img/logo/logo.png"
import classes from "./Header.module.scss"

export function Header() {
    return (
        <header className={classes.header} >
            <div className="container">
                <a href="/" className={classes['header__logo']}>
                    <img src={logo} alt="logo" />
                    <strong>
                        Online Store
                    </strong>
                </a>
            </div>
        </header>
    )
}