export const getHello = async() =>{
    const res = await fetch('/api/hello');
    const text = await res.text();
    return text;
}