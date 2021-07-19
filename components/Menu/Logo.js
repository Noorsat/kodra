import Image from 'next/image';

export const Logo = () => {
    return (
        <div className="menu__logo">
        <div className="menu__logo-img">
            <Image src="/./../public/mountains.png" alt="Picture of the author" width={72} height={28} />
        </div>
        <div className="menu__logo-title">
            KODRA
        </div>
        <div className="menu__logo-text">
            Responsive Multi-concept<br></br>WordPress Theme
        </div>
    </div>
    )
}