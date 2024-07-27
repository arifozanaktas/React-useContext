import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../context/OrdersContext'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Button } from '@mui/material'

function CriticalOrderList() {

  const { favorites, clearFavorites,favOperation } = useContext(FavoritesContext)
  const [fav, setFav] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    setFav(favorites)
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
      renderCell: (item) => (
        <Button onClick={() => favOperation(item)} size="small" style={{marginLeft:5}} variant="contained" color="error">Delete</Button>
                
      )
    }
  ]

  return (
    <>
    <h1>Critical Order List</h1>
     <hr />
        <Button onClick={clearFavorites} >Clear All</Button>
        <hr />
      <div style={{ height: 500 }}>
        <DataGrid
          rows={fav}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </div>
    </>
  )
}

export default CriticalOrderList
