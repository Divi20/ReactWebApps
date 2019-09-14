import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, CardBody} from 'reactstrap';
import BoxLeft from './boxLeft';
import BoxRight from './boxRight';
import { DA } from './shared/deliveryagents';
import { options } from './shared/options';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import 'font-awesome/css/font-awesome.min.css'



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        LeftdelAgents: DA,
        RightdelAgents: [],
        selected: ['']
        
    };
  }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Delivery Agent Assignment</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
        <br></br>
        <br></br>
        <div className="row">
        
        <div className="col-12 col-md-5 mt-1">
        <BoxLeft LeftdelAgents={this.state.LeftdelAgents}/>
        </div>
        <div className="col-6 col-md-2 mt-1 align-self-center">
        <Card>
        <CardBody>
        
        <button type="button">Assign</button>
        </CardBody>
        </Card>
      <br></br>
        <Card>
        <CardBody>
        <button type="button">Revoke</button>
        </CardBody>
        </Card>
        
        </div>
        <div className="col-12 col-md-5 mt-1">
        <BoxRight RightdelAgents={this.state.LeftdelAgents}/>
        </div>

        <div className="col-12 col-md-12 mt-4">
        <Card>
        <CardBody>
        <DualListBox
        options={options}
        selected={this.state.selected}
        onChange={(selected) => {
            this.setState({selected})
        }}
    />
        </CardBody>
        </Card>
        </div>
            </div>
          
            </div>
            
            </div>
            
            
    );
  }
}


export default Main;