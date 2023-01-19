import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
export default class CartSummery extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem=>(
                            <DropdownItem key={cartItem.product.id}>
                            {cartItem.product.productName}
                          </DropdownItem>
                        ))
                    }
                </DropdownMenu>
              </UncontrolledDropdown>
      </div>
    )
  }
}
