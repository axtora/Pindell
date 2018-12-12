import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./continent.css";

class Continent extends Component {
  constructor() {
    super();
    this.state = {
      continet: ["Asia", "Europe", "Africa", "America", "Oceania"],
      hidden: true,
    };
    this.onMouseHover = this.onMouseHover.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseHover() {
    this.setState({
      hidden: false,
    })
  }  

  onMouseLeave() {
    this.setState({
      hidden: true,
    })
  }

  render() { 
    return (
      <Grid container direction='row' justify='center' alignItems='center' className='h-100' id='main'>
        {this.state.continet.map(item => (
          <Card key={item} className={['card', item]}>
            <CardContent>
              <Typography align='center'>
                {item}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    );
  }
}

export default Continent;
