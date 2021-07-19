import Image from 'next/image';
import { Input } from './Input';
import { Logo } from './Logo';
import { Nav } from './Nav';
import {Shots} from './Shots';
import { Socials } from './Socials';

export const Menu = () => {
    return (
        <div className="menu">
            <Logo/>
            <Nav/>
            <Input/>
            <Shots/>
            <Socials/>
        </div>
    )    
}