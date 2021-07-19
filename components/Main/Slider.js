import Image from 'next/image';

export const Slider = () => {
    return (
        <div className="slider">
            <div className="slider__title">
                We do it with <span>&lt;style&gt;</span>
            </div>
            <div className="slider__text">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin
            </div>
            <div className="slider__counter">
                <div className="slider__count">
                    01
                </div>
                <div className="slider__arrows">
                    <div className="slider__arrow-left">
                        <Image src="/./../public/right.png" className="menu__input-img" alt="Picture of the author" width={18} height={8} />
                    </div>
                    <div className="slider__arrow-right">
                        <Image src="/./../public/left.png" className="menu__input-img" alt="Picture of the author" width={18} height={8} />
                    </div>
                </div>
            </div>
        </div>
        
    )
}