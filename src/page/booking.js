import React from "react";
import {
  Grid,
  Typography,
  Card,
  makeStyles,
  TextField,
  Button,
  MenuItem,
  Select,
  CardMedia,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// const fs = require("fs");

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  card: {
    padding: "20px",
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
export default function Booking() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-07-18T21:11:54")
  );
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  //   const hadleSubmitForm = (value) => {
  //     let buff = fs.readFileSync("stack-abuse-logo.png");
  //     let base64data = buff.toString("base64");
  //   };
  const classes = useStyles();
  return (
    <div>
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
          BOOKING
        </Typography>
      </Grid>

      <Grid container justify="center">
        <Card className={classes.card}>
          <form className={classes.root} noValidate autoComplete="off">
            <Typography>ข้อมูลการจอง</Typography>
            <TextField id="standard-basic" label="ชื่อ-นามสกุล" />
            <InputLabel id="demo-simple-select-label">ประเภทห้อง</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={"Deluxe-King"}>
                Deluxe Ocean Facing King
              </MenuItem>
              <MenuItem value={"Double-Sea-View"}>Double Sea View</MenuItem>
              <MenuItem value={"Deluxe-Family-Ocean-View-Twin-Room"}>
                Deluxe Family Ocean View Twin Room
              </MenuItem>
            </Select>
            <Typography>วันที่เข้าพัก</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Typography>วันที่กลับ</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <TextField id="standard-basic" label="เบอร์ติดต่อ" />
            <TextField id="standard-basic" label="เลขประจำตัวประชาชน" />
            <Typography>ถ่ายภาพหน้าตรงของคุณ **ใช้เพื่อเช็คอิน</Typography>
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <CardMedia style={{ marginTop: "45px" }}>
              <Button className={classes.ButtonCheckin}>จองเลย</Button>
            </CardMedia>
          </form>
        </Card>
      </Grid>
    </div>
  );
}
