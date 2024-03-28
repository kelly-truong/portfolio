import react, { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options) => {
    const containerRef = useRef([]);
    const [isVisible, setIsVisible] = useState([])
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const vis = []
            entries.forEach(x => {
                if (x.isIntersecting) {
                    vis.push(x.target.id)
                }
            })
            setIsVisible(vis)
        }, options)

        if (containerRef.current?.length > 0) {
            containerRef.current.forEach(x => {
                observer.observe(x)
            })
        }
        return () => {
            if (containerRef.current?.length > 0) {
                containerRef.current.forEach(x => {
                    observer.unobserve(x)
                    observer.disconnect();
                })
            }
        }
    }, [containerRef, options])
    return [containerRef, isVisible]
}