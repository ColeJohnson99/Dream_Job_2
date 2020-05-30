import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './style.css';

// Styling that will be exported with the component
const styles = theme => ({
    root: {
      width: '100%',
      background: 'rgba(0,0,0,0)',
      paddingRight: '14.25%',
      paddingLeft: '12%',
    },
    button: {
      marginTop: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      textTransform: 'lowercase',
      outline: 'none',
      background: 'rgb(226, 142, 32)',
      maxHeight: '29px',
      maxWidth: '26px',
      color: 'white',
      paddingLeft: '5%',
      paddingBottom: '1%',
      marginLeft: '1.5%',
    },
    actionsContainer: {
      marginBottom: theme.spacing.unit * 2,
      background: 'rgba(0,0,0,0)',
    },
    resetContainer: {
      padding: theme.spacing.unit * 3,
    },
    label: {
      color: '#F7F4E9',
      fontSize: '1.35rem',
    },
    typography: {
      paddingLeft: '2.25%',
    },
    topButton: {
      marginLeft: '2.5%',
    },
});

const style = {
  background: '#D3D3D3',
  color: 'black',
  fontSize: '1.2rem',
  fontWeight: "bold"
}

const labelStyle = {
  fontSize: '1.7rem',
}
  
//Get steps returns the the values of the steps for each tab to display as a label
function getSteps() {
  return [`Job application tracker`, `All your information in an organized place`, `Welcome to DreamJob!`];
}
  
// Switch case for determining which content to display based on step index 
function getStepContent(step) {
  switch (step) {
    case 0: 
      return `DreamJob will help you keep all the vital information from jobs you've applied to. `;

      case 1:
      return `Your one stop spot for all things job hunting.`;

      case 2:
        return `Sign in with your LinkedIn account to get started!`;

      default:
        return 'Unknown step';
    }
}
  
// Stepper component from React Material UI with some important info about our app to display on landing page
class AboutStepper extends React.Component {

    // This component keeps track of which step is active so that each step can be linked to the one before it and the one after it for navigation purposes
    state = {
      activeStep: 0,
    };
  
    // Increment step state by 1 to move to next step
    handleNext = () => {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
    };
  
    // Decrement by 1 to move back a step
    handleBack = () => {
      this.setState(state => ({
        activeStep: state.activeStep - 1,
      }));
    };
  
    //  Reset reverts to first step
    handleReset = () => {
      this.setState({
        activeStep: 0,
      });
    };
  
    render() {
      const { classes } = this.props;
      const steps = getSteps();
      const { activeStep } = this.state;
  
      return (
      <div className="aboutStepper">
        <div className={classes.root}>
          <Stepper style={style} activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label} style={style}>
                <StepLabel className="stepLabel" style={labelStyle}>{label}</StepLabel>
                <StepContent style={style}>
                  <Typography style={style} className="textBody">{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        ←
                      </Button>
                      <Button
                        variant="contained"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? '→' : '→'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper style={style} square elevation={0} className={classes.resetContainer}>
              <Typography className={classes.typography}>―――――</Typography>
              <Button onClick={this.handleReset} className={classes.topButton}>
                top ↑
              </Button>
            </Paper>
          )}
        </div>
      </div>
      );
    }
}
  
AboutStepper.propTypes = {
  classes: PropTypes.object,
};
  
export default withStyles(styles)(AboutStepper);