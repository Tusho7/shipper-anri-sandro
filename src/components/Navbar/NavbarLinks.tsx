import React from 'react'
import { NavbarLinkProps } from './types'
const NavbarLink: React.FC<NavbarLinkProps> = ({linkText}) => {
    return  <li className="hover:cursor-pointer  navbar-link description">{linkText}</li>
}

export default NavbarLink