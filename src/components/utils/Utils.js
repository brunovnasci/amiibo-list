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