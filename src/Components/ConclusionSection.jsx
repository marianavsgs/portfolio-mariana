export default function ConclusionSection({text}) {
   return( <div className="conclusion flex">
         <div className="card">
            <h3>Final Conclusions</h3>
            <div>{text.map((text) => <p className="paragraph" key={text.paragraph}>{text.paragraph}</p>)}</div>
         </div>
    </div>
   )
}