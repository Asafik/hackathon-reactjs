import React, {Component,Fragment} from  'react'
import './Product.css'

import CardProduct from '../CardProduct/CardProduct'


class Product extends Component {
state = {
    order :4 ,
    name : 'Agus'
}

handleCounterChange = (newValue) => {
    this.setState({
        order: newValue
    })
}

    render() {
        return (
            <Fragment>
                <div className='header'>
                    <div className='logo'>
                        <img src="assets/dragonfruit.png" alt="" />
                    </div>
                    <div className='troley'>
                        <img src="assets/images.png" alt="" />
                        <div className='count'>{this.state.order}</div>
                    </div>  
                </div>
               <CardProduct onCounterChange={(value) => this.handleCounterChange(value) }/>
            </Fragment>
        )
    }
}

export default Product;