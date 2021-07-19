import Image from 'next/image';

export const Input = () => {
    return (
        <div className="menu__input">
                <input placeholder="Search"/>
                <Image src="/./../public/search.png" className="menu__input-img" alt="Picture of the author" width={16} height={16} />
        </div>
    )
}