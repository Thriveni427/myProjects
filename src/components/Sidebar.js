import React, { Component } from 'react';
import compose from 'recompose/compose'
import { Link, withRouter } from 'react-router-dom'
import BurgerMenu from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Cards from './Cards';
import CourseRevenue from './CourseRevenue';
import Calender from './Calender';

// import Logo from './images/lms-logo-2.png';
import MenuWrap from './MenuWrap';
import Header from './Header';
import theme from '../material-ui/theme';

const styles = theme => ({
    navpaper: {
        boxShadow: 'none',
        borderRadius: 0,
        backgroundColor: 'transparent',
        marginTop: 53
    },
    MenuList: {
        padding: 0,
        margin: 0
    },
    menuItem: {
        backgroundColor: '#bdbdbd',
        color:'#9c27b0',   
        marginTop: -55,
        paddingTop: 15,
        paddingBottom: 15,
        '& $primary, & $navicon, & span': {
        color: '#9c27b0',
            
        },
        '&:hover, &:focus': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            '& $primary, & $navicon, & span': {
                color: theme.palette.common.white,
            },
        },
    },
    navicon: {
        marginRight: 5,
        fontSize: 18,
    },
    navcollapse: {
        backgroundColor: '#0d141f'
    },
    nested: {
        '& $primary, & $navicon, & span': {
            color: theme.palette.common.white,
        },
    },
    nestedItems: {
        paddingLeft: "10px!important",
        '&:first-child': {
            paddingLeft: "10px!important",
        },
    },
    nestedItemsBig: {
        fontSize: 100,
        '& span':{
            fontSize: 20,
            backgroundColor: '#c0c0c0',
        },
        paddingLeft: "10px!important",
        '&:first-child': {
            paddingLeft: "10px!important",
        },
    },

    lightdivider: {
        backgroundColor: '#0d141f',
        marginTop: 10
    }
});

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentMenu: 'push',
          side: 'left',
          openVendor: false,
          openUser: false,
          openCourse: false,
          openTest: false,
          openLive: false,
          openReport: false,
        };
      }
    render() {
        const Menu = BurgerMenu[this.state.currentMenu];
    //const items = this.getItems();
    const { classes } = this.props;
        return (
            <div id="o-wrapper" className="o-wrapper">
            <MenuWrap wait={20}>
              <Menu
                id={this.state.currentMenu}
                pageWrapId={'page-wrap'}
                outerContainerId={'o-wrapper'}
              >
                <div className="adminPanel">
                    <p>Qbook Admin Panel</p>
                </div>
                <Divider className={classes.lightdivider} />
                <Paper className={classes.navpaper}>
                  <MenuList className={classes.MenuList}>
                    <MenuItem className={classes.menuItem} to="/dashboard">
                      <ListItemIcon className={classes.navicon}>
                        <FontAwesomeIcon icon="sliders-h" />
                      </ListItemIcon>
                      <ListItemText classes={{ primary: classes.primary }} primary="Dashboard" />
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Menu>
            </MenuWrap>
            <div id="page-wrap">
              <Header />
              <Cards/>
              <div className="columnDash">
                <div><CourseRevenue/></div>
                <div><Calender/></div>
                </div>
              {/* <main className="c-main">
                {this.props.children}
              </main> */}
            </div>
          </div>
        )
    }
}
export default compose(
    withStyles(styles)
 )(Sidebar);
// export default Sidebar
