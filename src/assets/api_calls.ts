const getShipList = () => {
  fetch("https://oprec-betis-be.up.railway.app/perahu")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
