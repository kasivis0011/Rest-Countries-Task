fetch(`https://restcountries.eu/rest/v2/all`)
  .then((data) => data.json())
  .then((country) => country.forEach((element) => createLayout(element)))
  .then((errMsg) => console.log(errMsg));

function createLayout({ name, region, capital, population, flag }) {
  const inf = document.createElement("div");
  inf.setAttribute("class", "container");
  inf.innerHTML = ` <div class="flag-container">
                        <img src=${flag} alt="flag image" width="250px" height="150px"/>
                    <div>
                    <div class="detail">
                      <h3>Name : ${name}<h3>
                      <p><b>Population :</b>${population}</p>
                      <p><b>Region :</b>${region}</p>
                      <p><b>Captial :</b>${capital}</p>
    `;
  document.body.append(inf);
}
