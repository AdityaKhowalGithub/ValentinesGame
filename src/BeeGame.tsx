import React, { useRef, useEffect, useState } from "react";
import beeImageSrc from "./assets/Bee.png";

const BeeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState("loading"); // Game states: 'loading', 'playing', 'stopped'
  const [mazeWalls, setMazeWalls] = useState([
    { x: 300, y: 100, width: 1400, height: 40 },
    { x: 300, y: 900, width: 1400, height: 40 },
    { x: 300, y: 100, width: 40, height: 800 },
    { x: 1700, y: 100, width: 40, height: 800 },
    { x: 600, y: 100, width: 40, height: 500 },
    { x: 600, y: 600, width: 500, height: 40 },
    { x: 900, y: 200, width: 40, height: 400 },
    { x: 900, y: 200, width: 400, height: 40 },
    { x: 1260, y: 200, width: 40, height: 550 },
    { x: 940, y: 710, width: 320, height: 40 },
    { x: 1000, y: 400, width: 300, height: 40 },
  ]);

  const [endGoal, setEndGoal] = useState({
    x: 1600,
    y: 100,
    width: 100,
    height: 100,
  });

  const [gameWon, setGameWon] = useState(false);
  const beeSpeed = 20;
  const beeSize = 120;
  const beeCenter = { x: 400, y: 300 };
  const collisionTolerance = 40;

  const checkCollision = (newWalls) => {
    return newWalls.some(
      (wall) =>
        beeCenter.x + beeSize / 2 - collisionTolerance > wall.x &&
        beeCenter.x - beeSize / 2 + collisionTolerance < wall.x + wall.width &&
        beeCenter.y + beeSize / 2 - collisionTolerance > wall.y &&
        beeCenter.y - beeSize / 2 + collisionTolerance < wall.y + wall.height,
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const beeImage = new Image();
    beeImage.src = beeImageSrc;

    const renderLoadingScreen = () => {
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "beige";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "black";
        context.font = "30px Arial";
        context.fillText("Press S to Start", 250, 250);
        context.fillText("Press X to Exit", 250, 300);
      }
    };

    const render = () => {
      if (context && canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (!gameWon) {
          mazeWalls.forEach((wall) => {
            context.fillStyle = "brown";
            context.fillRect(wall.x, wall.y, wall.width, wall.height);
          });

          context.fillStyle = "lightgreen";
          context.fillRect(endGoal.x, endGoal.y, endGoal.width, endGoal.height);
        }

        context.drawImage(
          beeImage,
          beeCenter.x - beeSize / 2,
          beeCenter.y - beeSize / 2,
          beeSize,
          beeSize,
        );

        if (gameWon) {
          context.fillStyle = "pink";
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = "white";
          context.font = "40px Arial";
          context.fillText(
            "Will you BEEE my valentine?",
            100,
            canvas.height / 2 + 100,
          );
        }
      }
    };

    const handleKeyDown = (event) => {
      if (gameState === "loading") {
        if (event.key === "s") {
          setGameState("playing");
          render(); // Call render to ensure the game starts as soon as 'S' is pressed.
        } else if (event.key === "x") {
          setGameState("stopped");
        }
      } else if (gameState === "playing") {
        let deltaX = 0;
        let deltaY = 0;

        switch (event.key) {
          case "s":
            deltaY = beeSpeed;
            break;
          case "w":
            deltaY = -beeSpeed;
            break;
          case "d":
            deltaX = beeSpeed;
            break;
          case "a":
            deltaX = -beeSpeed;
            break;
        }

        const newWalls = mazeWalls.map((wall) => ({
          ...wall,
          x: wall.x - deltaX,
          y: wall.y - deltaY,
        }));

        if (!checkCollision(newWalls)) {
          const newEndGoal = {
            ...endGoal,
            x: endGoal.x - deltaX,
            y: endGoal.y - deltaY,
          };

          setMazeWalls(newWalls);
          setEndGoal(newEndGoal);

          if (
            beeCenter.x + beeSize / 2 > newEndGoal.x &&
            beeCenter.x - beeSize / 2 < newEndGoal.x + newEndGoal.width &&
            beeCenter.y + beeSize / 2 > newEndGoal.y &&
            beeCenter.y - beeSize / 2 < newEndGoal.y + newEndGoal.height
          ) {
            setGameWon(true);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (gameState === "loading") {
      renderLoadingScreen();
    } else if (gameState === "playing") {
      beeImage.onload = render;
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameState, mazeWalls, gameWon, endGoal]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default BeeGame;
