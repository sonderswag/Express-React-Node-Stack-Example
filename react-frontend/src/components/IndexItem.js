// IndexItem.js

import React, { Component } from 'react';
import ItemService from './ItemService';
import TableRow from './TableRow';


class IndexItem extends Component {

  constructor(props) {
      super(props);
      this.state = {items: ''};

      //Cool need this to bind the this context to the delete Handler which is then passed to the child
      this.deleteButton = this.deleteButton.bind(this);
      this.editButton = this.editButton.bind(this);
      this.listCallback = this.listCallback.bind(this);
    }

  listCallback(err,list) {
      if (err) {
        console.log(err);
        return
      }
      this.setState({ items: list });
    }

  componentDidMount(){
    console.log('making a request to get the items')
    ItemService.getList(this.listCallback)
  }

  deleteButton(id) {
    ItemService.deleteItem(id, this.listCallback)
  }

  editButton(id, value) {
    console.log('eidt',value)
    ItemService.updateItem(id,value,this.listCallback)
  }


  tabRow(){
    if(this.state.items instanceof Object){
      return Object.keys(this.state.items).map(key => {
          console.log(key,this.state.items[key])
          return <TableRow id={key} task={this.state.items[key]} deleteButton={this.deleteButton} editButton={this.editButton}/>;
      })
    }
  }



    render() {
      return (
        <div className="container">
          <button className="btn btn-primary" onClick={() => {this.props.history.push('/add-item');}}>
            Add Item
          </button>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>No.</td>
                  <td>Item</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }

export default IndexItem;
