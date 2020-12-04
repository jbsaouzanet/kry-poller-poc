const baseUrl = "http://localhost:8080/service";
export async function UseDeleteService(service) {

    return fetch(baseUrl, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"name":service.name}),
    }).then(res => res.text())
        .then(res => console.log(res));

}