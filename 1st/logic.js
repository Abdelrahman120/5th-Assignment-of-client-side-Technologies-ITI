do{
    var num=prompt("enter the number of persons:");
}while(num==null || num=="" || !isFinite(num));

var regexofName=/^[a-zA-Z]+$/;
var Names=[];
for(var i=0; i<num; i++){
    do {
    var Name =new String(prompt("enter user name:"));
    } while (Name=="null" || Name=="" || regexofName.test(Name)===false ||  Name.length<3 || Name.length>10);
    Names.push(Name);
}

var ages=[];
for(var i=0;i<num;i++){
    do {
    var age =new String(prompt("enter user age:"));
    } while (age=="null"|| age=="" || age<10 || age>60);
    ages.push(age);
}

for(var i=0;i<Names.length;i++){
    var table = document.getElementById('myTable');
    var newRow = document.createElement('tr');
    var cell1 = document.createElement('td');
    cell1.textContent = Names[i];
    newRow.appendChild(cell1);
    table.appendChild(newRow);
}

for(var i=0;i<ages.length;i++){
    var  tr= document.getElementsByTagName("tr")[i+1];
    var cell2 = document.createElement('td');
    cell2.textContent = ages[i];
    tr.appendChild(cell2);
}

