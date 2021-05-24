import { SearchIcon } from '@heroicons/react/solid'
const Search = ({cls}) => {
    return (
        <div className={'relative ' + cls}>
            <input className='rounded-3xl w-full pl-3 pr-10 py-3' type='search' placeholder='Find your styling' />
            <SearchIcon className='w-6 h-6 absolute right-3 top-3' />
        </div>
    )
}

export default Search
