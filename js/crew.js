const crew= `[
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]`

const data = JSON.parse(crew)

const crewName1 = document.querySelector('#douglas')
const crewName2 = document.querySelector("#mark")
const crewName3 = document.querySelector("#victor")
const crewName4 = document.querySelector("#anousheh")

  crewName1.addEventListener('click',(e)=>{
    document.querySelector("#crew-img").src = data[0].images.png;
    document.querySelector('.title-name').innerHTML = data[0].role;
    document.querySelector('.name').innerHTML = data[0].name;
    document.querySelector('.description').innerHTML = data[0].bio;
    crewName1.classList.add('active-tab')
    crewName2.classList.remove('active-tab')
    crewName3.classList.remove('active-tab')
    crewName4.classList.remove('active-tab')
  })
  
  crewName2.addEventListener('click',()=>{
    document.querySelector("#crew-img").src = data[1].images.png;
    document.querySelector('.title-name').innerHTML = data[1].role;
    document.querySelector('.name').innerHTML = data[1].name;
    document.querySelector('.description').innerHTML = data[1].bio;
    crewName2.classList.add('active-tab')
    crewName1.classList.remove('active-tab')
    crewName3.classList.remove('active-tab')
    crewName4.classList.remove('active-tab')
  })

  crewName3.addEventListener('click',()=>{
    document.querySelector("#crew-img").src = data[2].images.png;
    document.querySelector('.title-name').innerHTML = data[2].role;
    document.querySelector('.name').innerHTML = data[2].name;
    document.querySelector('.description').innerHTML = data[2].bio;
    crewName3.classList.add('active-tab')
    crewName1.classList.remove('active-tab')
    crewName2.classList.remove('active-tab')
    crewName4.classList.remove('active-tab')
  })
  
  
  crewName4.addEventListener('click',()=>{
    document.querySelector("#crew-img").src = data[3].images.png;
    document.querySelector('.title-name').innerHTML = data[3].role;
    document.querySelector('.name').innerHTML = data[3].name;
    document.querySelector('.description').innerHTML = data[3].bio;
    crewName4.classList.add('active-tab')
    crewName1.classList.remove('active-tab')
    crewName2.classList.remove('active-tab')
    crewName3.classList.remove('active-tab')
  })
