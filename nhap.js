fetch("https://raw.githubusercontent.com/HG300404/UpE/master/course.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const jsonData = document.getElementById("json-data");
    jsonData.innerHTML = JSON.stringify(data);
  });

fetch("https://raw.githubusercontent.com/HG300404/UpE/master/course.json")
  .then((response) => response.json())
  .then(function (data) {
    var htmls = data.map(function (data) {
      return `${data.name}`;
    });
    const jsonData = document.getElementsByTagName;
    jsonData.innerHTML = JSON.stringify(htmls);
  });
