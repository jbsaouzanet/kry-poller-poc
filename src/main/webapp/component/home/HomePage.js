import React from "react";
import { Link } from "react-router-dom";
import Status from "../common/Status"
import Spinner from "../common/Spinner";
import useFetchService from "../../services/fetchService";
import visitLogo from "./visit.png";
import deleteLogo from "./delete.png";
import { UseDeleteService } from "../../services/deleteService";

const HomePage = () => {
    const { data: homeData, loading } = useFetchService(false);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await UseDeleteService({"name":event.target.alt});
            console.log(event);
        } catch (e) {
            console.log("error logged", e);
        }
    }

    if (loading) return <Spinner />;
    if (homeData === null) return <h1>Please reload</h1>;
    return (

        <>
        <div className="box-content-container">
            {homeData.map((url, index) => (
                <div className="row" key={index}>
                    <div className="col" style={{width:10+"%"}}>
                        <Status status={url.status.status} />
                    </div>
                    <div className="col" style={{width:70+"%"}}>
                        <h3>{url.name}</h3>
                    </div>
                    <div className="col" style={{width:10+"%"}}>
                        <a href={url.status.url} rel="noreferrer" target="_blank"> <img src={visitLogo} alt="Visit" className="status-logo" /></a>
                    </div>
                    <div className="col" style={{width:10+"%"}}>
                        <img src={deleteLogo} alt={url.name} onClick={handleSubmit} className="status-logo"/>
                    </div>
                </div>
            ))
            }
        </div>
        <div className="box-footer">
          <Link to="/create">
              <button className="btn-footer">
                  <h2>Create a new service</h2>
              </button>
          </Link>

        </div>
    </>

    );
}

export default HomePage;
