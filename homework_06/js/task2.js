let error = document.getElementById("error");
let ipInput = document.getElementById("ipInput");
let tableNode = document.getElementById("table-content");
let loader = document.getElementById("loader");
let validation = document.getElementById("validate");
let response = document.getElementById("validationText");
let clear = document.getElementById("clear");

let validationParameters = {};

document.getElementById("track").onclick = function showLocation() {
  let url = `https://ipapi.co/${ipInput.value}/json/`;
  loader.classList.remove("hidden");
  response.classList.add("hidden");
  clear.classList.add("hidden");

  if (!ValidateIPaddress(ipInput.value)) {
    loader.classList.add("hidden");
    error.classList.remove("hidden");
    validation.classList.add("hidden");
    if (tableNode !== null) {
      tableNode.innerHTML = "";
    }
    throw new Error("Error");
  }
  error.classList.add("hidden");

  http
    .get(url)
    .then(data => {
      generateTable(data, tableNode);
      validationParameters = data;
      loader.classList.add("hidden");
      validation.classList.remove("hidden");
    
    })
    .catch(error => {
      console.log(error);
    });
};
generateTable = (data, node) => {
  node.innerHTML = "";
  let table = document.createElement("table");
  for (let i in data) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerText = i;
    td2.innerText = data[i];
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  }
  node.appendChild(table);
};

document.getElementById("validate").onclick = function showValidation() {
  loader.classList.remove("hidden");
  let url = `https://shrouded-garden-94580.herokuapp.com/`;
  http
    .post(url, validationParameters)
    .then(data => {
      response.innerHTML = data;
      response.classList.remove("hidden");
      loader.classList.add("hidden");
      validation.classList.add("hidden");
      clear.classList.remove("hidden");
    })
    .catch(error => {
      console.log(error);
    });
};
document.getElementById("clear").onclick = function clear() {
  tableNode.innerHTML = "";
  response.classList.add("hidden");
  ipInput.value = "";
};

function ValidateIPaddress(ipaddress) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress
    )
  ) {
    return true;
  } else {
    return false;
  }
}
// console.log(ValidateIPaddress('46.200.239.43'));
