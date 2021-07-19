import Image from 'next/image';

export const Shots = () => {
    return (
        <div className="shots">
            <div className="shots__title">
                Shots from Dribbble
            </div>
            <div className="shots__items">
                <div className="shots__item">
                    <Image src="/./../public/1.png" alt="Picture of the author" width={60} height={60} />
                </div>
                <div className="shots__item">
                    <Image src="/./../public/2.png" alt="Picture of the author" width={60} height={60} />
                </div>
                <div className="shots__item">
                    <Image src="/./../public/3.png" alt="Picture of the author" width={60} height={60} />
                </div>
                <div className="shots__item">
                    <Image src="/./../public/4.png" alt="Picture of the author" width={60} height={60} />
                </div>
                <div className="shots__item">
                    <Image src="/./../public/5.png" alt="Picture of the author" width={60} height={60} />
                </div>
                <div className="shots__item">
                    <Image src="/./../public/6.png" alt="Picture of the author" width={60} height={60} />
                </div>
                <div className="shots__item">
                    <Image src="/./../public/7.png" alt="Picture of the author" width={60} height={60} />
                </div>
                <div className="shots__item">
                    <Image src="/./../public/8.png" alt="Picture of the author" width={60} height={60} />
                </div>
            </div>

        </div>
    )
}