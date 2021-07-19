import { Blogs } from "./Blogs"
import { Contact } from "./Contact"
import { Footer } from "./Footer"
import { Offers } from "./Offers"
import { Slider } from "./Slider"
import { Team } from "./Team"
import { Work } from "./Work"


export const Main = () => {
    return (
        <div className="main">
            <Slider/>
            <Work/>
            <Blogs/>
            <Offers/>
            <Team/>
            <Contact/>
            <Footer/>
        </div>
    )
}