import React from "react";
import {
  Grid,
  Typography,
  Card,
  makeStyles,
  Button,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minWidth: "320px",
    fontFamily: "Kanit",
    padding: "20px",
    height: "auto",
    justifyContent: "center",
  },
  CardGroup: {
    color: "white",
    backgroundColor: "white",
    alignItems: "center",
  },
  CardBtn: {
    margin: "5px",
    maxWidth: "480px",
    width: "150px",
    height: "180px",
    boxShadow: "0 3px 5px 2px rgba(10, 10,10, 0.1)",
    borderRadius: 25,
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
  Step: {
    color: "#eaeaf0",
  },
});
export default function Main() {
  const classes = useStyles();

  return (
    <div style={{ margin: "50px" }}>
      <Grid container justify="center">
        <Grid item md={12}>
          <Typography style={{ fontFamily: "Kanit", margin: "10px" }}>
            Botnoi ยินดีต้อนรับครับ
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid>
          <Card className={classes.CardBtn}>
            <CardActions>
              <Button value="booking">
                <CardContent>
                  <Grid>
                    <Link
                      to="/booking"
                      style={{ fontFamily: "Kanit", textDecoration: "none" }}
                    >
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
                        BOOKING
                      </Typography>
                    </Link>
                    <img
                      alt="Book_icon"
                      width="50px"
                      src="https://image.flaticon.com/icons/svg/3203/3203244.svg"
                    />
                  </Grid>
                </CardContent>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card className={classes.CardBtn}>
            <CardActions>
              <Button value="check-in">
                <CardContent>
                  <Grid>
                    <Link
                      to="/checkin"
                      style={{ fontFamily: "Kanit", textDecoration: "none" }}
                    >
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
                        Check In
                      </Typography>
                    </Link>

                    <img
                      alt="female_icon"
                      width="50px"
                      src="https://image.flaticon.com/icons/svg/929/929426.svg"
                    />
                  </Grid>
                </CardContent>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
