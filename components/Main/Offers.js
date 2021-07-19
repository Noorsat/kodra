import { Offer } from "./Offer"

export const Offers = () => {   
    const data = [
        {
            title: "Responsive",
            text: 'looking cool in all devices',
            icon : '/./../public/offer1-icon.png',
            image: '/./../public/offer1-bg.png'
        },
        {
            title: "Unique Design",
            text: 'designed with care',
            icon : '/./../public/offer2-icon.png',
            image: '/./../public/offer2-bg.png'
        },
        {
            title: "Seo Friendly",
            text: 'fost fast loading',
            icon : '/./../public/offer3-icon.png',
            image: '/./../public/offer3-bg.png'
        }
    ]
    return (
        <section className="offers">
            <div className="blogs__title">
                What we offer
            </div>      
            <div className="offer__items">
                {
                    data.map((item,index) => {
                        return (
                            <Offer title={item.title} text={item.text} icon={item.icon} image={item.image} key={index}/>
                        )
                    })
                }
            </div>
        </section>
    )
}