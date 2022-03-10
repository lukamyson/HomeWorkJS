let num1 = +prompt('Birinchi sonni kiriting'),
    num2 = +prompt('Ikkinchi sonni kiriting'),
    num3 = +prompt('Uchinchi sonni kiriting');
if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    alert(`Siz ${num1} ${num2} ${num3} kiritdiz\nBirinchi son ${num1} ortancha`);
} else if((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)){
    alert(`Siz ${num1} ${num2} ${num3} kiritdiz\nIkkinchi son ${num2} ortancha`);
} else if((num3 > num2 && num3 < num1) || (num3 < num2 && num3 > num1)){
    alert(`Siz ${num1} ${num2} ${num3} kiritdiz\nUchinchi son ${num3} ortancha`);
}
