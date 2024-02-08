// // import React, { useRef, useEffect, useState } from "react";
// // import beeImageSrc from "./assets/Bee.png";

// // const BeeGame = () => {
// //   const canvasRef = useRef<HTMLCanvasElement>(null);
// //   // Starting with a simple maze structure; each wall is defined with x, y, width, height
// //   const [mazeWalls, setMazeWalls] = useState([
// //     { x: -100, y: -200, width: 900, height: 20 }, // Top border
// //     { x: -100, y: 600, width: 900, height: 20 }, // Bottom border
// //     { x: -100, y: -200, width: 20, height: 820 }, // Left border
// //     { x: 800, y: -200, width: 20, height: 820 }, // Right border
// //     // Add more walls as needed to create a challenging maze
// //     { x: 100, y: 100, width: 600, height: 20 }, // Example interior wall
// //     { x: 100, y: 120, width: 20, height: 200 }, // Example vertical wall
// //   ]);
// //   const [endGoal, setEndGoal] = useState({
// //     x: 650,
// //     y: 550,
// //     width: 100,
// //     height: 100,
// //   });
// //   const [gameWon, setGameWon] = useState(false);
// //   const beeSpeed = 20; // Increased speed for noticeable movement
// //   const beeSize = 80; // Increased bee size for zoomed-in effect
// //   const beeCenter = { x: 400, y: 300 }; // Center position of the bee on the canvas

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const context = canvas?.getContext("2d");
// //     const beeImage = new Image();
// //     beeImage.src = beeImageSrc;

// //     const render = () => {
// //       if (context && canvas) {
// //         context.clearRect(0, 0, canvas.width, canvas.height);

// //         if (!gameWon) {
// //           // Draw the maze walls
// //           mazeWalls.forEach((wall) => {
// //             context.fillStyle = "brown";
// //             context.fillRect(wall.x, wall.y, wall.width, wall.height);
// //           });

// //           // Draw the end goal
// //           context.fillStyle = "lightgreen";
// //           context.fillRect(endGoal.x, endGoal.y, endGoal.width, endGoal.height);
// //         }

// //         // Draw the bee
// //         context.drawImage(
// //           beeImage,
// //           beeCenter.x - beeSize / 2,
// //           beeCenter.y - beeSize / 2,
// //           beeSize,
// //           beeSize,
// //         );

// //         if (gameWon) {
// //           context.fillStyle = "pink";
// //           context.fillRect(0, 0, canvas.width, canvas.height);
// //           context.fillStyle = "white";
// //           context.font = "30px Arial";
// //           context.fillText(
// //             "Will you BEEE my valentine?",
// //             150,
// //             canvas.height / 2 + 60,
// //           );
// //         }
// //       }
// //     };

// //     beeImage.onload = render;

// //     const handleKeyDown = (event: KeyboardEvent) => {
// //       if (!gameWon) {
// //         let deltaX = 0;
// //         let deltaY = 0;

// //         switch (event.key) {
// //           case "ArrowDown":
// //             deltaY = beeSpeed;
// //             break;
// //           case "ArrowUp":
// //             deltaY = -beeSpeed;
// //             break;
// //           case "ArrowRight":
// //             deltaX = beeSpeed;
// //             break;
// //           case "ArrowLeft":
// //             deltaX = -beeSpeed;
// //             break;
// //         }

// //         // Calculate new positions for walls and end goal
// //         const newWalls = mazeWalls.map((wall) => ({
// //           ...wall,
// //           x: wall.x - deltaX,
// //           y: wall.y - deltaY,
// //         }));

// //         const newEndGoal = {
// //           ...endGoal,
// //           x: endGoal.x - deltaX,
// //           y: endGoal.y - deltaY,
// //         };

// //         // Check for collisions with walls before allowing the move
// //         const collision = newWalls.some((wall) => {
// //           return (
// //             beeCenter.x + beeSize / 2 > wall.x &&
// //             beeCenter.x - beeSize / 2 < wall.x + wall.width &&
// //             beeCenter.y + beeSize / 2 > wall.y &&
// //             beeCenter.y - beeSize / 2 < wall.y + wall.height
// //           );
// //         });

// //         if (!collision) {
// //           setMazeWalls(newWalls);
// //           setEndGoal(newEndGoal);
// //           // Check if the new end goal position collides with the bee's center to win the game
// //           if (
// //             beeCenter.x + beeSize / 2 > newEndGoal.x &&
// //             beeCenter.x - beeSize / 2 < newEndGoal.x + newEndGoal.width &&
// //             beeCenter.y + beeSize / 2 > newEndGoal.y &&
// //             beeCenter.y - beeSize / 2 < newEndGoal.y + newEndGoal.height
// //           ) {
// //             setGameWon(true);
// //           }
// //         }
// //       }
// //     };

