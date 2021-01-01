import React from "react";
import Grid from "@material-ui/core/Grid";
import "./error.css";
const Error = () => {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} className="error-container">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/404.png"}
                        alt=""
                       className="error-img"
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Error;
