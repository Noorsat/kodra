import Image from 'next/image';

export const Offer = ({title,text,icon,image}) => {
    return (
        <div className="offer">
            <div className="offer__header">
                <div className="offer__content">
                    <div className="offer__title">
                        {title}
                    </div>
                    <div className="offer__text">
                        {text}
                    </div>
                </div>
                <div className="offer__icon">
                <Image src={icon} alt="Picture of the author" width={65} height={65} />
                </div>
            </div>
            <div className="offer__img">
            <Image src={image} alt="Picture of the author" width={320} height={240} />
            </div>
        </div>
    )
}