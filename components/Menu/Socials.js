import Image from 'next/image'

export const Socials = () => {
    return (
        <div className="social">
            <div className="social__title">
                Social Network
            </div>
            <div className="social__items">
                <div className="social__item">
                <Image src="/./../public/google.png" alt="Picture of the author" width={16} height={16} />
                </div>
                <div className="social__item">
                <Image src="/./../public/twitter.png" alt="Picture of the author"width={16} height={16}/>
                </div>
                <div className="social__item">
                <Image src="/./../public/pinterest.png" alt="Picture of the author" width={16} height={16} />
                </div>
                <div className="social__item">
                <Image src="/./../public/facebook.png" alt="Picture of the author" width={16} height={16} />
                </div>
            </div> 
        </div>
    )
}