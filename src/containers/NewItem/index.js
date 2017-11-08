import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems, addItem } from '../../actions/items.actions';
import { loadConditions } from '../../actions/conditions.actions';
import { loadUsers } from '../../actions/users.actions';
import { loadStatuses } from '../../actions/statuses.actions';
import { loadCategories } from '../../actions/categories.actions';

import Select from '../../components/select.components';

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {  // sets intial empty state object
      name: '',
      description: '',
      manufacturer: '',
      modelname: '',
      price: '',
      category_id: '',
      condition_id: '',
      is_sold: 2, // initial state defaults to NOT SOLD
      user_id: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let newItem = {
      name: this.state.name,    // sets state when client inserts/changes the name
      description: this.state.description,
      manufacturer: this.state.manufacturer,
      modelname: this.state.modelname,
      price: this.state.price,
      category_id: this.state.category_id,
      condition_id: this.state.condition_id,
      is_sold: this.state.is_sold,
      user_id: this.state.user_id
    }
    this.props.addItem(newItem);
    console.log(newItem, "new item");
    this.setState({ // this will pass up to the newItem that will be submitted on SUBMIT
      name: '',
      description: '',
      manufacturer: '',
      modelname: '',
      price: '',
      category_id: '',  // these will be integers that DB will associate with category table
      condition_id: '',
      is_sold: 2, // defaults to NOT SOLD
      user_id: ''
    })
  }

  handleChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name] : value
    });
  }

  render() {
    return (
      <div className="new-item-form">
        <form onSubmit={this.handleSubmit}>

          <Select
          list={this.props.categories}
          name="category_id"
          label="Category: "
          type="category"
          handler={this.handleChange}/>

          <Select
          list={this.props.conditions}
          name="condition_id"
          label="Condition: "
          type="condition"
          handler={this.handleChange}/>

          <Select
          list={this.props.statuses}
          name="is_sold"
          label="Has Been Sold:  "
          type="sold"
          handler={this.handleChange}/>

          <Select
          list={this.props.users}
          name="user_id"
          label="Username:  "
          type="username"
          handler={this.handleChange}/>

          <div className="name-form">
            <input name="name" value={this.state.item} type="text" placeholder="item name" onChange={this.handleChange}/>
          </div>
          <div className="description-form">
            <textarea name="description" value={this.state.description} type="text"
              placeholder="description" onChange={this.handleChange} cols="30" rows="10"/>
          </div>
          <div className="price-form">
            <input name="price" value={this.state.price} type="number" min="0" max="100000" placeholder="price" onChange={this.handleChange}/>
          </div>
          <input type="submit" value="submit card"/>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.itemList,
    users: state.userList,
    categories: state.categoryList,     // setting state
    conditions: state.conditionList,
    statuses: state.statusList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    },
    loadCategories: (categories) => {
      dispatch(loadCategories(categories));
    },
    loadConditions: (conditions) => {
      dispatch(loadConditions(conditions));
    },
    loadStatuses: (statuses) => {
      dispatch(loadStatuses(statuses));
    },
    loadUsers: (users) => {
      dispatch(loadUsers(users));
    }
  }
}

const ConnectedNewItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItem)

export default ConnectedNewItem;

