import Image from 'next/image';
export const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__wrapper">
                <div className="contact__map">
                <Image src="/./../public/pointer.png" alt="Picture of the author" width={102} height={108} className="contact__map-img"/>
                </div>
                <div className="contact__content">
                    <div className="contact__title" id="contact__title">
                        Contact us
                    </div>
                    <div className="contact__input">
                        <input placeholder="full name" /> 
                    </div>
                    <div className="contact__input">
                        <input placeholder="email address" /> 
                    </div>
                    <div className="contact__input">
                        <input placeholder="subject" /> 
                    </div>
                    <div className="contact__input">
                        <input placeholder="message" /> 
                    </div>
                    <div className="contact__btn">
                        <a>SEND</a>
                    </div>
                </div>
            </div>
        </section>  
    )
}