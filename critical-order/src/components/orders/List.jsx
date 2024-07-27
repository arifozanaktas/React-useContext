import React, { useContext, useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { axiosInstance } from '../api/axiosInstance';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BlockIcon from '@mui/icons-material/Block';
import { IconButton } from '@mui/material';
import { FavoritesContext } from '../context/OrdersContext';


function List() {

    const [orders, setorders] = useState([])
    const { favOperation, favorites } = useContext(FavoritesContext)
    useEffect(() => {
        loadData()

    }, [])
    const loadData = () => {
        axiosInstance.get("orders")
            .then(res => { setorders(res.data) })
    }
    const isFavorite = (id) => {
        let favItem = favorites.find(f => f.id === id)
        if(favItem)
            return true
        else
            return false 
    }

    const columns = [
        {
            field: "customerId",
            headerName: "Customer Id",
            flex: 0.3
        },
        {
            field: "orderDate",
            headerName: "Order Date",
            flex: 0.3
        },
        {
            field: "requiredDate",
            headerName: "Required Date",
            flex: 0.3
        },
        {
            field: "shippedDate",
            headerName: "Shipped Date",
            flex: 0.3
        },
        {
            field: "star",
            headerName: "Action",
            flex: 0.2,
            renderCell: (item) => {
                if (item.row.requiredDate < item.row.shippedDate) {
                    return <BlockIcon />;
                } else {
                    return (
                        <IconButton onClick={() => favOperation(item.row)}>
                            {isFavorite(item.row.id) ? <StarIcon /> : <StarBorderIcon />}
                        </IconButton>
                    );
                }
            }
        }
        
    ]
    return (
        <>
            <div style={{ height: 500 }}>
                {
                    <DataGrid
                        rows={orders}
                        columns={columns}
                        slots={{ toolbar: GridToolbar }}
                    />
                }

            </div>


        </>
    )
}

export default List