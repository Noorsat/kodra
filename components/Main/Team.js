import Image from 'next/image';
import React, {useState} from 'react';

export const Team = () => {
    const [socials, setSocials] = useState(false);
    const [socials2, setSocials2] = useState(false);
    const [socials3, setSocials3] = useState(false);
    const [socials4, setSocials4] = useState(false);
    const data = [
        {
            name:"Tom Houston",
            img:'/./../public/team-1.png',
            width:383,
            height:439
        },
        {
            name:"Dereck Anderson",
            img:'/./../public/team-2.png',
            width:200,
            height:443
        },
        {
            name:"Bob Williams",
            img:'/./../public/team-3.png',
            width:218,
            height:440
        },
    ]

    const whiteSocial = (index) => {
        if (index === 0){
            setSocials(true);
        }else if (index === 1){
            setSocials2(true);
        }else if (index === 2){
            setSocials3(true);
        }else if (index === 3){
            setSocials4(true)
        }
    }
    const blackSocial = (index) => {
        if (index === 0){
            setSocials(false);
        }else if (index === 1){
            setSocials2(false);
        }else if (index === 2){
            setSocials3(false);
        }else if (index === 3){
            setSocials4(false); 
        }
    }
    return (
        <section className="team">
            <div className="blogs__title">
                Our Team
            </div> 
            <div className="team__items">
                {
                    data.map((item,index) => {
                        return (
                            index === 0 || index % 2 === 0 ? 
                            <div className="team__item"> 
                                <div className="team__wrapper">
                                    <div className="team__item-img">
                                        <Image src={item.img} alt="Picture of the author" width={item.width} height={item.height} />
                                    </div>
                                    <div className="team__item-content">
                                        <div className="team__item-socials">            
                                            {
                                                socials === false ? <div className="team__item-social" onMouseOver={() => whiteSocial(0)} onMouseOut={() => blackSocial(0)}>
                                                <Image src="/./../public/google-black.png" alt="Picture of the author" width={23} height={15} />
                                            </div> : <div className="team__item-social" onMouseOver={() => whiteSocial(0)} onMouseOut={() => blackSocial(0)}>
                                                <Image src="/./../public/google.png" alt="Picture of the author" width={23} height={15} />
                                            </div>
                                            }
                                            {
                                                socials2 === false ?    <div className="team__item-social" onMouseOver={() => whiteSocial(1)} onMouseOut={() => blackSocial(1)}>
                                                <Image src="/./../public/twitter-black.png" alt="Picture of the author" width={16} height={13} />
                                            </div> :    <div className="team__item-social" onMouseOver={() => whiteSocial(1)} onMouseOut={() => blackSocial(1)}>
                                                <Image src="/./../public/twitter.png" alt="Picture of the author" width={16} height={13} />
                                            </div>
                                            }
                                            {
                                                socials3 === false ?       <div className="team__item-social" onMouseOver={() => whiteSocial(2)} onMouseOut={() => blackSocial(2)}>
                                                <Image src="/./../public/pinterest-black.png" alt="Picture of the author" width={15} height={16} />
                                            </div> :    <div className="team__item-social" onMouseOver={() => whiteSocial(2)} onMouseOut={() => blackSocial(2)}>
                                                <Image src="/./../public/pinterest.png" alt="Picture of the author" width={15} height={16} />
                                            </div>
                                            }
                                            {
                                                socials4 === false ?  <div className="team__item-social" onMouseOver={() => whiteSocial(3)} onMouseOut={() => blackSocial(3)}>
                                                <Image src="/./../public/facebook-black.png" alt="Picture of the author" width={9} height={18} />
                                            </div> : <div className="team__item-social" onMouseOver={() => whiteSocial(3)} onMouseOut={() => blackSocial(3)}>
                                                <Image src="/./../public/facebook.png" alt="Picture of the author" width={9} height={18} />
                                            </div>
                                            }
                                        </div>
                                        <div className="team__item-name">
                                            {item.name}
                                        </div>
                                        <div className="team__item-text">
                                            This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. <br></br><br></br><br></br> Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                                        </div>
                                        <div className="team__item-full">
                                            <a>see full profile</a>
                                            <Image src="/./../public/full.png" width={21} height={21} />
                                        </div>
                                    </div>
                                </div>
                            </div> : 
                            <div className="team__item"> 
                            <div className="team__wrapper">
                                <div className="team__item-content">
                                <div className="team__item-socials">            
                                            {
                                                socials === false ? <div className="team__item-social" onMouseOver={() => whiteSocial(0)} onMouseOut={() => blackSocial(0)}>
                                                <Image src="/./../public/google-black.png" alt="Picture of the author" width={23} height={15} />
                                            </div> : <div className="team__item-social" onMouseOver={() => whiteSocial(0)} onMouseOut={() => blackSocial(0)}>
                                                <Image src="/./../public/google.png" alt="Picture of the author" width={23} height={15} />
                                            </div>
                                            }
                                            {
                                                socials2 === false ?    <div className="team__item-social" onMouseOver={() => whiteSocial(1)} onMouseOut={() => blackSocial(1)}>
                                                <Image src="/./../public/twitter-black.png" alt="Picture of the author" width={16} height={13} />
                                            </div> :    <div className="team__item-social" onMouseOver={() => whiteSocial(1)} onMouseOut={() => blackSocial(1)}>
                                                <Image src="/./../public/twitter.png" alt="Picture of the author" width={16} height={13} />
                                            </div>
                                            }
                                            {
                                                socials3 === false ?       <div className="team__item-social" onMouseOver={() => whiteSocial(2)} onMouseOut={() => blackSocial(2)}>
                                                <Image src="/./../public/pinterest-black.png" alt="Picture of the author" width={15} height={16} />
                                            </div> :    <div className="team__item-social" onMouseOver={() => whiteSocial(2)} onMouseOut={() => blackSocial(2)}>
                                                <Image src="/./../public/pinterest.png" alt="Picture of the author" width={15} height={16} />
                                            </div>
                                            }
                                            {
                                                socials4 === false ?  <div className="team__item-social" onMouseOver={() => whiteSocial(3)} onMouseOut={() => blackSocial(3)}>
                                                <Image src="/./../public/facebook-black.png" alt="Picture of the author" width={9} height={18} />
                                            </div> : <div className="team__item-social" onMouseOver={() => whiteSocial(3)} onMouseOut={() => blackSocial(3)}>
                                                <Image src="/./../public/facebook.png" alt="Picture of the author" width={9} height={18} />
                                            </div>
                                            }
                                        </div>
                                    <div className="team__item-name">
                                        {item.name}
                                    </div>
                                    <div className="team__item-text">
                                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. <br></br><br></br><br></br> Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                                    </div>
                                    <div className="team__item-full">
                                        <a>see full profile</a>
                                        <Image src="/./../public/full.png" width={21} height={21} />
                                    </div>
                                </div>
                                <div className="team__item-img">
                                    <Image src={item.img} alt="Picture of the author" width={item.width} height={item.height} />
                                </div>
                            </div>
                        </div>
                        )
                    })
                }   
            </div>
        </section>
    )
}