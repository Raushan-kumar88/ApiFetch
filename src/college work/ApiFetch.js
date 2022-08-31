import React, { useEffect, useState } from "react";
import './apifetch.css';
function ApiFetch(){


	const [data,getData] = useState([])
	const URL = "https://jsonplaceholder.typicode.com/users";
	
	useEffect(() =>{
		fetchData()
	},[])

const fetchData = () => {
	fetch(URL)
	.then((res) =>
	   res.json())

	.then((response) => {
		console.log(response);
		getData(response);
	})
}

return (


	
	<>
		<table border="0">
			<tr>
				<th>Employee_Id</th>
		  		<th>employee_Name</th>
		  		<th>employee_User_Name</th>
		  		<th>employee_Email</th>
          		<th>employee_Phone</th>
			</tr>
			{data.map((item,i) => (
				<tr>
					<td>{item.id}</td>
		  			<td>{item.name }</td>
		  			<td>{item.username }</td>
		  			<td>{item.email }</td>
            		<td>{item.phone }</td>
				</tr>
			))}
		</table>
	</>
);
}
export default ApiFetch;


