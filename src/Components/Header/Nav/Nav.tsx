"use client"
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Announcment from '../Announcement/Announcment';
import NavContent from './NavContent';

export default function Nav() {
    return (
        <AppBar position="sticky" >
            <Announcment />
            <NavContent />

        </AppBar>
    );
}

