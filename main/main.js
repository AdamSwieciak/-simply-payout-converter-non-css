const time = document.getElementsByClassName("czas");
const price = document.getElementsByClassName("stawka");
const payment = document.getElementsByClassName("wyplata");
const worker = document.getElementsByClassName("pracownik");

function compare(a, b) {
  return (a.value - b.value) * -1;
}

let funct = () => {
  const hourarr = [];
  for (let i = 0; i < time.length; i++) {
    let timeel = time[i].value;
    let priceel = price[i].value;

    if (timeel < 100) {
      worker[i].style = "color: red;";
    }

    if (time[i].value > 160) {
      let over = timeel - 160;
      payment[i].innerHTML = 160 * priceel + over * (2 * priceel);
    } else {
      payment[i].innerHTML = timeel * priceel;
    }
    hourarr.push({ name: worker[i].innerText, value: timeel });
  }
  let bestworker = hourarr.sort(compare);
  document.getElementById(
    "najlepsi-pracownicy"
  ).innerHTML = `<div>1.${bestworker[0].name}</div><div>2.${bestworker[1].name}</div><div>3.${bestworker[2].name}</div>`;
};

document.getElementById("oblicz").addEventListener("click", funct);
