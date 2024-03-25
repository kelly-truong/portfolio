import react, { useEffect, useRef, useState } from 'react'
import './loading.scss'

const Canvas = () => {
    const canvasRef = useRef(null)
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    const balls = useRef([]);

    useEffect(() => {
        if (canvas && context) {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            animationLoop();
        }

    }, [canvas, context])


    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
    let rgb = [
        "rgb(26, 188, 156)",
        "rgb(46, 204, 113)",
        "rgb(52, 152, 219)",
        "rgb(155, 89, 182)",
        "rgb(241, 196, 15)",
        "rgb(230, 126, 34)",
        "rgb(231, 76, 60)"
    ]
    const drawBall = (ball) => {
        context.fillStyle = ball.style
        context.beginPath()
        context.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
        context.closePath()
        context.fill()
    }

    const createBall = (mouseX, mouseY) => {
        const start = {
            x: mouseX + getRandomInt(-20, 20),
            y: mouseY + getRandomInt(-20, 20),
            size: getRandomInt(10, 20)
        };
        const end = {
            x: start.x + getRandomInt(-300, 300),
            y: start.y + getRandomInt(-300, 300)
        };
        const style = rgb[getRandomInt(0, rgb.length - 1)]
        return { start, end, x: start.x, y: start.y, size: start.size, style, time: 0, ttl: 100 };
    };



    const animationLoop = () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.globalCompositeOperation = 'lighter';
        drawBalls();

        let aliveBalls = [];
        for (let i = 0; i < balls.current.length; i++) {
            if (balls.current[i].time <= balls.current[i].ttl) {
                aliveBalls.push(balls.current[i]);
            }
        }
        balls.current = aliveBalls;

        requestAnimationFrame(animationLoop);
    }

    const drawBalls = () => {
        balls.current.forEach(x => {
            updateBall(x)
            drawBall(x)
        })
    }

    const easeOutQuart = (x) => {
        return 1 - Math.pow(1 - x, 4);
    };
    const updateBall = (ball) => {
        if (ball.time <= ball.ttl) {
            let progress = 1 - (ball.ttl - ball.time) / ball.ttl;
            ball.size = ball.start.size * (1 - easeOutQuart(progress));
            ball.x = ball.x + (ball.end.x - ball.x) * 0.01;
            ball.y = ball.y + (ball.end.y - ball.y) * 0.01;
        }
        ball.time++;
    };
    const onMouseMove = (e) => {

            balls.current.push(createBall(e.clientX, e.clientY))
    }

    return <canvas ref={canvasRef}
        onMouseMove={onMouseMove}
    />
}

export default Canvas