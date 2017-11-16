// TableRow.js

import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip'
import EditForm from './EditForm'
import ItemService from './ItemService';

class TableRow extends Component {
  constructor(props) {
      super(props);
      this.state = {showEdit: false};
    }



  render() {
    return (
        <tr>
          <td>
            {this.props.id}
          </td>
          <td>
            {this.props.task}
          </td>

          <td>
            <button
            id={"edit"+this.props.id.toString()}
            className="btn btn-primary"
            onClick={() => {console.log('clicked'); this.setState({showEdit: true})}}
            tabIndex="0" onBlur={() => {console.log('blur'); this.setState({showEdit: false})}}
            >
            Edit
            </button >
            <ToolTip active={this.state.showEdit}  position="right" arrow="center" parent={"#edit"+this.props.id.toString()}>
              <EditForm onSubmit={this.props.editButton} id={this.props.id} />
            </ToolTip>
          </td>


          <td>
            <button
            className="btn btn-danger"
            onClick={() => {this.props.deleteButton(this.props.id)}}
            >
            Delete
            </button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
