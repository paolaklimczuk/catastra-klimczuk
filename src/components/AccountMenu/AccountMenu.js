import * as React from 'react';

//Componentes utilizados de MUI
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';

// Hooks utilizados
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

//Utilizacion del contexto de la sesion
import { useAuth } from '../../context/AuthContext';

//Estilo utilizado
import '../../App.css';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const { user, logout} = useAuth();

    const navigate = useNavigate();

    const singInSession = () => {
        navigate(`/login`)
    }
    const singOutSession = () => {
        logout()
    }
    const myOrders = () => {
        navigate(`/ordenes`)
    }

    useEffect(() => {
        navigate(`/`)
    }, [user])

    return (
      <React.Fragment>
        <Box sx={{ mt:-6.5, alignItems: 'right', textAlign: 'right' }}>
          <Tooltip title="Login">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ mr: 0, mt:0 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}/>
                        {(user && user.email !== '') ? (<p className='parrafStyle'>{user.email}</p>)
                        : (<p className='parrafStyle'> INGRESAR/REGISTRAR </p>)}
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              t: 0,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {
            (!user || user.email == '') &&
            <MenuItem onClick={singInSession}className='submenu-style'>
              <Avatar /> Ingresar/Registrar
            </MenuItem>
          }
          {
            (user && (user.email !== '')) &&
            <MenuItem onClick={myOrders} className='submenu-style'>
              <ShoppingCartIcon/> Mis Ordenes
            </MenuItem>
          }

          <Divider />
          {
            (user && (user.email !== '')) &&
            <MenuItem onClick={singOutSession}className='submenu-style'>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          }

        </Menu>
      </React.Fragment>
    );
  }
  