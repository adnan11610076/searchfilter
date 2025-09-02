const users = [
  {
    name: "Amisha Rathore",
    pic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    bio: "Silent chaos in a loud world | Not for everyone",
  },
  {
    name: "Kiara Mehta",
    pic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    bio: "Main character energy ☕ coffee > everything",
  },
  {
    name: "Isha Oberoi",
    pic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    bio: "Walking through dreams in Doc Martens | Late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    bio: "Too glam to give a damn ✨ Filter free soul",
  },
  {
    name: "Riya Malhotra",
    pic: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg",
    bio: "Bookworm 📚 Coffee lover ☕ Dreaming big in small moments",
  },
  {
    name: "Aarav Sharma",
    pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    bio: "Tech geek 💻 Fitness enthusiast | Forever curious",
  },
  {
    name: "Meera Kapoor",
    pic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    bio: "Dancing through life 💃 Heart full of music",
  },
  {
    name: "Kabir Verma",
    pic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    bio: "Explorer 🌍 Storyteller | Living one adventure at a time",
  },
  // 🔥 New Users
  {
    name: "Saanvi Joshi",
    pic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    bio: "Dream chaser 🌙 Believer in good vibes only",
  },
  {
    name: "Devansh Khanna",
    pic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "Startup junkie 🚀 Always learning, always building",
  },
  {
    name: "Ananya Rao",
    pic: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    bio: "Nature lover 🌿 Smiles, sunsets, and stories",
  },
  {
    name: "Rohan Gupta",
    pic: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    bio: "Basketball 🏀 + Books 📖 = Balanced chaos",
  },
];


function showUser(arr){
    arr.forEach(user => {
        // parent div
  const card = document.createElement("div");
  card.classList.add("card","fade-up");

  // user image
  const img = document.createElement("img");
  img.classList.add("bg-img");
  img.src = user.pic;
  img.alt = user.name;

  // blurred layer
  const blur = document.createElement("div");
  blur.classList.add("blurred-layer");
  blur.style.backgroundImage=`url(${user.pic})`;

  // content div
  const content = document.createElement("div");
  content.classList.add("content");

  const h3 = document.createElement("h3");
  h3.textContent = user.name;

  const p = document.createElement("p");
  p.textContent = user.bio;

  // append content
  content.appendChild(h3);
  content.appendChild(p);

  // append all inside card
  card.appendChild(img);
  card.appendChild(blur);
  card.appendChild(content);

  document.querySelector(".cards").appendChild(card)
    });
}

showUser(users)

let inp=document.querySelector(".search-bar");

let debounceTimer;

inp.addEventListener("input", function () {
  clearTimeout(debounceTimer); // clear old timer

  debounceTimer = setTimeout(() => {
    let value = this.value.toLowerCase();

    let newUser = users.filter((user) => {
      return user.name.toLowerCase().includes(value);
    });

    let cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = "";

    if (newUser.length > 0) {
      showUser(newUser);
    } else {
      cardsContainer.innerHTML = "<p>No users found ❌</p>";
    }
  }, 300); // 300ms delay
});

// Reveal on scroll animation
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

