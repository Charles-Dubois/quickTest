const cache = {
    status: 'STATUS FROM CACHE',
    source: 'MA SOURCE FROM CACHE',
    orderID: 'MON ORDER ID FROM ORDER ID'
}

const body ={
    status: 'STATUS FROM CACHE',
    source: 'MA SOURCE FROM CACHE'
}

function compareKey(){
    
    const bodyData = new Set(Object.values(body))

    const cacheArray = Object.entries(cache)

    const filtering = cacheArray.filter((elem) => !bodyData.has(elem[1])) 

    console.log(filtering);
    filtering.map((elem) => {
        const key =  elem[0];
        const value = elem[1]
        body['other'] = {...body['other'], [key]: value }
    })
    console.log(body)
}
compareKey()