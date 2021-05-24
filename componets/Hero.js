import Image from 'next/image';

import { ItemProduct, Main , Search} from './';



function Hero() {

    return (
        <Main>
                <div className=' w-full  itens-center grid grid-cols-2'>
                    <div className='col-span-2 md:col-span-1  md:justify-start  flex items-center'>
                        <div className=' w-full'>
                            <div className='space-y-12 mx-auto sm:max-w-md'>
                                <h1 className='motion-safe:animate-bounce  font-roboto text-center text-gray-800 text-3xl md:text-4xl font-black '>Stylish Sneakers</h1>
                                <Search cls='md:max-w-md'/>
                                <div className='flex justify-around  items-center'>
                                    <ItemProduct name='shoes' src='/images/choses1.png' />
                                    <ItemProduct name='CLOTHES' src='/images/clothes.png' />
                                    <ItemProduct name='shose' src='/images/shose.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-1  md:flex justify-end items-center'>
                        <Image src='/images/hero_right.svg'
                            height={366}
                            width={366}
                        />

                    </div>
                </div>
          

        </Main>
    )
}

export default Hero
