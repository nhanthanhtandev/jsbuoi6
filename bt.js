var mang=[];
var mangCanLay  = [];
var soNguyenThemNew = [];
var soNguyenThemCuoiCung = [];
function getNumber(){

    var soThemMang = document.getElementById("inputNum").value * 1;
    document.getElementById("txtArray").innerHTML= mang.push(soThemMang);;
    mangCanLay = document.getElementById("txtArray").innerHTML= mang;
    return mangCanLay;
}

function sumPositive(){
    var sum = 0; 
    for(var i = 0 ; i < mangCanLay.length; i++)
    {
        if(mangCanLay[i]>0)
        {
            sum += mangCanLay[i];
            document.getElementById("txtSum").innerHTML = "Tổng của số bạn vừa nhập là " + sum;
        }
        else{
            alert("Trong dãy số có số âm mời bạn nhập lại ")
        }    
    }
}

function countPositive(){
    var i = 0;
    var gtDuong = [];
    var gtAm = 0;
    for(i = 0 ; i <= mangCanLay.length ; i++)
    {
        if(mangCanLay[i] > 0)
        {
           
            document.getElementById("txtCount").innerHTML = "Số dương bạn đã nhập là "+  gtDuong.push(mangCanLay[i]);;
        }
        else{
            gtAm = mangCanLay[i];
        }   
    }
}

function findMin(){
    var soNhoNhat = mangCanLay[0];
    
    for (var i = 1; i < mangCanLay.length; i++)
    {
        if(soNhoNhat < mangCanLay[i]){
            soNhoNhat = soNhoNhat;
        }
        else if(soNhoNhat > mangCanLay[i])
        {
            soNhoNhat = mangCanLay[i];
        }
    }
    document.getElementById("txtMin").innerHTML = soNhoNhat;
}

// function findMinPos(){

// }
function findMinPos(){
    var soDuong = [];
    for(var i = 0 ; i < mangCanLay.length ; i++)
    {
        if(mangCanLay[i]>0)
        {
          soDuong.push(mangCanLay[i]);
        }

    }
    var soNN = soDuong[0];
    for(var j = 0; j < soDuong.length;j++)
    {
        
        if(soNN > soDuong[j+1])
        {
            soNN = soDuong[j+1];
        }
        else if (soNN < soDuong[j+1])
        {
            soNN = soNN;
        }
        
    }
    
    document.getElementById("txtMinPos").innerHTML = soNN;
}

var mangSoDuong = [];
function findEven(){
    for(var i = 0 ; i < mangCanLay.length ; i++){
        if(mangCanLay[i]>0)
        {
            mangSoDuong.push(mangCanLay[i]);
        }
    }

    var soDuongCuoiCung = 0;
    for (var j = 0; j < mangSoDuong.length ;j++)
    {
        if(mangSoDuong[j]>0)
        {
            soDuongCuoiCung = mangSoDuong[mangSoDuong.length - 1];
        }
    }
    document.getElementById("txtEven").innerHTML = soDuongCuoiCung;
}

var soTamDoiCho = 0;
var mangSauKhiDoi = [];
function changePosition(){
    var viTri1 = document.getElementById("inputIndex1").value*1;
    var viTri2 = document.getElementById("inputIndex2").value*1;
    soTamDoiCho = mangCanLay[viTri1];
    mangCanLay[viTri1] = mangCanLay[viTri2];
    mangCanLay[viTri2] = soTamDoiCho;
    
    
 
    document.getElementById("txtChangePos").innerHTML = mangCanLay;
}


function sortIncrease(){
    var sLN = 0;
    for(var i = 0 ; i < mangCanLay.length ; i++){
        if(mangCanLay[i+1] < mangCanLay[i]){
            sLN = mangCanLay[i];
            mangCanLay[i] = mangCanLay[i+1];
            mangCanLay[i+1] = sLN;
        }
       
    }
    document.getElementById("txtIncrease").innerHTML= mangCanLay; 
}
var flag = true;
var mangChua = [];
var soNTDT = 0;
function checkPrime(j){
    for (var i = 2; i <= Math.sqrt(j); i++){
        if (j % i == 0){
            document.getElementById("txtPrime").innerHTML= "Khong co so nguyen to";
        }
        else{
            document.getElementById("txtPrime").innerHTML= j;
        }
    }
    if(j == 3){
        document.getElementById("txtPrime").innerHTML= j;
    }
    return j;
}

function findPrime(){
    for(var i = 0 ; i <mangCanLay.length ; i++)
    {
        if(checkPrime(mangCanLay[i])){
          if(checkPrime(mangCanLay[i]) === mangCanLay[i]){
            break;
          }
        }
    }
    document.getElementById("txtPrime").innerHTML = mangCanLay[i];
}


function getFloat(){
    var soNguyenThem = document.getElementById("inputFloat").value * 1;
    document.getElementById("txtArrayFloat").innerHTML= soNguyenThemNew.push(soNguyenThem);
    soNguyenThemCuoiCung = document.getElementById("txtArrayFloat").innerHTML= soNguyenThemNew;
    return soNguyenThemCuoiCung;

}

function findInt(){
    var count = 0;
    for(var i = 0 ; i < soNguyenThemCuoiCung.length ; i++)
    {
        if(Number.isInteger(soNguyenThemCuoiCung[i]))
        {
            count++;
        }
        
    }
    document.getElementById("txtInt").innerHTML = count;
}

function compareNum(){
    var countDuong = 0;
    var countAm = 0;
    for(var i = 0 ; i < mangCanLay.length ; i++)
    {
        if(mangCanLay[i] > 0){
            countDuong++;
        }
        else if (mangCanLay[i]<0)
        {
            countAm++;
        }
        // return countAm;
        // return countDuong;
    }
    if(countDuong > countAm)
    {
        document.getElementById("txtCompare").innerHTML = "Số dương lớn hơn số âm";
    }
    else if( countDuong < countAm){
        document.getElementById("txtCompare").innerHTML = "Số dương nhỏ hơn số âm";
    }
    else if( countDuong = countAm){
        document.getElementById("txtCompare").innerHTML = "Số dương bằng số âm";
    }
}