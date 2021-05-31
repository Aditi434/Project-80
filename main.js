var name_of_people=[];
function submit()
{
    var guest_name= document.getElementById("name1").value;
    name_of_people.push(guest_name);
    document.getElementById("display_name").innerHTML=name_of_people.toString();

}

function show()
{
    var a=name_of_people.join("<br>");
    document.getElementById("p1").innerHTML=a.toString();
    document.getElementById("show").style.display="block";
}


function sort()
{
    name_of_people.sort();
    var sort_names=[];
    var length_of_sort=name_of_people.length;
    for(var k=0; k<length_of_sort; k++){
        sort_names.push("<h3> " +name_of_people[k] + "</h3>")
        
    }
    var remove_commas=sort_names.join(" ");
    document.getElementById("sorted").innerHTML=remove_commas;
   
}

function update()
{
    document.getElementById("sorted").innerHTML=name_of_people;
}


function searching()
{
    var s= document.getElementById("s1").value;
    var find=0;
    for (k=0; k<name_of_people.length; k++)
        {
            if(s==name_of_people[k])
            {
                find=find+1;
            }
        }
        document.getElementById("p2").innerHTML="name found "+find+ " time/s";
        console.log("found name "+ find + " time/s")

}