import React from "react";
import { Grid, Typography, Card, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  card: {
    padding: "50px",
  },
  ButtonCheckin: {
    background:
      "linear-gradient( 200.6deg,  rgba(55,207,255,1) 11.2%, rgba(5,158,257,1) 91.1% )",

    fontFamily: "Kanit",

    color: "white",
    width: "200px",
    borderRadius: 50,
  },
  input: {
    display: "none",
  },
}));
export default function Checkin() {
  const classes = useStyles();
  return (
    <div style={{ margin: "20px" }}>
      <Grid container justify="center">
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{
            fontFamily: "Kanit",
            textDecoration: "none",
            color: "black",
          }}
        >
          CHECK IN
        </Typography>
      </Grid>

      <Grid container justify="center">
        <Card className={classes.card}>
          <Grid container justify="center">
            <img
              style={{ margin: "20px", marginBottom: "150px" }}
              alt="upload"
              src="https://image.flaticon.com/icons/svg/149/149071.svg"
            />
          </Grid>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              className={classes.ButtonCheckin}
            >
              Selfie
            </Button>
          </label>
        </Card>
      </Grid>
    </div>
  );
}
