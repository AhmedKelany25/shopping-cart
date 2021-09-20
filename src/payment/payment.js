import { Fragment } from "react";
import classes from "./payment.module.css"


function Payment (){
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

                    <div className={classes.gridcontainer}>
                    <div className={classes.item1}>
                        <div>
                            <button>LogIn</button>
                            <button className={ classes.whiteBack}>Sign Up</button>

                        </div>
                        <form>
                            <h2>Shipping and payment</h2>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Email"/>

                        </form>
                    </div>
                    <div className={classes.item2}>
                        <div className={classes.paymentMethods}>
                            <h3>Payment Methods</h3><br/>
                            <div className={classes.paypal}></div>
                            <div className={classes.visa}></div>
                            <div className={classes.mastercard}></div>
                            <div className={classes.visa}></div>
                            <div className={classes.mastercard}></div>
                            <div className={classes.paypal}></div>

                        </div>
                        <div className={classes.paymentMethods}>
                            <h3>Delivery methode</h3><br/>
       
                            <div className={classes.paypal}></div>
                            <div className={classes.visa}></div>
                            <div className={classes.mastercard}></div>
                            <div className={classes.visa}></div>
                            <div className={classes.mastercard}></div>
                            <div className={classes.paypal}></div>

                        </div>

                    </div>
                    <div className={classes.item3}>
                        <div className={classes.cartproceed}>
                            <h3>Your Cart</h3>
                            <div className={classes.cartitem}>
                                <div className={classes.itemProduct}>
                                    <img src="assets/img_girl.jpg"/>
                                    <p>T-shirt <br/> Summer Vibes <span>#2185</span></p>
                                </div>
                                <h4>$89</h4>

                            </div>

                            <div className={classes.cartitem}>
                                <div className={classes.itemProduct}>
                                    <img src="assets/img_girl.jpg"/>
                                    <p>T-shirt <br/> Summer Vibes <span>#2185</span></p>
                                </div>
                                <h4>$89</h4>

                            </div>
                            
                        </div>

                        <button>Total Cost  <strong>$159,50</strong></button>
                        <p className={classes.free}> You are <strong> $50</strong> Away <br/>of A free Shipping</p>
                    </div>
                    </div>

                    <div className={classes.checkout}>
                                <h3> <i class="bi bi-arrow-left"></i> Back</h3>
                                <div className={classes.cost}>
                                    <button className={classes.whiteBack }  > Proceed to payment</button>

                                      <button className={classes.checkoutButton}  > Proceed to payment</button>

                                </div>
               

                        </div>
            </main>


        </Fragment>
    )
}

export default Payment