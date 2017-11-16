import React, {Component} from 'react';
import ItemService from './ItemService';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

 handleSubmit(event) {
   event.preventDefault();
   ItemService.sendItem(this.state.value);
   this.props.history.push('/index');
 }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Item:
            <input type="text" value={this.state.value} onChange={this.handleChange}
              className="form-control"/>
          </label><br />
          <input type="submit" value="SUBMIT" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}


export default AddItem;
