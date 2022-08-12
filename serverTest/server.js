const express = require('express')

const app = express()

const PORT = process.env.PORT || 8056;

app.use(express.json());






app.post("/", (req, res) => {

const textor = "efohebzvjkj  {{=it.pnrCode}} iehvjr  njsnzlrv";
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

    if(listOfVariables[1]){
        let parsingTextBrut = null;

        return listOfVariables.reduce((acc, cur) => {
            if(acc === listOfVariables[0]){

                const hasAccValue = !!data[acc];

                parsingTextBrut = textBrut
                .replaceAll(`{{=it.${acc}}}`,
                hasAccValue ?
                 data[acc] : 
                 `INFORMATION MANQUANTE =>${acc}<=`
                );
            }

            const hasCurValue = !!data[cur];
            parsingTextBrut = parsingTextBrut
                .replaceAll(`{{=it.${cur}}}`,
                hasCurValue ?
                 data[cur] :
                 `INFORMATION MANQUANTE =>${cur}<=`
                );
       
            acc = parsingTextBrut;
    
            return acc;
        })
    };
    const hasUniqueVariable = !!data[listOfVariables[0]];

    return textBrut.replaceAll(`{{=it.${listOfVariables[0]}}}`,
    hasUniqueVariable ?
     data[listOfVariables[0]] :
     `INFORMATION MANQUANTE =>${listOfVariables[0]}<=`
    );
}



const data = textBrutParser(textor, req.body)
  res.json({da:'dada', data: data});
});

app.get("*", (_req, res) => {
  res.status(404).send("Error 404");
});

app.listen(PORT, () => {
  console.log("Listen on port " + PORT);
});