// document find
const wrapper = document.querySelector(".wrapper");
const menuItem = document.querySelectorAll(".menuItem");
const productImg = document.querySelector(".productImg");
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productColor = document.querySelectorAll(".color");
const productSize = document.querySelectorAll(".size");
const buyNow = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const closePyment = document.querySelector(".close");

// dummy data
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

let choosenData = products[0];

// slider functionality
menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(-${index * 100}vw)`;

    choosenData = products[index];

    productImg.src = choosenData.colors[0].img;
    productTitle.innerHTML = choosenData.title;
    productPrice.innerHTML = "$" + choosenData.price;

    // products color assigned
    productColor.forEach((color, index) => {
      color.style.backgroundColor = choosenData.colors[index].code;
    });
  });
});

// product functionality
productColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    productImg.src = choosenData.colors[index].img;
  });
});

productSize.forEach((size) => {
  size.addEventListener("click", () => {
    productSize.forEach((color) => {
      color.style.backgroundColor = "white";
      color.style.color = "black";
    });

    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// payment method add
buyNow.addEventListener("click", () => {
  payment.style.display = "flex";
});

closePyment.addEventListener("click", () => {
  payment.style.display = "none";
});
