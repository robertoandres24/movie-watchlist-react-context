import React, { useState } from 'react'

export const Add = () => {


  const [query, setQuery] = useState("")

  const onChange = e => {
    e.preventDefault()
    setQuery(e.target.value)
    const apiKey = process.env.REACT_APP_TMBD_API_KEY
    let params = [
      '&include_adult=false',
      '&language=en-US',
      '&page=1',
    ]
    params = [...params].join('')
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}${params}&query=${query}`

    fetch(url).then(res => res.json())
      .then(data => console.log(data))

  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  )
}
