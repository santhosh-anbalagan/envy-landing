
import React from 'react';
import { Link, Element } from 'react-scroll';

interface ScrollToSectionProps {
    to: string;
    children: React.ReactNode;
}

const ScrollToSection: React.FC<ScrollToSectionProps> = ({ to, children }) => (
    <>
        <Link to={to} smooth={true} offset={-70} duration={500}>
            {children}
        </Link>
        <Element name={to}>{/* The target element to scroll to */}</Element>
    </>
);

export default ScrollToSection;