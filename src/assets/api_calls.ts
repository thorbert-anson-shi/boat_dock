const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjZkZTVmOC0xMDU2LTQ3NzgtODJlOS03MzY4ZGE5NWQ4MDIiLCJpZCI6ImRmNmRlNWY4LTEwNTYtNDc3OC04MmU5LTczNjhkYTk1ZDgwMiIsInVzZXJuYW1lIjoidG9idG9ieSIsImlhdCI6MTcwMzM0NjkyMiwiZXhwIjoxNzA1OTM4OTIyfQ.yHLIrFjHuIYY1Xdw_BR0a9xF8q7JpTxsFF2GKKi1t7k"

const getShipList = () => {
   return fetch("https://oprec-betis-be.up.railway.app/perahu", {method: "GET", headers: {Authorization: `Bearer ${access_token}`}})
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export default {getShipList};