document.querySelector('#getButton').addEventListener('click', apiRequest);

async function apiRequest(url) {
  const alienName = document.querySelector('input').value;
  try {
    const  response = await fetch (`https://infinite-bastion-54095.herokuapp.com/api/${alienName}`);
    const data = await response.json();
    console.log(data);

    document.getElementById('alienName').innerText = data.speciesName;
    document.getElementById('alienWorld').innerText = data.homeworld;
    document.getElementById('alienFeatures').innerText = data.features;
    document.getElementById('alienFacts').innerText = data.interestingFacts;
    document.getElementById('alienExamples').innerText = data.notableExamples;

    document.getElementById('alienImage').src = data.image;
    document.getElementById('alienCaption').innerText = data.speciesname;
  } catch(error) {
    console.log(error);
  }

}