// //     window.addEventListener("keydown", handleKeyDown);

// //     return () => window.removeEventListener("keydown", handleKeyDown);
// //   }, [mazeWalls, gameWon, endGoal]);

// //   return <canvas ref={canvasRef} width={1080} height={1080} />;
// // };

// // export default BeeGame;

// import React, { useRef, useEffect, useState } from "react";
// import beeImageSrc from "./assets/Bee.png";

// const BeeGame = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   // Adjusting the initial positions and sizes of the walls for a more zoomed-in effect
//   const [mazeWalls, setMazeWalls] = useState([
//     { x: -200, y: -400, width: 1400, height: 40 }, // Top border, making it thicker for zoom effect
//     { x: -200, y: 800, width: 1400, height: 40 }, // Bottom border
//     { x: -200, y: -400, width: 40, height: 1240 }, // Left border
//     { x: 1000, y: -400, width: 40, height: 1240 }, // Right border
//     // Example interior walls, adjusted for zoom
//     { x: 200, y: 200, width: 600, height: 40 }, // An interior horizontal wall
//     { x: 200, y: 240, width: 40, height: 400 }, // An interior vertical wall
//   ]);
//   const [endGoal, setEndGoal] = useState({
//     x: 700,
//     y: 700,
//     width: 100,
//     height: 100,
//   }); // Making the goal larger
//   const [gameWon, setGameWon] = useState(false);
//   const beeSpeed = 20; // Adjusted speed to match the zoom level
//   const beeSize = 120; // Increased size for a more zoomed-in appearance
//   const beeCenter = { x: 400, y: 300 }; // Center position of the bee on the canvas

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext("2d");
//     const beeImage = new Image();
//     beeImage.src = beeImageSrc;

//     const render = () => {
//       if (context && canvas) {
//         context.clearRect(0, 0, canvas.width, canvas.height);

//         if (!gameWon) {
//           // Draw the maze walls
//           mazeWalls.forEach((wall) => {
//             context.fillStyle = "black";
//             context.fillRect(wall.x, wall.y, wall.width, wall.height);
//           });

//           // Draw the end goal
//           context.fillStyle = "lightgreen";
//           context.fillRect(endGoal.x, endGoal.y, endGoal.width, endGoal.height);
//         }

//         // Draw the bee
//         context.drawImage(
//           beeImage,
//           beeCenter.x - beeSize / 2,
//           beeCenter.y - beeSize / 2,
//           beeSize,
//           beeSize,
//         );

//         if (gameWon) {
//           context.fillStyle = "pink";
//           context.fillRect(0, 0, canvas.width, canvas.height);
//           context.fillStyle = "white";
//           context.font = "40px Arial"; // Adjusted for zoom
//           context.fillText(
//             "Will you BEEE my valentine?",
//             100,
//             canvas.height / 2 + 100,
//           ); // Adjusted text position for zoom
//         }
//       }
//     };

//     beeImage.onload = render;

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (!gameWon) {
//         let deltaX = 0;
//         let deltaY = 0;

//         switch (event.key) {
//           //case of w key being pressed move the bee up
//           case "s":
//             deltaY = beeSpeed;
//             break;
//           //case of s key being pressed move the bee down
//           case "w":
//             deltaY = -beeSpeed;
//             break;
//           //case of a key being pressed move the bee left
//           case "d":
//             deltaX = beeSpeed;
//             break;
//           //case of d key being pressed move the bee right
//           case "a":
//             deltaX = -beeSpeed;
//             break;
//         }

//         // Calculate new positions for walls and end goal
//         const newWalls = mazeWalls.map((wall) => ({
//           ...wall,
//           x: wall.x - deltaX,
//           y: wall.y - deltaY,
//         }));

//         const newEndGoal = {
//           ...endGoal,
//           x: endGoal.x - deltaX,
//           y: endGoal.y - deltaY,
//         };

//         // Check for collisions with walls before allowing the move
//         const collision = newWalls.some((wall) => {
//           return (
//             beeCenter.x + beeSize / 2 > wall.x &&
//             beeCenter.x - beeSize / 2 < wall.x + wall.width &&
//             beeCenter.y + beeSize / 2 > wall.y &&
//             beeCenter.y - beeSize / 2 < wall.y + wall.height
//           );
//         });

//         if (!collision) {
//           setMazeWalls(newWalls);
//           setEndGoal(newEndGoal);
//           // Check if the new end goal position collides with the bee's center to win the game
//           if (
//             beeCenter.x + beeSize / 2 > newEndGoal.x &&
//             beeCenter.x - beeSize / 2 < newEndGoal.x + newEndGoal.width &&
//             beeCenter.y + beeSize / 2 > newEndGoal.y &&
//             beeCenter.y - beeSize / 2 < newEndGoal.y + newEndGoal.height
//           ) {
//             setGameWon(true);
//           }
//         }
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [mazeWalls, gameWon, endGoal]);

