import React, {Component} from 'react';
import styles from './home.css';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {homeItem} from '../../action';
import {handleFieldChange} from '../../utils';

const Row = ({...props}) => (
    <div>
        <ul>
            <li onClick={() => this.props.getProductById(props.id)}>{props.name}</li>
        </ul>
    </div>
)

class Home extends Component {

    constructor(){
        super()
        this.state = {
            name: '',
            error: '',
            items: [],
            obj: [{name:'test'}]
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFieldChange = handleFieldChange.bind(this);
    }

    componentWillMount(){
        let self = this;
        let t = [{
            name: 'test',
            id: 20
        },{
            name: 'paresh',
            id: 40
        }]
        self.setState({items: t})
    }

    async handleFormSubmit(){
        var t = document.getElementById('test');

        ReactDOM.findDOMNode(t).style.color = 'red';
        const {name} = this.state;

        try{
            await this.props.onSubmitDispatch(name);
            this.setState({
                name: ''
            })
            //ReactDOM.findDOMNode(this.refs.dataINpout).focus();
        }catch(err){
            this.setState({
                error: err.status === 400 ? err.message : 'Connection Error, Please try again later'
            })
        }
        
    }

    getProductById(id){
        alert(id)
    }   

    render(){
        console.log('render')
        return(
            <div>
            <div className={styles.home}>
                    {this.state.items.map((o, key) => 
                        <Row
                            {...o}
                            key={key}
                            getProductById={this.getProductById}>
                        </Row>
                    )}
                    <input style={{color:"red"}} type="text" name="name" ref="dataINpout" value={this.state.name} onChange={this.handleFieldChange}  required/>
                    <span>{this.state.error}</span>
                    <button type="button" onClick={this.handleFormSubmit}>Save</button>
            </div>
            </div>
        )
    }

}

Home.propTypes = {
    name: PropTypes.string,
    getProductById: PropTypes.func,
    items: PropTypes.array
}

const mapStateToProps = (state) => ({
    state: state.manage.installationDetails
});

const mapDispatchToProps = (dispatch) => ({
    onSubmitDispatch: (value) => dispatch(homeItem(value))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);