import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import photo from '../../assets/property-1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from '../../components/Card'
import axios from 'axios'

export const UserPage = () => {
    const [user, setUser] = useState([{}])
    const [photo, setPhoto] = useState([])
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('token')
    }
    const navigate = useNavigate()

    const del = async(id) => {
        try {
            let confirmDel = confirm('Are you sure to delete this user?')
            if(confirmDel){
                const { data } = await axios.delete(`http://localhost:3022/user/delete/${id}`, {headers: headers})
                getUsers()
                alert(`${data.message}`)
            }
        } catch (err) {
            console.error(err)
        }
    } 

    const getUsers = async() => {
        try {
            const { data } = await axios('http://localhost:3022/user/get', {headers: headers})

            for(let i = 0; i < data.users.length; i++){
                let img = await axios(`http://localhost:3022/user/getImg/${data.users[i].photo}`, {headers: headers})
                data.users[i].photo = img.request.responseURL
            }
            setUser(data.users)
            
        } catch (err) { 
            console.log(err)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Users</h1>
                <Link to='/dashboard/addUser'>
                    <button className='btn btn-success border border-dark me-5 bi bi-plus-circle'> Add User</button>
                </Link>
                
            </div>

            <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex flex-wrap mb-3 mt-3'>
                {
                    user.map((u, index) => {
                        return (
                            <Card 
                                key={index} 
                                name={u.names} 
                                surname={u.surnames} 
                                phone={u.phone}
                                email={u.email}
                                username={u.username}
                                photo={u.photo}
                                headers={headers}
                                id={u._id}
                                butDel={()=>del(u._id)}
                                butEdit={()=>navigate(`/dashboard/updateUser/${u._id}`)}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
