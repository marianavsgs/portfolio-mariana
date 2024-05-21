import './Header.css'
import image from '../assets/lateral.png'

export default function Header () {
    return (
        <section className="header">
            <div className='header-title'>
                <h1 className="title">
                    <div>Hi! I’m </div>
                    <div className="Background">Mariana Santos.</div>
                    <div>A designer passionate about creating impactful design solutions.</div>
                </h1>
                <h6>I’m a product designer with experience to deliver end-to-end UX/UI design for software products. My superpowers are discovering user needs through research and developing elegant and intuitive interfaces. </h6>
            </div>
            <div>
                <img src={image} />
            </div>
        </section>
    )
}