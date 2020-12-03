import React from "react";

const HomePage = () => {
    const homeData = [
        {
            "name": "Service 1",
            "status": {
                "name": "Google",
                "url": "http://google.Fr",
                "addTime": {
                    "epochSecond": 1607021488,
                    "nano": 4000000
                },
                "status": "FAIL"
            }
        },
        {
            "name": "Service 2",
            "status": {
                "name": "test",
                "url": "http://localhost:3000/#/test",
                "addTime": {"epochSecond":1607021488,"nano":154000000},
                "status": "UNKNOWN"
            }
        },
        {
            "name": "Service 2",
            "status": {
                "name": "create",
                "url": "http://localhost:3000/#/create",
                "addTime": {"epochSecond":1607021488,"nano":154000000},
                "status": "OK"
            }
        }
    ]
    return (
        <div className="box-content-container">
            {homeData.map((url, index) => (
                <div className="row" key={index}>
                    <div className="col">
                        <h4>{url.status.status}</h4>
                    </div>
                    <div className="col">
                        <h4>{url.name}</h4>
                    </div>
                    <div className="col">
                        <a href={url.status.url}>TEST</a>
                    </div>
                    <div className="col">
                        <h4>supprimer</h4>
                    </div>
                </div>
            ))
            }
        </div>
    );
}

export default HomePage;
