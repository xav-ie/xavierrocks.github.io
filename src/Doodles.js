
import Project from './Project';

const artAndDoodles = [{
        "name": "Smart Rockets",
        "date": "May 2020",
        "desc": "This is an awesome little doodle where the rockets 'learn' to hit the red dot through a genetic algorithm. This means every new generation of rockets is from the previous version. I score the rockets based on how fit they are, and the goal is to hit the red dot in the fastest time possible. The fittest rockets are allowed to generate more children with a small amount of mutation so that the rockets may evolve to be faster. This is from a YouTube tutorial by Dan Shiffman. ",
        "technologiesUsed" : ["JavaScript", "p5.js"],
        "url": "/projects/smart-rockets",
        "imageURL": "rockets.gif"
    },
    {
        "name": "Moiré Effect",
        "date": "August 2018",
        "desc": "What you are seeing is actually just two sets of horizontal lines being rotated. The vertical lines that appear are an optical illusion, the Moiré effect.",
        "technologiesUsed" : ["JavaScript", "p5.js"],
        "url": "/projects/moire-squares",
        "imageURL": "display.gif"
    },
    {
        "name": "Binary Numbers",
        "date": "March 2019",
        "desc": "I got most of my code following a tutorial by Dan Shiffman. What this does is show a binary representation of a number through the dots at the top. The decimal representation is in the center. I modified it to respond to mouse events so users can shift the binary number left and right. You can also enter in a decimal number and it will automatically convert it to binary!",
        "technologiesUsed" : ["JavaScript", "p5.js"],
        "url": "/projects/binary-numbers",
        "imageURL": "capture.PNG"
    },
    {
        "name": "Pong",
        "date": "May 2019",
        "desc": "I remade Pong! This is two player, player one moves with WASD and player two moves with the arrow keys.",
        "technologiesUsed" : ["JavaScript", "p5.js"],
        "url": "/projects/pong",
        "imageURL": "capture.gif"
    },
    {
        "name": "Raycasting",
        "date": "May 2019",
        "desc": "Following a tutorial by Professor Dan Shiffman at NYU, I re-created the raycasting demo that he created. This is not my original work, but I hope to expand on his tutorial in the future and make a small game.",
        "technologiesUsed" : ["JavaScript", "p5.js"],
        "url": "/projects/raycasting",
        "imageURL": "opt.gif"
    }];

const Projects = ()=>{
    return (
	<div className="section">
	    <h2>Art and Doodles</h2>
	    <ul>
		{artAndDoodles.map((p,i) => <Project key={p.name} project={p}/>)} 
	    </ul>
	</div>
    );
}

export default Projects;
