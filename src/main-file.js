import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Tabs from "./components/Tabs";
import "./App.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '300px'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '300px',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '30ch',
            },
        },
        outline: 0,
        borderWidth: '0 0 1px',
        borderColor: 'white',
        borderBottom: '1px solid',
    },
    menuLink: {
        padding: '5px 10px 15px 10px',
        fontColor: '#f4f6f9',
        color: '#f4f6f9',
        textDecoration: 'none',
        wordSpacing: '10px',
        fontSize: '15px',
        backgroundColor: '#282c34',
    },
    signIn: {
        margin: '5px 15px 5px 15px',
        padding: '5px 15px 5px 15px',
        fontColor: '#f4f6f9',
        color: '#f4f6f9',
        textDecoration: 'none',
        wordSpacing: '10px',
        backgroundColor: '#282c34',
        outline: 0,
        borderWidth: '0.5px',
        borderColor: 'grey',
        border: 'solid',
    },
    header: {
        padding: '25px 50px 15px 10px',
    },
    tablink: {
        backgroundColor: '#555',
        color: 'white',
        float: 'left',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        padding: '14px 16px',
        fontSize: '17px',
        width: '25%',
    },
    tabcontent: {
        color: 'white',
        display: 'none',
        padding: '100px 20px',
        height: '100%',
    },
    container: {
        align: 'center',
        width: '70%',
        color: 'white',
        fontSize: '17px',
        border:'solid',
        borderWidth: '4px 4px 4px 4px',
        cursor: 'pointer',
        margin: 'auto',
    }
}));

export default function MainFile() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div>
                <a
                    className={classes.menuLink}
                    href="https://reactjs.org"
                    target="_blank">FEATURES</a>&nbsp;
                    <a
                    className={classes.menuLink}
                    href="https://reactjs.org"
                    target="_blank">TOUR</a>&nbsp;
                    <a
                    className={classes.menuLink}
                    href="https://reactjs.org"
                    target="_blank">ABOUT</a>&nbsp;
                    <a
                    className={classes.menuLink}
                    href="https://reactjs.org"
                    target="_blank">BLOG</a>&nbsp;

                <InputBase
                    placeholder="Search for Notes"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,

                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    label="Outlined" variant="outlined"
                />
                <SearchIcon />

                <Button variant="contained" className={classes.signIn} disableElevation>
                    Sign In
                </Button>

            </div>

            <h2>Free platform to manage your digital notes.</h2>
            <h3>FactualNote is a mature tool to annotate web pages and files.</h3>
            <h4>Start a discussion,rate the information and review it.</h4>
            <div className={classes.container}>
                <Tabs>
                    <div label="From Web">
                        <form className="example" >
                            <input type="text" placeholder="Enter the Url" name="search" />
                            <button type="submit">Create Notes</button>
                        </form>
                    </div>
                    <div label="Write your own">
                    Write your own Content
                </div>
                    <div label="From Documents">
                    rom Documents content
                </div>
                </Tabs>
            </div>
        </div >
    )

}
