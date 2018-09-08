import React, {Component} from 'react';

 const TableHeader = () => { 
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
    const TableBody = (props) => { 
        const rows = props.charactername.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>
                    <button name="Delete" value="Delete" onClick={()=> props.rmovechar(index)}>Delete</button>
                </td>
            </tr>
        );
        });

        return <tbody>{rows}</tbody>;
       }
class Table extends Component {

    render() {
        const { charactername, rmovechar} = this.props;
        return (
             <table>
                <TableHeader />
                <TableBody charactername={charactername} rmovechar ={rmovechar}/>
            </table>
        );
    }
}

export default Table;