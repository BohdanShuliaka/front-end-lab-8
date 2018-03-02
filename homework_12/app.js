const root = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'thumbnails');
root.appendChild(container); 

function createMainPage(tanks) {
    let heading = document.createElement('h1');
        heading.innerHTML = 'Most popular tanks';
        container.appendChild(heading);
    
        tanks.forEach(function(tank) {
        let div = document.createElement('div');
            div.setAttribute('title', 'Click to details');
            div.className = 'tank';
        let tankImage = document.createElement('img');
            tankImage.setAttribute('class', 'tank-image');
            tankImage.setAttribute('src', tank.preview);
        let flagImage = document.createElement('img');
            flagImage.setAttribute('class', 'tank-flag');
            flagImage.setAttribute('src', tank.country_image);
            flagImage.setAttribute('alt', tank.country);
        let tankModel = document.createElement('h4');    
            tankModel.setAttribute('class', 'tank-model');
            tankModel.innerHTML = tank.model;
        let tankLevel = document.createElement('h4');
            tankLevel.setAttribute('class', 'tank-level');
            tankLevel.innerHTML = tank.level;

            container.appendChild(div);
            div.appendChild(tankImage);
            div.appendChild(flagImage);
            div.appendChild(tankLevel);
            div.appendChild(tankModel);

            div.addEventListener('click', function() {
                    location.hash = tank.model;
                    root.removeChild(container);

                    createDeatailsPage(tanks);

                    root.appendChild(detailsContainer);
                });
            
        }); 
    return container;
}
createMainPage(tanks);

const detailsContainer = document.createElement('div');
detailsContainer.setAttribute('class', 'details-container');

function createDeatailsPage(tanks) {
    let tank = tanks.find( function(tank) {
        return tank.model === location.hash.substring(1);
    });
    let flagImage = document.createElement('img');
        flagImage.setAttribute('class', 'tank-flag2');
        flagImage.setAttribute('src', tank.country_image);
        flagImage.setAttribute('alt', tank.country);
    
    let heading = document.createElement('h1');
        heading.innerHTML = tank.model + ` (level ${tank.level})`;
        
    let preview = document.createElement('h3');     
        preview.innerHTML = 'Preview';
        preview.setAttribute('class', 'preview');
        
    let tankImage = document.createElement('img');
        tankImage.setAttribute('class', 'tank-image2');
        tankImage.setAttribute('src', tank.preview);

    let table = document.createElement('table');    
        table.setAttribute('class', 'myTable');
        for (key in tank.details){
            let tr = document.createElement('tr');
            let property = document.createElement('td');
                property.innerHTML = key.replace(/_/g, ' ');
            let value = document.createElement('td');
                value.innerHTML = tank.details[key];
            tr.appendChild(property);
            tr.appendChild(value);
            table.appendChild(tr);
        }
    let tableCap = table.createCaption();
        tableCap.innerHTML = "<span id='caption'><b>Chracteristic</b></span>"; 

    let backButton = document.createElement('div');
        backButton.setAttribute('class', 'back-button');
        backButton.innerHTML = '<span>Back to list view</span>';
        backButton.addEventListener('click', function() {
            location.hash = '';
            window.history.go();
        });    

        detailsContainer.appendChild(flagImage);
        detailsContainer.appendChild(heading);
        detailsContainer.appendChild(preview);
        detailsContainer.appendChild(tankImage);
        detailsContainer.appendChild(table);
        detailsContainer.appendChild(backButton);

    return detailsContainer;
}