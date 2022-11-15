import { useCallback, useRef, useState } from 'react'
import { useTypewriter as useTyper } from 'react-simple-typewriter'

export function useTypewriter(words: string[]): { word: string, blink: boolean } {
  const [blink, setBlink] = useState(true)
  const [charIdx, setCharIdx] = useState(0)

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const delaySpeed = 5000
  const handleType = useCallback((counter: number) => {
    setCharIdx(i => i + 1)
    const word = words[counter % words.length]
    if (charIdx === word.length) {
      setCharIdx(0)
      setBlink(true)
      timer.current = setTimeout(() => setBlink(false), delaySpeed)
    }
  }, [words, charIdx])

  const [word] = useTyper({
    words,
    loop: 0,
    typeSpeed: 300,
    deleteSpeed: 100,
    delaySpeed,
    onType: handleType,
  })
  return { word: word.toString(), blink }
}