export const Nav = () => {
    const menuHandler = (e) => {
        const items = document.querySelectorAll('.menu__item');
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
        }
        e.target.classList.add('active');
        const text = e.target.innerText;
        if (text == "Home"){
            document.documentElement.scrollTop=0;
        }else if (text == "About"){
            document.documentElement.scrollTop=0;
        }else if (text == "Portfolio"){
            const top = document.getElementById("work__title").offsetTop;
            document.documentElement.scrollTop=top-50;
        }else if (text == "Blog"){
            const top = document.getElementById("blogs__title").offsetTop;
            document.documentElement.scrollTop=top-50;
        }else if (text == "Contact"){
            const top = document.getElementById("contact__title").offsetTop;
            document.documentElement.scrollTop=top-50;
        }

    }
    return (
        <nav className="menu__nav">
        <ul>
            <li className="menu__item active" onClick={menuHandler}> 
                Home
            </li>
            <li onClick={menuHandler} className="menu__item">
                About
            </li>
            <li className="menu__item" onClick={menuHandler}>
                Portfolio
            </li>
            <li className="menu__item" onClick={menuHandler}>
                Services
            </li>
            <li className="menu__item" onClick={menuHandler}>
                Blog
            </li>
            <li className="menu__item" onClick={menuHandler}>
                Contact
            </li>
        </ul>
    </nav>
    )
}