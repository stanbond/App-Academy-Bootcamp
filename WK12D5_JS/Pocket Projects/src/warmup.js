const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    // The desired behavior of this function is the input string will be converted 
    // into a < p > tag and then appended to the input HTML Element

    Array.from(htmlElement.children).forEach(e => htmlElement.removeChild(e));
    
    
    const p = document.createElement("p");
    p.innerText = string;
    htmlElement.appendChild(p);
};


htmlGenerator('Party Time.', partyHeader);
// let logo = htmlGenerator('Party Time.', partyHeader);

// logo.classList.add("marquee");