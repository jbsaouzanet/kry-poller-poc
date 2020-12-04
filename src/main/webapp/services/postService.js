const baseUrl = "http://localhost:8080/service";
export async function UsePostService(service) {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(service)
    });
}