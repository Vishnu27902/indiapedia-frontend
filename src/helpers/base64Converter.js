function base64Converter(arr){
    return btoa(
        arr.reduce((data,byte)=>data+String.fromCharCode(byte),'')
    )
}

export default base64Converter