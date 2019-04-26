import React from "react";
import AddFish from './AddFish.js'
import EditFish from './EditFish.js'

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h1>Inventory!!!</h1>
                {Object.keys(this.props.fishes).map(key => 
                    <EditFish 
                        deleteFish={this.props.deleteFish}
                        updateFish={this.props.updateFish} 
                        index={key} key={key} 
                        fish={this.props.fishes[key]}/>)}                
                <AddFish addFish={this.props.addFish}/>
                <button onClick={this.props.loadData} >Load Sample Fishes</button>
            </div>            
        )
    }
}

export default Inventory;