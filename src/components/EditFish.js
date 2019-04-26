import React from "react";

class EditFish extends React.Component
{
    handleChange = (event) => {
        console.log(event.currentTarget.value)
        let updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        }

        this.props.updateFish(this.props.index, updatedFish);
    }
    render () {
        return (
            <div className="fish-edit">
                <input type="text" name="name" value={this.props.fish.name} onChange={this.handleChange} placeholder="Fish Name"/>
                <input type="text" name="price" value={this.props.fish.price} onChange={this.handleChange} placeholder="Fish Price"/>
                <select name="status" value={this.props.fish.status} onChange={this.handleChange}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea type="text" name="desc" value={this.props.fish.desc} onChange={this.handleChange} placeholder="Fish Desc"/>
                <input type="text" name="image" value={this.props.fish.image} onChange={this.handleChange} placeholder="Fish Image"/>
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFish;