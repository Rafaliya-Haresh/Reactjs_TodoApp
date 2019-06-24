import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { addItem} from '../../action';
import './itemcreator.css';

class ItemCreator extends Component{

  render(){
    let inputField;
    
    return (
      <div className="itemCreator">
        <input
          ref={(e) => { inputField = e }}
          className="itemCreator-input"
          type="text"
          placeholder="What do you need to do?"
        />

        <input
          className="itemCreator-button"
          type="button"
          value="Add Task"
          onClick={() => {
            inputField.value && this.props.onAdd(inputField.value);
            inputField.value = '';
          }}
        />
      </div>
    );
  }
}

ItemCreator.propTypes = {
  onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onAdd: (newItem) => dispatch(addItem(newItem))
});

export default connect(null, mapDispatchToProps)(ItemCreator);