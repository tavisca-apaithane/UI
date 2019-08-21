function setData()
{
	alert("here");
	var key=document.getElementById("key").value;
	var value=document.getElementById("value").value;
	alert(key);
	alert(value);
	localStorage.setItem(key,value);
	alert("data added");
}


function renderTable()
{
	alert("in render function");
	var table = document.createElement('table');
	var data = Object.entries(localStorage);
	for(let i=0;i<data.length;i++)
	{
	var tableRow = document.createElement('tr');

	var tableKey=document.createElement('td');
	var tableValue=document.createElement('td');
	alert("got all data from device");
	tableKey.appendChild(data[i][0]);//get key value data from localstorage...
	tableValue.appendChild(data[i][1]);

	tableRow.appendChild(tableKey);	//add key value to row...
	tableRow.appendChild(tableValue);

	table.appendChild(tableRow);    //add row to table...
	alert("created table");
	document.getElementById("table").appendChild(table);
	alert("out");

	}

}