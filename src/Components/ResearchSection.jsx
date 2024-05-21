export default function ResearchSection({researchText, findings}) {
    return (
        <section className="research flex full-blend">
            <div className="card">
                <h3>Research</h3>
                <p>{researchText}</p>
                <ul>
                    {findings.map(({name, quotes}, index) => 
                        <div key={index}>
                            <li>{name}</li>
                            {quotes && quotes.map((quote, index) => <p className="quotes" key={index}>{quote.text}</p>)}

                        </div>
                        
                    
                )}</ul>
            </div>
        </section>
    )
}