export default function InfoSection({title, text, img}) {
    return (
    <section className="info flex">
        <div className="card">
            {title && <h3>{title}</h3>}
            <div>{text.map((text) => <p className="paragraph" key={text.paragraph}>{text.paragraph}</p>)}</div>
            
        </div>
        <div className="card">
            <img src={img} />
        </div>
    </section>
    )
}