

export async function myGetData(url:string){
    const resp = await fetch(url)
    return {
        res : await resp.json()
    }
}
