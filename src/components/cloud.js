//cloud settings

const myTags = [
    'JavaScript', 'CSS3', 'HTML5',
    'React.js',
    'express.js', 'git',
    'Node.js', 'Figma',
    'SASS', 'MongoDB', 'WebPack', 'REST API', "responsive", "VSCode", "English", "npm", "React Router", "CRUD"
];


const resizeCloudFunction = function() {

    if (screen.width <= 420){
        return 130
    }
    else if (screen.width <= 550){
        return 200
    }
    else return 250
}


window.addEventListener('resize', () => {
    resizeCloudFunction()
    console.log(resizeCloudFunction())
});


const tagCloud = TagCloud('.cloud', myTags,{

  radius: resizeCloudFunction(),
  maxSpeed: 'fast',
  initSpeed: "normal",
  direction: 135,
  keep: true
  
});







