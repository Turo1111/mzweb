
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [ data, setData ] = useState([])
    const [ load, setLoad ] = useState(true)
    const [ error, setError ] = useState(false)

    useEffect(() => {
      const fetchResource = async () => {
          try {
              let res = await fetch(url)
              let response = await res.json()
              setData(response)
              setLoad(true)
              
          } catch (error) {
              setError(true)
          }
      }
      fetchResource()
    }, [url])

    return { data, load, error }
}


export default useFetch