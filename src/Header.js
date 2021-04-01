import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum'


function Header() {
    return (
        <div className='header'>
            {/* <h1>Hello header</h1> */}
            <IconButton>
            <PersonIcon fontSize='large' className="header_icon" />
            </IconButton>

            {/* <img className='header_logo' src="https://www.flaticon.com/svg/vstatic/svg/732/732251.svg?token=exp=1616224350~hmac=10a20732ef6454a73d6dd74399dbdfe0" alt='<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>'/> */}
            <IconButton>
            <ForumIcon fontSize='large' className="header_icon" />
            </IconButton>
           
        </div>
    );
}

export default Header;
