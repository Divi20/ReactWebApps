import React, { Component } from 'react';

import { Card, CardImg, CardFooter, CardBody,CardTitle, CardHeader,CardText} from 'reactstrap';

class RightLeft extends Component {
   
    
    render() {
        const menu = this.props.RightdelAgents.map((RightdelAgent) => {
            return (
    
              <div className="col-12 col-sm-4 mt-4">
              <Card>
              <CardBody>
                <CardImg width="50%" src={RightdelAgent.image} alt={RightdelAgent.name} />
                </CardBody>
                  <CardFooter>
                    <CardText heading>{RightdelAgent.name}</CardText>
                  </CardFooter>
                </Card>   
              </div>
              
            );
        });

        return (
         
          <Card>
          <CardHeader><CardTitle>Delivery Agents with Duty</CardTitle></CardHeader>
            <CardBody>
            <div className="row">
            
                  {menu}
            
            </div> 
         </CardBody>
           </Card>

          
        
        );
    }
}

export default RightLeft;