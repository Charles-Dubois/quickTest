
const textBrut= "Cher client,\n\nNous vous informons que votre dossier {{=it.test}} a été annulé{{=it.heo}} suite au non paiement de {{=it.pnrCode}}votre part.\n\nL'équipe Billets Discount/Cercle des Vacances.";

const bla= "Cher client,\n\nNous  suite sau non paiement de {{=it.pnrCffode}}votre part.Vacances.";


const ka = '{{=it.travellers}}{{=it.travellers}}zc{{=it.travellers}}';
const values = {"pnrCode": "CODE AJOUTE", "travellers": "VOYAGEURS AJOUTE"}
const textBrutParser = (textBrut, data) => {
    const splitedTextBrut = textBrut.split('{{=it.');

     const getVariables = splitedTextBrut.map((elem) => {
     const condition = elem.includes('}}');
         if(condition) {
             const index = elem.indexOf('}}');
         return elem.slice(0, index);
         }
         return null;
     })

    const listOfVariables = getVariables.filter((elem) => elem);

    const replaceText = (dataToReplace, textToParse) => {
        const pattern =  new RegExp(`{{=it.${dataToReplace}}}`, "g")
        const hasDataToProvide = !!data[dataToReplace];
        return textToParse.replace(pattern,
         hasDataToProvide ?
         data[dataToReplace] :
         `INFORMATION MANQUANTE =>${dataToReplace}<=`
        );
    }



    if(listOfVariables[1]){
        let parsingTextBrut = null;

        return listOfVariables.reduce((acc, cur) => {
            if(acc === listOfVariables[0]){
                parsingTextBrut = replaceText(acc, textBrut);
            }
            parsingTextBrut = replaceText(cur, parsingTextBrut);
            acc = parsingTextBrut;
    
            return acc;
        })
    };


    return replaceText(listOfVariables[0], textBrut);
}
console.log(textBrutParser(ka, values));