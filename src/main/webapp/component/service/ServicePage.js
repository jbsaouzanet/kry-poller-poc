import React, { useState } from "react";
import {Link} from "react-router-dom";
import { UsePostService } from "../../services/postService";
const emptyService = {
    name: "",
    url: "",
};

const ServicePage = () => {
    const STATUS = {
        IDLE: "IDLE",
        SUBMITTED: "SUBMITTED",
        SUBMITTING: "SUBMITTING",
        COMPLETED: "COMPLETED",
    };
    const [service, setService] = useState(emptyService);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [touched, setTouched] = useState({});

    const [saveError, setSaveError] = useState(null);

    // Derived state
    const errors = getErrors(service);
    const isValid = Object.keys(errors).length === 0;

    function handleChange(e) {
        e.persist(); // persist the event
        setService((curName) => {
            return {
                ...curName,
                [e.target.id]: e.target.value,
            };
        });
    }

    function handleBlur(event) {
        event.persist();
        setTouched((cur) => {
            return { ...cur, [event.target.id]: true };
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setStatus(STATUS.SUBMITTING);
        if (isValid) {
            try {
                const returnPost = await UsePostService(service);
                //console.log(returnPost);
                if(returnPost.status !== 400) {
                    setStatus(STATUS.COMPLETED);
                } else {
                    setSaveError("error");
                    console.log("error logged");
                }

            } catch (e) {
                setSaveError(e);
                console.log("error logged");
            }
        } else {
           // console.log("SUBMITTED");
            setStatus(STATUS.SUBMITTED);
        }
    }


    function getErrors(service) {
        const result = {};
        if (!service.name) result.name = "Name is required";
        if (!service.url) result.url = "url is required";
        return result;
    }

    if (saveError) return (
        <>
            <h1>Whoops! <br />We could not create your service. <br/> Please try again</h1>
            <Link to="/"><button className="btn-footer">
                <h2>Retry</h2>
            </button>
            </Link>
        </>);
    if (status === STATUS.COMPLETED) {
        return (
            <>
                <h1>Thank you! <br />Your service has been created successfully</h1>
                <Link to="/"><button className="btn-footer">
                    <h2>View the list of service</h2>
                </button>
                </Link>
            </>);
    }

    return (
        <div>
            {!isValid && status === STATUS.SUBMITTED && (
                <div role="alert">
                    <p role="alert">
                       Please fix the following errors:
                    </p>
                    <ul>
                        {Object.keys(errors).map((key) => {
                            return <li key={key}><h4>{errors[key]}</h4></li>;
                        })}
                    </ul>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name"><h3>Name</h3></label>
                    <br />
                    <input
                        id="name"
                        type="text"
                        value={service.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <p role="alert">
                       {(touched.name || status === STATUS.SUBMITTED) && errors.name}
                    </p>
                </div>

                <div>
                    <label htmlFor="url"><h3>URL</h3></label>
                    <br />
                    <input
                        id="url"
                        type="text"
                        value={service.url}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />

                    <p role="alert">
                       {(touched.url || status === STATUS.SUBMITTED) && errors.url}
                    </p>
                </div>

                <div>
                    <button
                        type="submit"
                        className="btn-footer"
                        disabled={status === STATUS.SUBMITTING}
                    >
                        <h2>Create a service</h2>
                    </button>
                </div>
            </form>

        </div>);
};
export default ServicePage;
