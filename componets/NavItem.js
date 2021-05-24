import Link from 'next/link';
function NavItem({cls='',clsI='', name, path, Icon, active = false , w , h}) {
    return (
        <li className='group'>
            {
                path ? (
                    <Link href={path}>
                        <a className={cls + ' transition-all ease-in-out duration-200 group-hover:text-red-500 flex items-center  ' + (active && ('text-red-500 text-lg'))}>
                            {Icon && (<Icon className={`fill-current ${clsI}  ` + (w && h && (`w-${w} h-${h}`))} />)}
                            {name}
                        </a>
                    </Link>
                )
                    :

                    <p className='flex items-center space-x-2'>
                        {Icon && (<Icon className={`fill-current ${clsI}  w-${w} h-${h}`}  />)}
                        <span>{name}</span>
                    </p>


            }

        </li>
    )
}

export default NavItem
