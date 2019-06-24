import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';


ReactDOM.render(
    <App/>
    , document.getElementById('root'));



//     import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import {createStore, combineReducers} from 'redux';
// import { Provider, connect } from 'react-redux';
// // Class
// class Button extends React.Component{

//     submit(name){
//         this.props.onSubmit(name);
//     }
//     render(){
//         console.log(this.props);
//         return(
//             <button type="button" onClick={() => this.submit('haresh')}>Submit</button>
//         )
//     }
// }
// const mapStateToProps = (state) => ({state});
// const mapDispatchToProps = (dispatch) => ({
//     onSubmit: (name)  => dispatch({
//         type: 'INSTALLATION',
//         installationDetails: {
//             installationData: name
//         }
//     })
// });
// const Tettt = connect(mapStateToProps, mapDispatchToProps)(Button);

// // Action
// const testAction = (state = {}, action) => {
//     switch (action.type) {
//       case 'INSTALLATION':
//         return Object.assign({}, state, { installationDetails: action.installationDetails });
//       default: 
//         return state;
//     }
// }
// // Reducer
// const reducer = combineReducers({
//     data: testAction
// });

// // Store
// const store = createStore(reducer, {});

// // Render
// ReactDOM.render(
//     <Provider store={store}>
//        <Tettt/>
//     </Provider>
//     , document.getElementById('root'));

