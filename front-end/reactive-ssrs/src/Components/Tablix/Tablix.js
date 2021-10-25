import React from 'react';

class Tablix extends React.Component {
    constructor() {
        this.state = {
            columns =[],
            rows =[]
        };
    }

    render() {
        let { columns, rows } = this.state;
        return (
            <table>
                <thead>
                    <tr>
                        {
                            columns.map(c => <th>{c}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(r => <tr>{
                            columns.map(c => <td>{r[c]}</td>)
                        }</tr>)
                    }
                </tbody>
            </table>
        );
    }
}

export default Tablix();