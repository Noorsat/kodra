import Image from 'next/image';
import React, {useState} from 'react';

export const Blog = ({title,owner,time,comments,text,image}) => {
    const [icon, setIcon] = useState("blue");

    const setWhite = () => {
        setIcon("white");
    }

    const setBlue = () => {
        setIcon("blue");
    }

    return (
        <div className="blog" onMouseOver={setWhite} onMouseOut={setBlue}>
            <div className="blog__wrapper">
                <div className="blog__img">
                    <Image src={image} alt="" width={460} height={337}/>
                </div>
                <div className="blog__content">
                    <div className="blog__title">
                        {title}
                    </div>
                    <div className="blog__info">
                        <div className="blog__owner">
                            <div className="blog__owner-img">
                                {
                                    icon === "blue" ? <Image src="/./../public/owner.png" alt="" width={15} height={18}/> : <Image src="/./../public/owner-white.png" alt="" width={15} height={18}/>
                                }
                            </div>
                            <div className="blog__owner-text">
                                {owner}
                            </div>
                        </div>
                        <div className="blog__time">
                            <div className="blog__time-img">
                                {
                                    icon === "blue" ? <Image src="/./../public/time.png" alt="" width={16} height={16}/> : <Image src="/./../public/time-white.png" alt="" width={16} height={16}/>
                                }
                            </div>
                            <div className="blog__time-text">
                                {time}
                            </div>
                        </div>
                        <div className="blog__comment">
                            <div className="blog__comment-img">
                                {
                                    icon === "blue" ? <Image src="/./../public/comment.png" alt="" width={18} height={15}/> : <Image src="/./../public/comment-white.png" alt="" width={18} height={15}/>
                                }
                            </div>
                            <div className="blog__comment-text">
                                {comments} Comments
                            </div>
                        </div>
                    </div>
                    <div className="blog__text">
                        {text}
                    </div>
                    <div className="blog__button">
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}