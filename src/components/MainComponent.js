import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, CardBody} from 'reactstrap';
import BoxLeft from './boxLeft';
import BoxRight from './boxRight';
import { DA } from './shared/deliveryagents';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        delAgents: DA,
        LeftdelAgents: DA,
        RightdelAgents: [],
        
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
        <div class="container">
        <br></br>
        <br></br>
        <div className="row">
        
        <div className="col-6 col-md-5 mt-1">
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
        <div className="col-6 col-md-5 mt-1">
        <BoxRight RightdelAgents={this.state.LeftdelAgents}/>
        </div>
            </div>
           
            </div>
        </div>
    );
  }
}


export default Main;