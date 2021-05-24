import Image from 'next/image';
import {StarIcon} from '@heroicons/react/solid'
import {HeartIcon} from '@heroicons/react/outline'
function Product({ cls, src, title,price,reviews, h = 202, w = 175.93 }) {
    return (
        <div className='text-black  group  mx-auto space-y-3'>
            <div className=''>
                <Image
                    layout='responsive'
                    className='transition duration-200 ease-in-out transform-gpu group-hover:scale-105 origin-top'
                    src={src}
                    height={h}
                    width={w}
                />
            </div>
            <p className='transition duration-200 ease-in-out group-hover:text-red-500 group-hover:font-black truncate w-48'>{title}</p>
            <p className='text-red-500 font-semiblod'>{price}</p>
            <div className='w-full flex justify-between items-center'>
                <div className='flex items-center space-x-1'>
                    <StarIcon className='w-5 h-5 text-red-500' />
                    <p>{reviews}</p>
                </div>

                <HeartIcon className='hover:animate-bounce w-4 h-4  fill-current cursor-pointer hover:text-red-500' />
            </div>
            
        </div>
    )
}

export default Product
