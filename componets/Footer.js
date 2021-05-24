import { LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { Container } from "../layout"
import { Fb, Tw, Yt, In } from "./Icons"
import NavItem from "./NavItem"
import Styles from '../styles/Home.module.css'
function Footer() {
    return (
        <footer className={Styles.footer}>

            <Container >
                <div className='grid grid-cols-4 lg:grid-cols-6 gap-5 py-5'>
                    <div className='col-span-2 space-y-5'>
                        <Link href='/'>
                            <a className='font-black' >Shoppy</a>
                        </Link>
                        <p className='text-sm'>
                            Praesent id quam tincidunt, hendrerit sem non, commodo dolor. Nam efficitur aliquet tristique. Integer sodales ante ut justo
                      </p>
                    </div>

                    <div className='space-y-5'>
                        <h3 className='font-black' >Links</h3>
                        <ul className='space-y-3'>
                            <NavItem name='Home' path='/' />
                            <NavItem name='Man' path='/Men' />
                            <NavItem name='Women' path='/Women' />
                            <NavItem name='Kids' path='/Kids' />

                        </ul>
                    </div>
                    <div className='space-y-5'>
                        <h3 className='font-black' >Informations</h3>
                        <ul className='space-y-3'>

                            <NavItem name='About us' path='/About' />
                            <NavItem name='Contact Us' path='/contact' />
                        </ul>
                    </div>

                    <div className='col-span-2 lg:col-span-1 space-y-5'>
                        <h3 className='font-black' >Company  Contact</h3>
                        <ul className='space-y-3'>

                            <NavItem name='shoppy@mail.com' w={5} h={5} Icon={MailIcon} />
                            <NavItem name='+21375821485' w={5} h={5} Icon={PhoneIcon} />
                            <NavItem name='Algeria , Blida' w={5} h={5} Icon={LocationMarkerIcon} />
                        </ul>
                    </div>

                    <div className='col-span-2 lg:col-span-1 space-y-5 '>
                        <h3 className='font-black text-center' >Company Media</h3>
                        <div className='flex w-full justify-center'>

                            <ul className='w-20 grid  grid-cols-2 gap-y-2  '>

                                <NavItem  cls='transition duration-200 ease-in-out transform hover:scale-125  flex items-center justify-center' name='' path='/' Icon={Fb} />
                                <NavItem  cls='transition duration-200 ease-in-out transform hover:scale-125 flex items-center justify-center' name='' path='/'  Icon={Tw} />
                                <NavItem  cls='transition duration-200 ease-in-out transform hover:scale-125 flex items-center justify-center' name='' path='/' Icon={Yt} />
                                <NavItem  cls='transition duration-200 ease-in-out transform hover:scale-125 flex items-center justify-center' name='' path='/' Icon={In} />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-center py-5 text-gray-600 font-black'>
                    <p>
                        Shopy &copy; 2021
                  </p>
                </div>
            </Container>

        </footer>
    )
}

export default Footer
