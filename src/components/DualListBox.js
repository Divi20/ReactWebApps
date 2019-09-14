import React from 'react';

import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import 'font-awesome/css/font-awesome.min.css'

const options = [
    {
        label: 'Earth',
        options: [
            { value: 'luna', label: 'Moon' },
        ],
    },
    {
        label: 'Mars',
        options: [
            { value: 'phobos', label: 'Phobos' },
            { value: 'deimos', label: 'Deimos' },
        ],
    },
    {
        label: 'Jupiter',
        options: [
            { value: 'io', label: 'Io' },
            { value: 'europa', label: 'Europa' },
            { value: 'ganymede', label: 'Ganymede' },
            { value: 'callisto', label: 'Callisto' },
        ],
    },
];


class Widget extends React.Component {
    constructor(){
        super() 
        
        this.state = {
            selected: ['phobos']
        }
    }

    render(){
        
            return (
                <DualListBox
                    options={options}
                    selected={this.state.selected}
                    onChange={(selected) => {
                        this.setState({selected})
                    }}
                />
            );
           
            
    }
   

       
    
}

export default Widget;