import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import './App.css'

function App() {
  const [searchText, setSearchText] = useState('')
  const [debouncedSearchText] = useDebounce(searchText, 500)
  const [rhymingWords, setRhymingWords] = useState([])

  const getRhymingWords = async () => {
    if(debouncedSearchText.length === 0){
      setRhymingWords([])
      return
    }
    const res = await fetch(`https://api.datamuse.com/words?rel_rhy=${debouncedSearchText}`)
    let data = await res.json()
    setRhymingWords([...data])
  }

  useEffect(() => {
    getRhymingWords()
  }, [debouncedSearchText])

  return (
    <div className="App">
        <h1>Find Rhyming Words</h1>
        <input type={'text'} onChange={(e) => setSearchText(e.target.value)} />

        <h2>Rhyming words are</h2>
        {
          rhymingWords.length > 0 && rhymingWords.map(({word}, index) => {
            return <p key={index}>{word}</p>
          })
        }
    </div>
  )
}

export default App
