import React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';


const SearchFood = () => {
    return (
      <div>
        <Typography variant="h4" gutterBottom component="div">
          Search Result for Asian Food
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ padding: "30px 60px" }}
          >
            Food
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ backgroundColor: "goldenrod", padding: "30px 60px" }}
          >
            Restaurant
          </Typography>
        </Box>
        <Typography variant="h6" gutterBottom component="div">
          We have 25 food for you
        </Typography>
      </div>
    );
};

export default SearchFood;