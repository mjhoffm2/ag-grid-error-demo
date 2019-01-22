import * as React from "react";

//ag-grid
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import {AgGridReact} from "ag-grid-react";
import {GridOptions} from "ag-grid-community";
import "ag-grid-enterprise";

export class Home extends React.Component<{}> {
    constructor(p: {}) {
        super(p);
    }

    render() {
        return (
			<div style={{ height: 500 }} className="ag-theme-balham" >
					<AgGridReact
						columnDefs={[{headerName: "test", field: "a"}]}
						rowData={[{a: 5}]}
					/>
			</div>
        );
    }
}
