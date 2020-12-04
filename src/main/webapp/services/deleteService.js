const baseUrl = "http://localhost:8080/service";
export async function UseDeleteService(service) {

    return fetch(baseUrl, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"name":service.name}),
        mode: 'no-cors'
    }).then(res => res.text()) // or res.json()
        .then(res => console.log(res));

}