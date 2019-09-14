import React, { Component } from 'react';

import { Card, CardImg, CardFooter, CardBody, CardText,CardTitle,CardHeader} from 'reactstrap';

class BoxLeft extends Component {
   
    
    render() {
        const menu = this.props.LeftdelAgents.map((LeftdelAgent) => {
            return (
    
                <div className="col-12 col-sm-4 mt-4">
                <Card>
                <CardBody>
                  <CardImg width="50%" src={LeftdelAgent.image} alt={LeftdelAgent.name} />
                  </CardBody>
                    <CardFooter>
                      <CardText heading>{LeftdelAgent.name}</CardText>
                    </CardFooter>
                  </Card>   
                </div>
              
            );
        });

        return (
         
            <Card>
            <CardHeader><CardTitle>Delivery Agents Available</CardTitle></CardHeader>
              <CardBody>
              <div className="row">
              
                    {menu}
              
              </div> 
           </CardBody>
             </Card>
  
          
           
        
       
        
        );
    }
}

export default BoxLeft;