import react, { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options) => {
    const containerRef = useRef();
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
            } else
                setIsVisible(false)
        }, options)

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
                observer.disconnect();
            }
        }
    }, [containerRef, options])
    return [containerRef, isVisible]
}