import React from 'react'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Sdata from './Sdata'
import Card from './Card';

function valuetext(value) {
    return `${value}`;
}

const useStyles = makeStyles({
    root: {
      color: 'cornflowerblue',
      width: '80%', 
    },
});

const Courses = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 7244]);
    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue[0]);
    };
  
    return (
        <div className='container-fluid CourseContainer'>
           <div className='row'>
           <div className='col-2 p-2 bg-dark text-light'>
                <h2 className='p-3 filterBy'>Filter By</h2>
                <hr />
               <div className='ps-3'>
                <Typography className='priceHeading' id="range-slider" gutterBottom>
                          Price
                        </Typography>
                        <Slider  className={classes.root}
                          value={value}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          aria-labelledby="range-slider"
                          getAriaValueText={valuetext}
                          max={7244.00}
                          min={199}      
                        />
                </div>
                <hr />
           </div>

           <div className='container-fluid col-10'>
           <div className='row'>
           {
            Sdata.map((val,ind) => 
               <Card
               key={ind}
               img = {val.img}
               data={val.data}
               price = {val.price} 
               value = {value} 
               />
               )
           }
           </div> 
           </div>
           </div>
        </div>
    )
}

export default Courses
