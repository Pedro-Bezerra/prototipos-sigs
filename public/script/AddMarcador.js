var popup = L.popup();
    var latlng; // receberá as coordenadas ao clicar no mapa
    var nome; // nomeque aparecerá no popup

    // pega as coordenadas no local criado e abre um espaço para colocar o nome do marcador que será criado.
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("<input placeholder = 'Nome do marcador' id='nome'></input><br><button onclick='addMarcador()'> Adicionar pin </button></form>")
            .openOn(map);
        latlng = e.latlng;
    }

    map.on('click', onMapClick);

    // com as coordenadas e o nome definido no popup, é criado um marcador com essas informações.
    function addMarcador() {
        nome = document.getElementById('nome').value;
        L.marker(latlng, {draggable: 'true'}).bindPopup(nome).addTo(map);
    }
    