import React from "react";
import Header from "./Header.js"
import Order from "./Order.js"
import Inventory from "./Inventory.js"
import sampleFishes from "../sample-fishes"
import Fish from "./Fish"
import base from "../base"

class App extends React.Component {
    
    state = {
        fishes: [],
        order: []
    }

    // component mounted
    componentDidMount() {
        //check if theres items in ls
        //persist it to state
        let localOrder = localStorage.getItem(this.props.match.params.storeId)
        if(localOrder) {
            this.setState({
                order: JSON.parse(localOrder)
            })
        }
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }    
    //component destroyed
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentDidUpdate() {
        //set order of current store to ls when its updated
        localStorage.setItem(`${this.props.match.params.storeId}`, JSON.stringify(this.state.order))
    }

    addFish = (fish) => {
        //Take a copy of the current state
        const fishes = {...this.state.fishes};        
        //2. Add new data to that copy
        fishes[`fish${Date.now()}`] = fish;
        //3. use this.setState({}) to set the state
        this.setState({
            fishes: fishes
        })
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes}); 
    }

    addToOrder = (key) => {
        const order = {...this.state.order}
        order[key] = order[key] + 1 || 1
        this.setState({
            order: order
        });

    }

    updateFish = (key, newFish) => {
        const fishes = {...this.state.fishes};
        fishes[key] = newFish;
        this.setState({
            fishes: fishes
        })
    }

    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({
            fishes: fishes
        })
    }

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({
            order: order
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Dapo the Best"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => 
                            <Fish 
                                key={key} 
                                index={key} 
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder}/>)
                        }
                    </ul> 
                </div>
                <Order  removeFromOrder={this.removeFromOrder} 
                        fishes={this.state.fishes} 
                        order={this.state.order}/>
                <Inventory  deleteFish={this.deleteFish} 
                            updateFish={this.updateFish} 
                            fishes={this.state.fishes} 
                            addFish={this.addFish} 
                            loadData={this.loadSampleFishes} />
            </div>
        )
    }
}

export default App;