import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    static propTypes = {
        addFish: PropTypes.func,
    };

    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            Description: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        this.props.addFish(fish);
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" ref={this.nameRef} placeholder="Name" />
                <input type="text" ref={this.priceRef} placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea type="text" ref={this.descRef} placeholder="Description"></textarea>
                <input type="text" ref={this.imageRef} placeholder="Image" />
                <button type="submit">+Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;