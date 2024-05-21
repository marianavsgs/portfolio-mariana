
import './Contact.css'
import { socialMedia } from '../Data'


export default function Contact() {
    return (
        <section className="contact">
            <div>
                <h1><div>Intereste in</div><div id="background">working together?</div></h1>
                <h6>Lets Connect!</h6>
                <div id="social-media">
                    {socialMedia.map((link) => <a key={link.social} href={link.link}><img src={link.img} alt={link.social} /></a>)}
                </div>
            </div>
        </section>
    )
}