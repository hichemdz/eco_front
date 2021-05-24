function Container({ children, cls}) {
    return (
        <div className={'grid grid-cols-12 ' }>
            <div className='col-span-12 px-4 lg:px-0 lg:col-start-2 lg:col-span-10 overflow-hidden'>
             {children}
            </div>
        </div>
    )
}

export default Container
