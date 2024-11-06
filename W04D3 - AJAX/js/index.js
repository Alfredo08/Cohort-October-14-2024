/*
function fetchinDogs(URL, settings){
    fetch(URL, settings)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
          const results = document.querySelector('.results'); 
          results.innerHTML = "";
          data.message.forEach(function(dogImageURL){
            results.innerHTML += `<img src="${dogImageURL}" alt="Dog image" >`;
          });
        })
        .catch(function(error){
            console.log(error);
        });
    console.log("Should this happen first or last!");
}
*/
async function fetchingDogs(URL, settings){
    const response = await fetch(URL, settings);
    const data = await response.json();
    const results = document.querySelector('.results'); 
    results.innerHTML = "";
    console.log('Second');
    data.message.forEach(function(dogImageURL){
        results.innerHTML += `<img src="${dogImageURL}" alt="Dog image" >`;
    });
    console.log("Last");
}

function fetchDogsWithJQuery(URL){
    $.get(URL)
        .done(function(data){
            $('.results').empty();
            data.message.forEach(function(dogImageURL){
                $('.results').append(`<img src="${dogImageURL}" alt="Dog image" >`);
            });
        })
        .fail(function(error){
            console.log(error);
        });
}

const dogForm = document.querySelector('.dog-form');
dogForm.addEventListener('submit', function(event){
    event.preventDefault();
    const numOfDogs = document.querySelector('#num-of-images').value;

    const URL = `https://dog.ceo/api/breeds/image/random/${numOfDogs}`;
    const settings = {
        method: 'GET'
    }
    // fetchingDogs(URL, settings);
    fetchDogsWithJQuery(URL);
    console.log("First");
});

function fetchNews(URL, searchCriteria){
    $.ajax({
        url: URL,
        method: 'GET',
        data: {
            pageSize: 10,
            q: searchCriteria
        },
        headers: {
            'X-Api-Key':'e993fe0805de4ec0abaff5d967e9302a'
        },
        success: function(data){
            $('.news-results').empty();
            data.articles.forEach(function(article){
                $('.news-results').append(`
                    <div class="article">
                        <h2> ${article.title} </h2>
                        <img src="${article.urlToImage}" alt="${article.title}">
                        <p> ${article.author} </p>
                        <p> ${article.description} </p>
                    </div>
                    `);
            });
        },
        error: function(msg){
            console.log(msg);
        }
    });
}

$('.news-form').on('submit', function(event){
    event.preventDefault();
    const searchCriteria = $('#search-criteria').val();
    const URL = `https://newsapi.org/v2/everything`;
    fetchNews(URL, searchCriteria);
})