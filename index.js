let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];

let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};

let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let bgContainerEl=document.getElementById("bgContainer");

let bg1El=document.createElement("div");
bg1El.textContent=JSON.stringify(bikes)
bg1El.classList.add('bg-container');
bgContainerEl.appendChild(bg1El)

let bg2El=document.createElement("div");
bg2El.textContent=JSON.stringify(person)
bg2El.classList.add('bg-container');
bgContainerEl.appendChild(bg2El)

let bg3El=document.createElement("div");
bg3El.textContent=JSON.stringify(todos)
bg3El.classList.add('bg-container');
bgContainerEl.appendChild(bg3El)