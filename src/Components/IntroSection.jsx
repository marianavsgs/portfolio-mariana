export default function IntroSection({overview, role,}) {
    return (<section className="flex intro">
        <div className="overview card">
            <p className="subtitle">Overview</p>
            <div>{overview.map((overview) => <p className="paragraph" key={overview.paragraph}>{overview.paragraph}</p>)}</div>
        </div>
        <div className="role card">
            <p className="subtitle">Role</p>
            <p>{role.name}</p>
            <label>{role.description}</label>
            <p className="date">{role.date}</p>
        </div>
    </section>)
}