import classes from "./nav.module.css"
function Nav (){
    return (
        <nav>
          <div className={classes.logo}>
            <img src="assets/logo.png"/>
            <h2><span>E-</span>Shop</h2>
          </div>

          <ul className={classes.listTypes}>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>


          <ul className={classes.list}>
            <li><img src="assets/search.png"/></li>
            <li><img src="assets/cart.png"/></li>
            <li><img src="assets/profile.png"/></li>
          </ul>
        </nav>
      );

}


export default Nav;