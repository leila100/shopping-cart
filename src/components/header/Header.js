import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelectors";

import Logo from "../../assets/logo.png";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <img src={Logo} className='logo' alt='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
