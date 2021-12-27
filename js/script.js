const destinations = `[
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "../assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "../assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "../assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "../assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ]`

  const data = JSON.parse(destinations)


  const nameAstroMoon = document.querySelector('#moon')

  nameAstroMoon.addEventListener('click',(e)=>{
    const moonImg = document.querySelector("#planet-img").src = data[0].images.png;
    const moon = document.querySelector('.name').innerHTML = data[0].name;
    const moonDescripton = document.querySelector('.description').innerHTML = data[0].description;
    const moonDistance = document.querySelector('.distance-number').innerHTML = data[0].distance;
    const moonTravel = document.querySelector('.travel-days').innerHTML = data[0].travel;
    
  
  })
  
  const nameAstroMars = document.querySelector("#mars")
  
  nameAstroMars.addEventListener('click',()=>{
    const marsImg = document.querySelector("#planet-img").src = data[1].images.png;
    const mars = document.querySelector('.name').innerHTML = data[1].name;
    const marsDescripton = document.querySelector('.description').innerHTML = data[1].description;
    const marsDistance = document.querySelector('.distance-number').innerHTML = data[1].distance;
    const marsTravel = document.querySelector('.travel-days').innerHTML = data[1].travel;
    
  
  })
  
  const nameAstroEuropa = document.querySelector("#europa")
  
  nameAstroEuropa.addEventListener('click',()=>{
    const europaImg = document.querySelector("#planet-img").src = data[2].images.png;
    const europa = document.querySelector('.name').innerHTML = data[2].name;
    const europaDescripton = document.querySelector('.description').innerHTML = data[2].description;
    const europaDistance = document.querySelector('.distance-number').innerHTML = data[2].distance;
    const europaTravel = document.querySelector('.travel-days').innerHTML = data[2].travel;
    
  })
  
  const nameAstroTitan = document.querySelector("#titan")
  
  nameAstroTitan.addEventListener('click',()=>{
    const titanImg = document.querySelector("#planet-img").src = data[3].images.png;
    const titan = document.querySelector('.name').innerHTML = data[3].name;
    const titanDescripton = document.querySelector('.description').innerHTML = data[3].description;
    const titanDistance = document.querySelector('.distance-number').innerHTML = data[3].distance;
    const titanTravel = document.querySelector('.travel-days').innerHTML = data[3].travel;
    
  
  })

// loadData().then(data => showData(data));