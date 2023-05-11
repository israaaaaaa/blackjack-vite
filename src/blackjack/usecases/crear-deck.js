import _ from 'underscore'

/**
 * 
 * @param {Array<string>} tipos 
 * @param {Array<string>} especiales 
 * @returns Array<string>
 */

export const crearDeck = (tipos, especiales) => {

    if (!tipos) throw new Error('error tipos de carta es obligatorio ');

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}