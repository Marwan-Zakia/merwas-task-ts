import React, { useState } from 'react'
import { Box, Container, InputLabel, Select, Toolbar, MenuItem, Menu, IconButton, Button, Tooltip, Typography } from '@mui/material'
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
            <Container maxWidth="xl" >
                {/* Logo */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "start" }}>
                    <div className="" style={{ width: "250px", height: "50px" }}>
                        <Image src={"/Logo.png"} width={250} height={50} alt='Merwas is Here' style={{ objectFit: "contain" }} />
                    </div>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "start" }}>
                    <div className="" style={{ width: "150px", height: "50px" }}>
                        <Image src={"/Logo.png"} width={150} height={50} alt='Merwas is Here' style={{ objectFit: "contain" }} />
                    </div>
                </Box>
                {/* Logo */}

                {/* Nav Content */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-between", gap: "8px" }}>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, }}>
                        {pages.map((page) => (
                            <Link href="#" key={page}>
                                {page}
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "end" }}>
                        <InputLabel id="label">
                            <LanguageIcon />
                        </InputLabel>
                        <Select size='small' labelId='label' id="select" value="en">
                            <MenuItem value="en">Engilsh</MenuItem>
                            <MenuItem value="ar">Arabic</MenuItem>
                        </Select>
                        <Button>Register</Button>
                        <Button>Log in</Button>


                    </Box>
                </Box>

                {/* Nav Content */}

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "end" }}>
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
                            display: { xs: 'block', md: 'none' },
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
