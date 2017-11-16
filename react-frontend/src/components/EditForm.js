import React, {Component} from 'react';


class EditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={() => {this.props.onSubmit(this.props.id, this.state.value)}}>
          <label>
            edit Item:
            <input type="text" value={this.state.value} onChange={this.handleChange}
              className="form-control"/>
          </label><br />
          <input type="submit" value="SUBMIT" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}


export default EditForm;
