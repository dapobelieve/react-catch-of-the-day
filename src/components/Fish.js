import React from "react"
import { formatPrice } from '../helpers'

class Fish extends React.Component
{
    handleClick = () => {
        this.props.addToOrder(this.props.index)
    }
    render() {
        const image = this.props.details.image
        const name = this.props.details.name
        const price = this.props.details.price
        const desc = this.props.details.desc
        const isAvailable = this.props.details.status === 'available'

        // const { image, name, price, desc, status } = this.props.details
        return ( 
            <li className="menu-fish">
                <img src={image} alt={this.props.details.name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p className="">{desc}</p>
                <button onClick={this.handleClick} disabled={!isAvailable}>
                    {isAvailable ? 'Add to Cart' : 'Sold Out'}
                </button>
            </li>
        )
    };
}

export default Fish