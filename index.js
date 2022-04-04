windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

skyNumWidth = windowWidth/100; // how many tiles we need per row
skyNumHeight = windowHeight/100;

skyLeftPx = 0;
skyBottomPx = windowHeight - 100;

let newImage = (filepath, leftPx, bottomPx) => {
    let image = document.createElement("img");
    image.src = "./assets/" + filepath;
    image.style.position = "fixed";
    image.style.left = leftPx + "px";
    image.style.bottom = bottomPx + "px";
    document.body.append(image);
}

//sky block
for(let j = 0; j <= 2; j++){
    for(let i = 0; i <= skyNumWidth; i++){
        newImage("sky.png", skyLeftPx, skyBottomPx);
        skyLeftPx += 100;
    }
    skyBottomPx -= 100;
    skyLeftPx = 0;
}

grassNumWidth = skyNumWidth;
grassLeftPx = 0;
grassBottomPx = skyBottomPx;

for(let j = 0; j <= 5; j++){
    for(let i = 0; i <= grassNumWidth; i++){
        newImage("grass.png", grassLeftPx, grassBottomPx);
        grassLeftPx += 100;
    }
    grassBottomPx -= 100;
    grassLeftPx = 0;
}


let newItem = (filepath, leftPx, bottomPx) => {
    newImage(filepath, leftPx, bottomPx);
    let itemImage = document.querySelector("body").lastChild
    itemImage.addEventListener("dblclick", function(){itemImage.remove()});
}

// greenCharacter
newImage("green-character.gif", 100, 100);
// pine tree
newImage("pine-tree.png", 450, 200);
// tree
newImage("tree.png", 200, 300);
// pillar
newImage("pillar.png", 350, 100);
// crate
newImage("crate.png", 150, 200);
// well
newImage("well.png", 500, 425);

// add Sword
newItem("sword.png",500,405);
// add shield
newItem("sheild.png", 165,185);
// add staff
newItem("staff.png",600,100);


