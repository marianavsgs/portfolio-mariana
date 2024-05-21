export default function MocksSection({title, mockups}) {
    return (
        <div className="mockups">
            <h3>{title}</h3>
            <div>{mockups.map((mock, index) => <img src={mock} key={index} />)}</div>
        </div>
    )
}