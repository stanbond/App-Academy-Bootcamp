
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator () {
  // Create an a tag
  // Set the a tag's innerHTML to be the dog's name
  // Set the a tag's href to be the dog's information link
  // Create a li tag
  // Give the li tag the class of 'dog-link'
  // Append the a tag to the li tag
  // Push the completed li into an array of the dog links completed so far.
  let links = []
  // for (let i = 0; i < dogs.length; i++) {
    Object.keys(dogs).forEach(key => {
      const a = document.createElement("a");
      const li = document.createElement("li");
      a.setAttribute("href", dogs[key]);
      a.innerText = key;
      li.classList.add("dog-link");
      li.classList.add("hide-dog");
      li.appendChild(a);
      links.push(li);
    })
  // }
  return links;
};


function attachDogLinks () {
  // invoke the dogLinkCreator  
  // assign the result to a variable named dogLinks.
  let dogLinks = dogLinkCreator();
  let dropdownUL = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach(li => {
    dropdownUL.appendChild(li);
  });

  // Now that you have your dogLinks array iterate 
  // through it and attach each li to the ul element 
  // with the class of .drop - down - dog - list
};

function handleEnter () {
  let dogLinks = document.getElementsByClassName('dog-link');
  Array.from(dogLinks).forEach(li => {
    li.classList.remove("hide-dog");
  });
};

function handleLeave () {
  let dogLinks = document.getElementsByClassName('dog-link');
  Array.from(dogLinks).forEach(li => {
    li.classList.add("hide-dog");
  });
};


attachDogLinks();
const hoverEle = document.querySelector(".drop-down-dog-nav");
hoverEle.addEventListener('mouseenter', handleEnter);
hoverEle.addEventListener('mouseleave', handleLeave);