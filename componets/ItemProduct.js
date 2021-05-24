import Image from 'next/image';
function ItemProduct({ cls, src, name, w = 80, h = 80 }) {
    return (
        <div className='text-black text-center space-y-2'>
            <div className='h-24 flex items-center'>
                <Image
                    className={cls}
                    src={src}
                    height={h}
                    width={w}
                />
            </div>
            <p className='uppercase'>{name}</p>
        </div>
    )
}

export default ItemProduct
