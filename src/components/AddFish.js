import React from "react"


class AddFish extends React.Component
{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value,
        }
        
        //call the root parent method to add fish
        this.props.addFish(fish)

        event.currentTarget.reset();
    };

    render () {
        return (
            <form className="fish-edit" action="" onSubmit={this.createFish}>
                <input type="text" ref={this.nameRef} name="name" placeholder="Fish Name"/>
                <input type="text" ref={this.priceRef} name="price" placeholder="Fish Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea type="text" name="desc" ref={this.descRef} placeholder="Fish Desc"/>
                <input type="text" name="image" ref={this.imageRef} placeholder="Fish Image"/>

                <button>+ Add Fish</button>
            </form>
        )
    }
}

export default AddFish;