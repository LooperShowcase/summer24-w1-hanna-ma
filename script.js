function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  console.log(id);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

const fakePic = "https://thispersondoesnotexist.com/";

imgContainer = document.getElementById("images");
resContainer = document.getElementById("result");

function draw() {
imgContainer.innerHTML = "";
resContainer.innerHTML = "";
  const resetbtn = document.createElement("button");
  resetbtn.innerHTML = "Try Again"
  resetbtn.onclick = draw
  const rnd = Math.random() > 0.5;
  const arr = [rnd, !rnd];

  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? realPic() : fakePic;

    img.onclick = function () {
      if (isReal) {
        resContainer.innerHTML = "Correct😁";
      } else {
        resContainer.innerHTML = "Incorrect👎👎👎";
        
      }
      resContainer.appendChild(resetbtn);

    };
  
    imgContainer.appendChild(img);
  }
}

draw();
