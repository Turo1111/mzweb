
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState(false)

    useEffect(() => {
      const fetchResource = async () => {
          try {
              let res = await fetch(url)
              let response = await res.json()
              console.log("aqui",response)
              setData(response)
              
          } catch (error) {
              setError(true)
          }
      }
      fetchResource()
    }, [url])

    return { data, error }
}


export default useFetch