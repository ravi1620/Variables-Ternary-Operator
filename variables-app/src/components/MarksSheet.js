import React from 'react'

function MarksSheet(props) {
    let telMarks=Number(props.telMarks);
    let hindiMarks=Number(props.hindiMarks);
    let engMarks=Number(props.engMarks);
    const mathsMarks=Number(props.mathsMarks);
    let sciMarks=Number(props.sciMarks);
    let sociMarks=Number(props.sociMarks);
    let totalMarks= telMarks+hindiMarks+engMarks+mathsMarks+sciMarks+sociMarks;
    let perc=(totalMarks/600)
   

    
  return (
    <div>
        <table className="table">
<caption className="caption">{props.studentName} SSC Marks shet</caption>
        <thead>
            <tr className="tr">
                <th className="td,th">Subject</th>
                <th>Max.Marks</th>
                <th>M.O.</th>
                <th>Result</th>
                <th>Remarks</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{telMarks}</td>
                <td>{telMarks >=35 ? "pass":"fail"}</td>
                <td>pass</td>
                <td>Good</td>
            </tr>
            <tr>
                <td>Hindi</td>
                <td>100</td>
                <td>{hindiMarks}</td>

                <td>{hindiMarks >=35 ? "pass":"fail"}</td>
                <td>Pass</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>English</td>
                <td>100</td>
                <td>{engMarks}</td>

                <td>{engMarks >=35 ? "pass":"fail"}</td>
                <td>Pass</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Maths</td>
                <td>100</td>
                <td>{mathsMarks}</td>

                <td>{mathsMarks >=35 ? "pass":"fail"}</td>
                <td>Pass</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Science</td>
                <td>100</td>
                <td>{sciMarks}</td>

                <td>{sciMarks >=35 ? "pass":"fail"}</td>
                <td>Pass</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Social</td>
                <td>100</td>
                <td>{sociMarks}</td>

                <td>{sociMarks >=35 ? "pass":"fail"}</td>
                <td>Pass</td>
                <td>Excellent</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Total Marks</th>
                <td>600</td>
                <td>{totalMarks} ({perc.toFixed(2)}%)</td>
                <td>Pass</td>
                <td>Excelent</td>
            </tr>
        </tfoot>
        </table></div>
  )
}

export default MarksSheet;