var tableid=0;

function setData()
{
	var key=document.getElementById("key").value;
	var value=document.getElementById("value").value;
	localStorage.setItem(key,value);
	document.getElementById("key").innerHTML="";
	document.getElementById("value").innerHTML="";
}


function renderTable()
{
	var newTable = document.createElement('table');
	var table = document.getElementById("table");
	table.parentNode.replaceChild(newTable,table);
	newTable.setAttribute('id','table');
	newTable.setAttribute('margin-left','220px');
	newTable.setAttribute('position','relative');
	var data = Object.entries(localStorage);
	for(let i=0;i<data.length;i++)
	{
		updateTableEntry(data[i][0],data[i][1]);
	}
}


function updateTableEntry(key,value)
{

	var table = document.getElementById("table");
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2)
	var cell4 = row.insertCell(3);
	cell1.innerHTML = key;
	cell2.innerHTML = value;	

	var buton = document.createElement('button');
	buton.style.color='black';
	buton.style.width='50px';
	buton.style.height='30px';
	buton.style.borderRadius='5px';
	buton.innerHTML="delete";
	buton.onclick = function(){window.localStorage.removeItem(key); table.deleteRow(row.rowIndex);}
	cell4.appendChild(buton);

	var editButton = document.createElement('button');
	editButton.style.width = '50px';
	editButton.style.height= '30px';
	editButton.style.borderRadius='5px';
	editButton.innerHTML	= 'edit';
	editButton.style.color='black';
	cell3.appendChild(editButton);
	editButton.onclick = function(){
									var editbox1=document.createElement('input');
									var editbox2=document.createElement('input');
									editbox1.setAttribute('type','text');
									editbox2.setAttribute('type','text');
									cell1.appendChild(editbox1);
									cell2.appendChild(editbox2);
									this.innerHTML='save';
									this.onclick=function(){
															this.innerHTML='edit';
															localStorage.removeItem(key);
															localStorage.setItem(editbox1.value,editbox2.value);
															renderTable();
															}
								}
}
