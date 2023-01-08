import React from 'react'
import { Pagination } from 'react-bootstrap'
import axios from 'axios'


const Page = () => {

const Pagination = async ({ total, current, onChangePage }) => {
        let items = []
        if (current > 1) {
            items.push(<Pagination.Prev key="prev" onClick={() => onChangePage(page - 1)} />)
        }
        for (var page = 1; page <= total; page++) {
            items.push(
                <Pagination.Item key={page} data-page={page} active={page === current} onClick={() => onChangePage(page)} >
                    {page}
                </Pagination.Item>
            )
        }

        if (current < total) {
            items.push(<Pagination.Prev key="prev" onClick={() => onChangePage(page + 1)} />)
        }

        // return await axios
        //     .get(`http://localhost:8000/user?q=${value}&_order=asc`)
        //     .then((response) => {
        //         setData(response.data)
        //     })
        //     .catch((err) => console.log(err))

    }
    return (

        <div style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "250px",
            alignContent: "center"
        }}>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>


        </div>



    )
}

export default Page