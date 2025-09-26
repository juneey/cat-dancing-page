import { useState, useEffect, useCallback } from 'react'

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true)
  const [currentAnimation, setCurrentAnimation] = useState('bounce')
  const [animationSpeed, setAnimationSpeed] = useState(1)

  const animations = [
    { name: 'bounce', label: '통통 튀기' },
    { name: 'wiggle', label: '좌우 흔들기' },
    { name: 'spin', label: '빙글빙글' },
    { name: 'pulse', label: '펄스' },
    { name: 'dance', label: '댄스' }
  ]

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const changeAnimation = useCallback((animationName) => {
    setCurrentAnimation(animationName)
  }, [])

  const nextAnimation = useCallback(() => {
    const currentIndex = animations.findIndex(anim => anim.name === currentAnimation)
    const nextIndex = (currentIndex + 1) % animations.length
    setCurrentAnimation(animations[nextIndex].name)
  }, [currentAnimation, animations])

  const previousAnimation = useCallback(() => {
    const currentIndex = animations.findIndex(anim => anim.name === currentAnimation)
    const prevIndex = currentIndex === 0 ? animations.length - 1 : currentIndex - 1
    setCurrentAnimation(animations[prevIndex].name)
  }, [currentAnimation, animations])

  const handleKeyDown = useCallback((event) => {
    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault()
        toggleAnimation()
        break
      case 'ArrowRight':
        event.preventDefault()
        nextAnimation()
        break
      case 'ArrowLeft':
        event.preventDefault()
        previousAnimation()
        break
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
        event.preventDefault()
        const index = parseInt(event.key) - 1
        if (animations[index]) {
          setCurrentAnimation(animations[index].name)
        }
        break
      default:
        break
    }
  }, [toggleAnimation, nextAnimation, previousAnimation, animations])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return {
    isAnimating,
    currentAnimation,
    animationSpeed,
    animations,
    toggleAnimation,
    changeAnimation,
    nextAnimation,
    previousAnimation,
    setAnimationSpeed
  }
}