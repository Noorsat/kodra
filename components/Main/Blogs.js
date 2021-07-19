import { Blog } from "./Blog"

export const Blogs = () => {
    const data = [
        {
            title:"New Shopping Cart Features for coming for Authors and Affiliates",
            owner:"by admin",
            time:"10 minutes ago",
            comments:"4",
            text:"We’ve released a few new features for the shopping cart on Envato Market first up is Add All Items to Cart on Collections. You can now create collections of items and buyers will be able to add them to their cart with a single ",
            image:"/./../public/blog-1.png"   
        },
        {
            title:"All Authors: Important Information on how to receive US tax summaries.",
            owner:"by admin",
            time:"10 minutes ago",
            comments:"4",
            text:"Tt’s coming up on it's been a year since Envato's launched our US subsidiary company and the W form submission process was introduced to the Envato ecosystem. Shortly, Envato is going to be mailing two types of forms to our authors",
            image:"/./../public/blog-2.png"     
        },  
        {
            title:"Ever struggled to explain Envato to a friend?",
            owner:"by admin",
            time:"10 minutes ago",
            comments:"4",
            text:"I know I have! Which is one big reason I'm super excited about our brand spanking new Envato.com. It also does a much better job of introducing our tools and services, and connecting creatives with the best people and resources for getting their projects done. Get the full scoop on the blog47 and then head over to Envato.com39 to check it out! :grinning::rocket:",
            image:"/./../public/blog-3.png"     
        },  
        {
            title:"Latest Community Events & Opportunities to Participate In & Win!",
            owner:"by admin",
            time:"10 minutes ago",
            comments:"4",
            text:"We want you to create a video tutorial to help customers better understand how to use an item or complete a task using content from Envato Market. The tutorial must be focused on a specific item (e.g. how to use a specific Photoshop action ",
            image:"/./../public/blog-4.png"     
        },  
        {
            title:"An Update from the Market Quality Team average review times",
            owner:"by admin",
            time:"10 minutes ago",
            comments:"4",
            text:"It’s a great time to provide a fresh view of the size and structure of the Quality team. We currently consist of over 60 team members with a leadership group located at Melbourne HQ, [domain knowledge] Specialists, Senior Reviewers",
            image:"/./../public/blog-5.png"     
        },  
        
    ] 

    return (
        <div className="blogs">
            <div className="blogs__title" id="blogs__title">
                Blog Posts
            </div>
            <div className="blogs__items">
                {
                    data.map((item,index) => {
                        return (
                            <Blog title={item.title} owner={item.owner} time={item.time} comments={item.comments} text={item.text} image={item.image} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}