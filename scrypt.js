var arr = [
    ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."],
    [1,2,3,4,5,6,7],
    [8,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28],
    [29,30,31],
]

document.write("<table border='1' cellpadding='15'>");
    for(var i = 0;i < arr.length;i++){
        document.write("<tr style'background-color:red;'>");
            for(var j = 0;j < arr[i].length;j++){
                var d = new Date();
                var day = d.getDate();
                if(arr[i][j] == day){
                    document.write("<td style='color:red;'>" + arr[i][j] + "</td>");
                }else if(arr[j] == arr[i][j][8]){
                    document.write("<td style='background-color:red;'>" + arr[i][j] + "</td>");
                }else{
                    document.write("<td>" + arr[i][j] + "</td>");
                }
            }
        document.write("</tr>");
    }
document.write("</table>");
