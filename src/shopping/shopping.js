
import { Fragment } from "react"
import { Link } from "react-router-dom";

import classes from "./shopping.module.css"

function Shopping (){
        return(
            <Fragment>
                <main>
                    <div className={classes.header}>
                        <h2>Shopping cart</h2>
                        <div className={classes.cart}>
                            <img src="assets/cart.png"/>
                            <img src="assets/cart.png"/>

                        </div>
                    </div>
                    <table id={classes.customers}>
                        <tr>
                            <th>Product</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Amount</th>
                            <th>Price</th>

                        </tr>
                        <tr>
                            <td className={classes.productItem}>
                                <img src="assets/img_girl.jpg"/>
                                <h3>T-shirt Summer Vibes
                                    <span>#2665</span>
                                </h3>
                            </td>
                            <td>white</td>
                            <td>Xl</td>
                            <td className={classes.amount}> <span> -  1  +</span></td>
                            <td>
                                <span>$89.99</span>
                                <span className={classes.delete}><i class="bi bi-x"></i></span>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.productItem}>
                                <img src="assets/img_girl.jpg"/>
                                <h3>T-shirt Summer Vibes
                                    <span>#2665</span>
                                </h3>
                            </td>
                            <td>white</td>
                            <td>Xl</td>
                            <td className={classes.amount}> <span> -  1  +</span></td>
                            <td>
                                <span>$89.99</span>
                                <span className={classes.delete}><i class="bi bi-x"></i></span>
                            </td>                        </tr>
                       
                        </table>

                        <div className={classes.checkout}>
                                <h3> <i class="bi bi-arrow-left"></i> Continue Shopping</h3>
                                <div className={classes.cost}>
                                    <input type="text" placeholder="Promo Code" />
                                     <h3>Total Cost  <strong>$159.88</strong></h3>
                                      <Link className={classes.checkoutButton} to="/payment" > checkout</Link>

                                </div>
               

                        </div>
                </main>
            </Fragment>
        )
}

export default Shopping