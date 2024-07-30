import React from 'react'

function FilterBeers({onSearch}) {

  function handleChange(e){
    const {value} = e.target
    onSearch(value)
  }

  return (
    <input 
      type="text"
      className='form-control'
      placeholder='search-beer'
      onChange={handleChange} 
    />
  )
}

export default FilterBeers