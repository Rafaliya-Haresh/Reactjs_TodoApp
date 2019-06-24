import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './itemlist.css';
import { deleteItem } from '../../action';

class ItemsList extends Component {

  constructor(props){
    super()
  }
  
  render(){
    return (
      <div>
        <ul className="itemsList-ul">
          {this.props.state.length < 1 && <p id="items-missing">No any Data....</p>}
          {this.props.state.map((item, key) => 
            <li key={key}>{item.content}
              <button onClick={() => {this.props.onDeleteAdd(item.id)}}>Delete</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
};

ItemsList.propTypes = {
  state: PropTypes.array.isRequired,
  onDeleteAdd: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    state: state.todos.items 
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteAdd: (newItem) => dispatch(deleteItem(newItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
