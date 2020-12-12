const user = {
  name: "Matias",
  email: "asd@asd",
  password: "asd123",
};

const pet = {
  name: "Zeta",
};

const product = {
  brand: "Samsung",
  name: "S20",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus molestiae quibusdam cumque porro asperiores et molestias accusamus ducimus dignissimos.",
};

fetch("https://ada-frontend-e41ad-default-rtdb.firebaseio.com/pets.json", {
  method: "POST",
  headers: {
    "Content-Type": "Application/json",
  },
  body: JSON.stringify(pet),
}).then((response) => {
  console.log(response);
});

fetch("https://ada-frontend-e41ad-default-rtdb.firebaseio.com/products.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
