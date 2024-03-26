import react, { useEffect, useRef, useState } from 'react'
import './loading.scss'

const Canvas = () => {
    const canvasRef = useRef(null)
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    const petals = useRef([]);
    const throttleTimeoutRef = useRef(null);

    useEffect(() => {
        if (canvas && context) {
            const resize = () => {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
            }
            resize();
            animationLoop();
            window.addEventListener("resize", resize)
        }

    }, [canvas, context])


    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    const drawPetal = (petal) => {
        const { x, y, size, rotation } = petal;
        context.fillStyle = "pink"
        context.save();
        context.translate(x, y);
        context.rotate(rotation);
        context.beginPath();
        context.moveTo(0, 0);
        context.quadraticCurveTo(-size / 2, -size / 2, 0, -size);
        context.quadraticCurveTo(size / 2, -size / 2, 0, 0);
        context.closePath();
        context.fill();
        context.restore();
    }

    const createPetal = (mouseX, mouseY) => {
        const start = {
            x: mouseX + getRandomInt(-20, 20),
            y: mouseY + getRandomInt(-20, 20),
            size: getRandomInt(20, 30)
        };
        const end = {
            x: start.x + getRandomInt(-300, 300),
            y: start.y + getRandomInt(0, 300)
        };
        const rotation = Math.random() * Math.PI * 2;
        return { start, end, x: start.x, y: start.y, size: start.size, rotation, time: 0, ttl: 300 };
    };



    const animationLoop = () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        drawPetals();

        let alivePetals = [];
        for (let i = 0; i < petals.current.length; i++) {
            if (petals.current[i].time <= petals.current[i].ttl) {
                alivePetals.push(petals.current[i]);
            }
        }
        petals.current = alivePetals;

        requestAnimationFrame(animationLoop);
    }

    const drawPetals = () => {
        petals.current.forEach(x => {
            updatePetal(x)
            drawPetal(x)
        })
    }

    const easeOutQuart = (x) => {
        return 1 - Math.pow(1 - x, 4);
    };
    const updatePetal = (petal) => {
        if (petal.time <= petal.ttl) {
            let progress = 1 - (petal.ttl - petal.time) / petal.ttl;
            petal.size = petal.start.size * (1 - easeOutQuart(progress));
            petal.x = petal.x + (petal.end.x - petal.x) * 0.01;
            petal.y = petal.y + (petal.end.y - petal.y) * 0.01;
        }
        petal.time++;
    };
    const onMouseMove = (e) => {
        if (!throttleTimeoutRef.current) {
            // Throttle the mousemove event
            throttleTimeoutRef.current = setTimeout(() => {
                petals.current.push(createPetal(e.clientX, e.clientY))
                throttleTimeoutRef.current = null;
            }, 50); // Adjust the throttle interval (in milliseconds) as needed
        }
    }

    return <canvas ref={canvasRef}
        style={{
            position: "fixed"
        }}
        onMouseMove={onMouseMove}
    />
}

export default Canvas;