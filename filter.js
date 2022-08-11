const keysFromOgone = [
    'source',
    'orderID',
    'amount',
    'PM',
    'STATUS',
    'CN',
    'TRXDATE',
    'PAYID',
    'currency',
    'ACCEPTANCE',
    'NCERROR',
    'BRAND',
    'CARDNO',
    'ED',
    'IP',
    'SHASIGN',
    'isSync'
  ];

  const keysTest = {
    data1:'NEWKYS',
    data2:'YANKEE',
    data3:'SHASIGN',
  };
const result= {}
const othaKey = Object.values(keysTest).map((elem) => {
    
    if(!keysFromOgone.includes(elem)){
        result[elem] = keysTest[elem]
    }}
);
console.log(result)


// const otherKey = Object.keys(keysTest).filter((elem) => !keysFromOgone.includes(elem));
// otherKey.forEach((elem) => result[elem] = keysTest[elem])
