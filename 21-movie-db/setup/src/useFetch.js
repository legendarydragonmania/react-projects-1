import React, { useState, useEffect } from 'react'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

function useFetch(urlParams) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, message: '' })
  const [data, setData] = useState(null)

  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'True') {
        setData(data.Search || data)
        setError({ show: false, message: '' })
      } else {
        setError({ show: true, message: data.Error })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])

  return { isLoading, error, data }
}

export default useFetch
