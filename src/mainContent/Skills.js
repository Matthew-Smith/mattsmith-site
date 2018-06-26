import React, { Component } from 'react';
import ReactTable from "react-table";
import { columns, data } from './SkillsToShow/data';

import 'react-table/react-table.css';
import './Skills.css';

class Skills extends Component {
    render() {
        return <div className='TableContainer'>
            <ReactTable
                data={data}
                columns={columns}
                defaultSorted={[
                    {
                        id: 'years',
                        desc: true
                    }
                ]}
                className="-striped -highlight"
            />
        </div>;
    }
}

export default Skills;
