import React, { useState } from 'react'
import { Box, Container, InputLabel, Select, Toolbar, MenuItem, Menu, IconButton, Button, Tooltip, Typography, Fab } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import Image from 'next/image'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'About Us', 'Services', "Partners", "Contact Us"];
type Actions = {
    name: string,
    callback: () => void

}[]
const actions: Actions = [
    {
        name: "Register",
        callback: () => {

        }
    },
    {
        name: "Log in",
        callback: () => {

        }
    }
    ,];


export default function NavContent() {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Toolbar disableGutters style={{ backgroundColor: "#3F485E" }}>
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", padding: "15px 15px" }} >
                {/* Logo */}
                <Box sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: "start" }}>
                    <div className="" style={{ width: "250px", height: "50px" }}>
                        <Image src={"/Logo.png"} width={250} height={50} alt='Merwas is Here' style={{ objectFit: "contain" }} />
                    </div>
                </Box>
                <Box sx={{ display: { xs: 'flex', lg: 'none' }, justifyContent: "start" }}>
                    <div className="" style={{ width: "150px", height: "50px" }}>
                        <Image src={"/Logo.png"} width={150} height={50} alt='Merwas is Here' style={{ objectFit: "contain" }} />
                    </div>
                </Box>
                {/* Logo */}

                {/* Nav Content */}

                <Box sx={{ display: { xs: 'none', lg: 'grid' }, flexGrow: 1, maxWidth: "30rem", alignItems: "center", placeContent: "center", gridTemplateColumns: "repeat(5,1fr)", whiteSpace: "nowrap", textAlign: "center", gap: "20px" }}>
                    {pages.map((page) => (
                        <Box sx={{
                            borderTop: "2px solid transparent",
                            paddingTop: "8px",
                            lineHeight: "18.29px",
                            textTransform: "uppercase",
                            fontSize: "15px",
                            ":hover": {
                                borderTop: "2px solid #EB6B2A",
                                color: "#EB6B2A"
                            },
                            transition: "color 1s"
                        }} key={page} >
                            <Link href="#" >
                                {page}
                            </Link>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: "end", alignItems: "center", }}>

                    <Select size='small' labelId='label' id="LangSelect" value="en" sx={{
                        border: "0px",
                        padding: 0,
                        fontSize: "small",
                        display: "flex",
                        alignItems: "center"
                    }}
                    >

                        <MenuItem value="en">
                            <Box
                                sx={{
                                    display: 'flex', justifyContent: "end", gap: "4px", alignItems: "center"
                                }}
                            >
                                <LanguageIcon sx={{ width: "20px", height: "20px" }} />
                                <div className="">Engilsh</div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="ar">
                            <Box
                                sx={{
                                    display: 'flex', justifyContent: "end", gap: "4px", alignItems: "center"
                                }}
                            >
                                <LanguageIcon sx={{ width: "20px", height: "20px" }} />
                                <div className="">Arabic</div>
                            </Box>


                        </MenuItem>
                    </Select>

                    <Fab variant="extended"
                        sx={{
                            backgroundColor: "#fff", color: "#3F485E", border: "1px solid #3F485E", fontSize: "12px", ":hover": {
                                borderTop: "2px solid #fff",
                                // color: "#fff",
                            },
                            padding: "10px 20px 10px 20px",
                            fontFamily: "Nobile",
                            marginRight: "4px"
                        }}

                    >

                        Register
                    </Fab>
                    <Fab variant="extended" size='large' sx={{
                        backgroundColor: "#3F485E", color: "#ffffff", border: "1px solid #fff", fontSize: "12px", ":hover": {
                            borderTop: "2px solid #3F485E",
                            color: "#3F485E",
                        },
                        padding: "10px 20px 10px 20px",
                        fontFamily: "Nobile"
                    }}>

                        Log in
                    </Fab>



                </Box>

                {/* Nav Content */}

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' }, justifyContent: "end" }}>
                    <Tooltip title="Open settings">
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', lg: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography fontFamily={"nobile"} textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        {actions.map((action) => (
                            <MenuItem key={action.name} onClick={action.callback}>
                                <Typography fontFamily={"nobile"} textAlign="center">{action.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>





            </Container>
        </Toolbar>
    )
}