//   return <canvas ref={canvasRef} width={800} height={800} />;
// };

// export default BeeGame;
import React, { useRef, useEffect, useState } from 'react';
import beeImageSrc from './assets/Bee.png';

const BeeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [mazeWalls, setMazeWalls] = useState([
  //   // Initial walls setup
  //   { x: 300, y: 100, width: 1400, height: 40 },
  //   { x: 300, y: 900, width: 1400, height: 40 },
  //   { x: 300, y: 100, width: 40, height: 800 },
  //   { x: 1700, y: 100, width: 40, height: 800 },
  //   // Additional walls
  //   { x: 600, y: 100, width: 40, height: 500 },
  //   { x: 600, y: 600, width: 500, height: 40 },
  // ]);
  // const [endGoal, setEndGoal] = useState({ x: 1500, y: 800, width: 200, height: 200 });
  const [mazeWalls, setMazeWalls] = useState([
    { x: 300, y: 100, width: 1400, height: 40 }, // Top border
    { x: 300, y: 900, width: 1400, height: 40 }, // Bottom border
    { x: 300, y: 100, width: 40, height: 800 }, // Left border
    { x: 1700, y: 100, width: 40, height: 800 }, // Right border
    // Existing walls
    { x: 600, y: 100, width: 40, height: 500 },
    { x: 600, y: 600, width: 500, height: 40 },
    // Additional walls for complexity
    { x: 900, y: 200, width: 40, height: 400 }, // Vertical wall
    { x: 900, y: 200, width: 400, height: 40 }, // Horizontal wall towards the right
    { x: 1260, y: 200, width: 40, height: 550 }, // Vertical wall on the right, creating a passage
    { x: 940, y: 710, width: 320, height: 40 }, // Horizontal wall below the passage
    { x: 1000, y: 400, width: 300, height: 40 }, // Additional horizontal wall for a dead end
    // You can adjust these walls or add more to increase complexity
  ]);
  
  const [endGoal, setEndGoal] = useState({
    x: 1600, // Moved slightly if needed to fit the new layout
    y: 800,
    width: 100,
    height: 100,
  });
  
  const [gameWon, setGameWon] = useState(false);
  const beeSpeed = 20;
  const beeSize = 120;
  const beeCenter = { x: 400, y: 300 };

  // Function to check for wall collisions
  const checkCollision = (newWalls) => {
    return newWalls.some(wall => 
      beeCenter.x + beeSize / 2 > wall.x &&
      beeCenter.x - beeSize / 2 < wall.x + wall.width &&
      beeCenter.y + beeSize / 2 > wall.y &&
      beeCenter.y - beeSize / 2 < wall.y + wall.height
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const beeImage = new Image();
    beeImage.src = beeImageSrc;

    const render = () => {
      if (context && canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (!gameWon) {
          mazeWalls.forEach(wall => {
            context.fillStyle = 'brown';
            context.fillRect(wall.x, wall.y, wall.width, wall.height);
          });

          context.fillStyle = 'lightgreen';
          context.fillRect(endGoal.x, endGoal.y, endGoal.width, endGoal.height);
        }

        context.drawImage(beeImage, beeCenter.x - beeSize / 2, beeCenter.y - beeSize / 2, beeSize, beeSize);

        if (gameWon) {
          context.fillStyle = "pink";
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = "white";
          context.font = "40px Arial";
          context.fillText("Will you BEEE my valentine?", 100, canvas.height / 2 + 100);
        }
      }
    };

    beeImage.onload = render;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!gameWon) {
        let deltaX = 0;
        let deltaY = 0;

        switch (event.key) {
          case 's': deltaY = beeSpeed; break;
          case 'w': deltaY = -beeSpeed; break;
          case 'd': deltaX = beeSpeed; break;
          case 'a': deltaX = -beeSpeed; break;
        }

        // Calculate new positions for walls and end goal
        const newWalls = mazeWalls.map(wall => ({
          ...wall,
          x: wall.x - deltaX,
          y: wall.y - deltaY,
        }));

        // Check for collisions with the new wall positions
        if (!checkCollision(newWalls)) {
          const newEndGoal = {
            ...endGoal,
            x: endGoal.x - deltaX,
            y: endGoal.y - deltaY,
          };

          setMazeWalls(newWalls);
          setEndGoal(newEndGoal);

          // Check if the bee has reached the end goal
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

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mazeWalls, gameWon, endGoal]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default BeeGame;