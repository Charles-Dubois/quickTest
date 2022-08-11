
const textBrut= "Cher client,\n\nNous vous informons que votre dossier {{=it.test}} a été annulé{{=it.heo}} suite au non paiement de {{=it.pnrCode}}votre part.\n\nL'équipe Billets Discount/Cercle des Vacances.";

const values = {"pnrCode": "CODE AJOUTE", "travellers": "VOYAGEURS AJOUTE"}
const textBrutParser = (textBrut, data) => {
    const splitedTextBrut = textBrut.split('{{=it.');
    const getVariables = splitedTextBrut.map((elem) => {
    const condition = elem.includes('}}');
        if(condition) {
            const index = elem.indexOf('}}');
        return elem.slice(0, index);
        }
    })
    const listOfVariables = getVariables.filter((elem) => elem);
    let parsingTextBrut = null;
    const result = listOfVariables.reduce((acc, cur) => {
        if(acc === listOfVariables[0]){
            const hasAccValue = !!data[acc];
            parsingTextBrut = textBrut.replaceAll(`{{=it.${acc}}}`, hasAccValue ? data[acc] : 'INFORMATION MANQUANTE');
           }
           const hasCurValue = !!data[cur];
;
        parsingTextBrut = parsingTextBrut.replaceAll(`{{=it.${cur}}}`, hasCurValue ? data[cur] : 'INFORMATION MANQUANTE')
       
            acc = parsingTextBrut;
    
        return acc;
    })
    return result;
}
console.log(textBrutParser(textBrut, values))