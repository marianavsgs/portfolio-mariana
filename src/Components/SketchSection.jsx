export default function SketchSection({title, text, img}) {
    return (
        <div className="sketch">
            <div className="sketch flex">
                <div className="card">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
            <img src={img} />
        </div>
        
    )
}