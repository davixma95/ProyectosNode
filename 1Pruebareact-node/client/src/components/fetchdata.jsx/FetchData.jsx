const FetchData = () => {
    fechdata();
    // console.log('Estoy en fetchData')
    return (
        <div>FetchData</div>
    )
}

const fechdata = async() => {
    const response = await fetch('http://localhost:3000',{
        method:'POST'
    });
    const data = response.json();
    console.log(data);
}

export default FetchData;