import { HelpCircle, Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <form action="" className='w-full sm:w-auto'>
        {/*search bar form group*/}
        <div className="flex">
            {/*search bar text input*/}
            <div className="w-3/4 sm:w-96 bg-white rounded rounded-e-none border border-slate-200 p-2 flex justify-around items-center">
            <input type="text" name="search" id="search" className='border-y-0.5 w-full focus:outline-none text-sm' />
            {/*info icon */}
            <HelpCircle color='gray'/>
            </div>
            {/*filter select input*/}
            <div className="w-1/6 sm:w-30 bg-white rounded rounded-s-none rounded-e-none border-x-0 border border-slate-200 p-2 flex justify-around items-center">
            <select name="filter" id="filter" className='border-y-0.5 focus:outline-none text-sm'>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            </div>
            {/*search button submit with icon*/}
            <div className="bg-secondary rounded rounded-s-none p-2 flex justify-around items-center">
            <button type="submit" className='text-white text-sm focus:outline-none'><Search color="#00414d"/></button>
            </div>
        </div>
    </form>
  )
}
