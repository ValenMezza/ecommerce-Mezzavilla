import { useContext } from "react"
import { CartContext } from "./Context/CartContext"
import {ItemCount   } from "./ItemCount"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


function CartWidget() {
    const {getItemQty} = useContext(CartContext)

    return(
        <>
        <Badge badgeContent={getItemQty()}>
            <ShoppingCartIcon></ShoppingCartIcon>
        </Badge>
            {/* <ItemCount >

            </ItemCount> */}
        </>
    )
}