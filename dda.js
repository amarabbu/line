function letsGo() {
    var ax1 = parseInt(prompt("Enter x0"));
    var ay1 = parseInt(prompt("Enter y0"));
    var ax2 = parseInt(prompt("Enter x1"));
    var ay2 = parseInt(prompt("Enter y1"));

    var adx = ax2 - ax1;
    var ady = ay2 - ay1;
    var zone;

    var dx, dy, dinit, dne, de, x, y;

    var arrDinit = [];
    var arrX = [];
    var arrY = [];
    var direction = [];

    var arrXOriginal = [];
    var arrYOriginal = [];

    var zx1,zy1,zx2,zy2;
    



    function findZone(zdx, zdy) {


        if (Math.abs(zdx) > Math.abs(zdy)) {
            if (zdx > 0 && zdy > 0) {
                zone = 0;
            } else if (zdx < 0 && zdy > 0) {
                zone = 3;
            } else if (zdx > 0 && zdy < 0) {
                zone = 7;
            } else if (zdx < 0 && zdy < 0) {
                zone = 4;
            }
        } else {
            if (zdx > 0 && zdy > 0) {
                zone = 1;
            } else if (zdx < 0 && zdy > 0) {
                zone = 2;

            } else if (zdx < 0 && zdy < 0) {
                zone = 5;
            } else if (zdx > 0 && zdy < 0) {
                zone = 6;
            }
        }

    }




    findZone(adx, ady);

    console.log("Zone : " + zone);


    function convertZoneZero(x1, y1, x2, y2, zone) {


        var temp1, temp2;

        if(zone==0){
            zx1=x1;
            zx2=x2;
            zy1=y1;
            zy2=y2;
        }
        else if (zone == 1) {
            temp1 = x1;
            temp2 = x2;
            zx1 = y1;
            zx2 = y2;
            zy1 = temp1;
            zy2 = temp2;

        } else if (zone == 2) {

            temp1 = x1;
            temp2 = x2;
            zx1 = y1;
            zx2 = y2;
            zy1 = -temp1;
            zy2 = -temp2;
        } else if (zone == 3) {
            zx1 = -x1;
            zx2 = -x2;
            zy1 = y1;
            zy2 = y2;

        } else if (zone == 4) {
            zx1 = -x1;
            zx2 = -x2;
            zy1 = -y1;
            zy2 = -y2;

        } else if (zone == 5) {
            temp1 = x1;
            temp2 = x2;
            zx1 = -y1;
            zx2 = -y2;
            zy1 = -temp1;
            zy2 = -temp2;

        } else if (zone == 6) {
            temp1 = x1;
            temp2 = x2;
            zx1 = -y1;
            zx2 = -y2;
            zy1 = temp1;
            zy2 = temp2;

        } else if (zone == 7) {
            zx1 = x1;
            zx2 = x2;
            zy1 = -y1;
            zy2 = -y2;

        }
    }


    convertZoneZero(ax1, ay1, ax2, ay2, zone);

    console.log("Zero x1 : "+zx1);
    console.log("Zero y1 : " + zy1);
    console.log("Zero x2 : " + zx2);
    console.log("Zero y2 : " + zy2);


    function ddaLine(x1, y1, x2, y2){


        var dirE = "E";
        var dirNE = "NE";


        dx = x2 - x1;
        dy = y2 - y1;
        dinit = 2 * dy - dx;
        dne = 2 * dy - 2 * dx;
        de = 2 * dy;

        console.log("Zone Zero dx :"+dx);
        console.log("Zone Zero dy :" + dy);
        console.log("Zone Zero dinit :" + dinit);
        console.log("Zone Zero dNE :" + dne);
        console.log("Zone Zero dE :" + de);

        x = x1;
        y = y1;
        arrX.push(x);
        arrY.push(y);

        arrDinit.push(dinit);

        while (x <= x2) {
            x++;
            if (dinit > 0) {
                y++;
                dinit = dinit + dne;
                arrDinit.push(dinit);
                direction.push(dirNE);
            }
            else {
                dinit = dinit + de;
                arrDinit.push(dinit);
                direction.push(dirE);
            }
            arrX.push(x);
            arrY.push(y);

        }
    }

    ddaLine(zx1,zy1,zx2,zy2);
    console.log("Zone Zero d :");
    console.log(arrDinit);

    console.log("Zone Zero Direction :");
    console.log(direction);

    console.log("Zone Zero X :");
    console.log(arrX);

    console.log("Zone Zero Y :");
    console.log(arrY);


    function convertZoneoriginal(arrx,arry,z){

        

        for(i=0;i<arrDinit.length;i++){

            if(z==0){
                arrXOriginal[i] = arrx[i];
                arrYOriginal[i] = arry[i];
            }
            
           else if(z==1){
                arrXOriginal[i]=arry[i];
                arrYOriginal[i]=arrx[i];
            }
            else if(z==2){
                arrXOriginal[i] = arry[i] * -1;
                arrYOriginal[i] = arrx[i];
            }
            else if(z==3){
                arrXOriginal[i] = arrx[i]*-1;
                arrYOriginal[i] = arry[i];
            }
            else if(z==4){
                arrXOriginal[i] = arrx[i] * -1;
                arrYOriginal[i] = arry[i] * -1;
            }
            else if(z==5){
                arrXOriginal[i] = arry[i] * -1;
                arrYOriginal[i] = arrx[i] * -1;
            }
            else if(z==6){
                arrXOriginal[i] = arry[i];
                arrYOriginal[i] = arrx[i] * -1;
            }
            else if(z==7){
                arrXOriginal[i] = arrx[i];
                arrYOriginal[i] = arry[i] * -1;
            }
        }

    }

    convertZoneoriginal(arrX,arrY,zone);

    console.log("Original X :");
    console.log(arrXOriginal);

    console.log("Original Y :");
    console.log(arrYOriginal);


    var message = "Result Generated Successfully. See Results in Console. Right Click > Inspect \n";

    var message1 = "&copy; ABBU &copy;";

    document.getElementById('values').innerHTML = message;
    document.getElementById('link').innerHTML = message1;
}