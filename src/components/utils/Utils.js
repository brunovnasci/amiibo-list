export function translateAmiiboType(type){
    switch(type){
        case 'Card':
            return 'Cartão';
        case 'Figure':
            return 'Figura interativa';
        case 'Yarn':
            return 'Figura interativa de pano';
        default:
            return 'Não mapeado'
    }
}

export function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0],
    month = datePart[1], day = datePart[2];
  
    return day+'/'+month+'/'+year;
}