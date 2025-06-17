import React, { useState, useRef } from "react";

import { makeStyles } from "@mui/styles";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { calorieOptions, fetchData } from "../../utils/fetchData";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function AddActivity(props) {
  const classes = useStyles();
  const {
    selectedDay,
    setOpenSnackbar,
    setSnackbarMsg,
    UpdateNewActivity,
    userInfo,
  } = props;
  selectedDay.year = new Date().getFullYear();
  let queryDate = `${selectedDay.day}/${selectedDay.month + 1}/${
    selectedDay.year
  }`;

  const [calorieData,setCalorieData]= useState(0);

  const fetchCalories = async () => {
    let fetchedCalories = [];

    fetchedCalories = await fetchData(
      `https://api.calorieninjas.com/v1/nutrition?query=${activity.name}`,
      calorieOptions
    );

    // let caloriedata=fetchedCalories.items[0]['calories'];

    setCalorieData(fetchedCalories.items[0]['calories'])
    activity.calories=calorieData;

    return fetchedCalories.items[0]['calories'];
  };
  // Set default activity object
  const defaultActivity = {
    name: "",
    nutrients: "1",
    calories: "60",
    date: queryDate,
    username: userInfo.username || "Amogh Jayasimha",
  };

  const [activity, setActivity] = useState(defaultActivity);
  const ref = useRef();

  // useEffect(() => {
  //   ref.current = activity.name;
  //   console.log(ref.current);
  //   if(activity.name)
  //   fetchCalories();
  // }, [activity]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity({
      ...activity,
      date: queryDate.toString(),
      [name]: value,
      
    });
  };

//   const handleSlider = (e) => {
//     console.log("TARDET", e.target);
//     const calories = `${e.target.value}`;
//     setActivity({ ...activity, calories: calories });
//   };

  const isValid = activity.name === "";

  // Add the activity to firebase via the API made in this app
  const handleSubmit = async () => {
    console.log(activity);
    const calories = await fetchCalories();

    // const request = require('request');
    // var query = '1lb brisket and fries';
    // request.get({

    // url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
    // headers: {
    //     'X-Api-Key': 'it4mwdbCcVGWQjdCESYaKA==iH0TNK9XAZrzfXWa'
    // },
    // }, function(error, response, body) {
    // if(error) return console.error('Request failed:', error);
    // else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    // else console.log(body)
    // });

    fetch("http://localhost:5001/meal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...activity, calories}),
    }).then((response) => {
      response.json().then((resp) => {
        UpdateNewActivity(resp);
      });
    });
    setActivity(defaultActivity);
    // Show notification
    setOpenSnackbar(true);
    setSnackbarMsg("Added activity");
    setTimeout(() => {
      setOpenSnackbar(false);
    }, 3000);
    // }
  };

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()}>
      <FormControl className={classes.formControl}>
        <TextField
          style={{ marginTop: "5px" }}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Meal"
          value={activity.name}
          name="name"
          onChange={handleChange}
        />
        <div style={{ marginTop: "20px", marginBottom: "30px" }}>
          <Typography id="discrete-slider" gutterBottom>
            Nutrients
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={activity.nutrients}
            style={{ minWidth: "100%" }}
            name="nutrients"
            onChange={handleChange}
          >
            <MenuItem value={"1"}>Protein</MenuItem>
            <MenuItem value={"2"}>Carbohydrates</MenuItem>
            <MenuItem value={"3"}>Fats</MenuItem>
          </Select>
        </div>
        {/* <Typography id="discrete-slider" gutterBottom>
          Calories
        </Typography> */}

        {/* <TextField
          style={{ marginTop: "5px" }}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Meal"
          value={activity.calories}
          name="calories"
          // onChange={handleChange}
        /> */}

        {/* <Slider
          size="small"
          max={3000}
          min={10}
          defaultValue={100}
          aria-label="Small"
          valueLabelDisplay="auto"
        //   onChange={handleSlider}
        /> */}
      </FormControl>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={isValid}
      >
        Add Meal
      </Button>
    </form>
  );
}

export default AddActivity;
