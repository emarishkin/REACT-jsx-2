import { cryptoAssets, cryptoData } from "./data"

export function fakeFetchCrypto(){
    return (
        new Promise((resolve) => {
            setTimeout(()=>{
                resolve(cryptoData)
            },2000)
        })
    )
}

export function fakeAssetsCrypto(){
    return (
        new Promise((resolve) => {
            setTimeout(()=>{
                resolve(cryptoAssets)
            },2000)
        })
    )
}

