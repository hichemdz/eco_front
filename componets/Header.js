import { Container } from '../layout'
import Link from 'next/link';
import { NavItem } from './';
import { LoginIcon, ShoppingCartIcon, MenuAlt3Icon } from '@heroicons/react/solid'
function Header() {
    return (
        <header className='absolute top-0 left-0 w-full'>
            <nav className='py-10'>
                <Container >
                    <div className='flex text-gray-700 itens-center justify-between'>


                        <Link href='/'>
                            <a className='font-black text-xl'>Shoppy</a>
                        </Link>

                        <div className='flex items-center space-x-8 '>

                            <ul className='hidden text-sm md:flex items-center  space-x-8 font-black'>
                                <NavItem active={true} name='Home' path='/' />
                                <NavItem name='Categories' path='/Categories' />
                                <NavItem name='About us' path='/About' />
                                <NavItem name='Contact Us' path='/contact' />

                            </ul>
                            <ul className='flex text-sm  items-center  space-x-8 font-black'>
                                <NavItem w={6} h={6} name='' path='/login' Icon={LoginIcon} />
                                <NavItem w={6} h={6} name='' path='/cart' Icon={ShoppingCartIcon} />
                                <li className='block md:hidden'>
                                    <MenuAlt3Icon w={6} h={6} className='w-6 h-6' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
        </header>

    )
}

export default Header
