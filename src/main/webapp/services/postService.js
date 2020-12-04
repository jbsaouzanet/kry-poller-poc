const baseUrl = "http://localhost:8080/service";
export async function UsePostService(service) {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(service)
    });
}