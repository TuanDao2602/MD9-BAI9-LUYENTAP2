<!--Bài 1: Chuyển từ độ C sang độ F.°C x 9/5 + 32 = °F-->
// let doC=Number(prompt("nhập vào độ C"))
// let doF=Number(doC*(9/5)+32)
// alert("độ F là "+ doF)

// bài2 Chuyển từ mét sang feet: ft =m * 3.2808
//    let met=Number(prompt("nhập vào số mét"))
// let feet=met*3.2808
// alert("feel là "+ feet)

// Bài 3: Tính diện tích hình vuông khi biết cạnh a.
// let a=Number(prompt("nhập vào 1 cạnh"))
// let dienTich =a*a;
// alert("dien tích là :" +dienTich)

// Bài 4: Tính diện tích hình chữ nhật khi biết 02 cạnh a, b.
// let chieuDai =prompt("nhập vào chiều dai a")
// let chieuRong =prompt("nhập vào chiều rộng b")
// let dienTich = chieuDai*chieuRong;
// alert("diện tích là  :" + dienTich)


// Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
// let canhMot =prompt("nhậ vào cạnh kề a")
// let canhHai = prompt("nhập vào cạnh kề b")
// let dienTich=(canhMot*canhHai)/2
// alert("diện tích là "+dienTich)

// bài 6 Giải phương trình bậc 1. ax+b=0
// let a =prompt("nhập vào số a")
// let b=prompt("nhập vào số b")
// if (a==0 &&b==0){
//     alert("phương trình có vô số nghiệm")
// }else if (a==0 && b!=0){
//     alert("phương trình vô nghiệm")
// }else if (a!=0){
//     let x =-b/a
//     alert("phương trình có nghiệm duy nhất là"+x)
// }


// bài 7 giải phương trình bậc 2
//
// let btn=document.getElementById("tinhtoan");
// btn.onclick=function tinhtoan(){
// let soA=document.getElementById("nhap1").value;
// let soB=document.getElementById("nhap2").value;
// let soC=document.getElementById("nhap3").value;
// let delta=(soB*soB)-4*soA*soC
// if (soA===0){
//     let x=-soC/soB
//     alert("phương trình có ngiệm là "+x)
// }else if (delta<0){
//     alert("phương trình vô nghiệm")
// }else if (delta===0){
//     let x=-soB/2*soA
//
//     alert("phương trình có nghiệm kép"+x)
// }else if (delta >0){
//     let x1= (-soB+ Math.sqrt(delta))/(2*soA)
//     let x2=(-soB- Math.sqrt(delta))/(2*soA)
//     alert("phương trình có 2 nghiệm phân biệt ")
//     alert('x1 là : '+x1)
//     alert("x2 là :"+x2)
//
// }
// }
// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của
// một người khi nhỏ 120 và lớn hơn 0.


// let tuoi = Number(prompt("nhập vào số tuổi của ban"));
// if (Number.isInteger(tuoi)){
//
//     if (0 <tuoi && tuoi<120){
//         alert(` số ${tuoi} bạn nhập vào là  tuổi hợp lệ`)
//     }else {
//         alert(` số ${tuoi} bạn nhập vào không phải  tuổi hợp lệ`)
//     }
// }else {
//     alert("số tuổi không hợp lệ")
// }


// Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để
// a,b,c là cạnh của một tam giác là:
//     a,b,c > 0
// a + b > c
// b + c > a
// a + c > b
// let a = parseFloat(prompt("nhập vào cạnh a"))
// let b = parseFloat(prompt("nhập vào cạnh b"))
// let c = parseFloat(prompt("nhập vào cạnh c"))
// if (a>0 && b>0 && c >0){
//     if (a+b>c && b+c>a && a+c>b){
//         alert("a , b , c là cạnh của một tam giác")
//     }
// }else {
//     alert("a , b , c không phải là cạnh 1 tam giác")
// }


// Bài 10: Viết chương trình tính giá điện.4
// let soDien =Number(prompt("nhập vào số điện nhà bạn dùng"))
// let tienDien;
// let bac1 =1000;
// let bac2 =1500;
// let bac3=2000;
// let bac4=2500;
// //
// //
// if (soDien>0&&soDien<=100){
//     tienDien=soDien*1000;
//     alert("tiền điện là "+tienDien);
// }else if (soDien>100 && soDien<=200){
//     tienDien=((100*bac1)+(soDien-100)*1500);
//     alert("tiền điện là "+tienDien);
// }else if (soDien>200 && soDien<=400){
//     tienDien=((100*bac1)+(100*bac2)+(soDien-200)*bac3)
//     alert("tiền điện là "+tienDien);
//
// }else if (soDien>=400) {
//     tienDien=((100*bac1)+(100*bac2)+(200*bac3)+(soDien-400)*bac4)
//     alert("tiền điện là "+tienDien);
// }else {
//     alert("số bạn nhập ko đúng")
// }


// Bài 11: Viết chương trình tính thuế thu nhập cá nhân.
// let thuNhap=Number(prompt("nhập vào thu nhập của bạn"))
// if (thuNhap<10000000){         //thu nhập cá nhân * 1000 lần
//     alert("bạn không phải đóng thuế")
// }else if (thuNhap>=10000000 && thuNhap<15000000){
//     let thue=thuNhap*0.07
//     alert("thuế của bạn là :" +  thue)
// }else if (thuNhap>=15000000 && thuNhap<25000000) {
//     let thue = thuNhap * 0.08
//     alert("thuế của bạn là :" + thue)
// }else if (thuNhap>=25000000 ) {
//     let thue = thuNhap * 0.14
//     alert("thuế của bạn là :" + thue)
// }


// Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng
// cho vay và lãi suất hàng tháng.( mặc định tiền gủi là 500.000.000 )
// let tienGui = Number(prompt("nhập vào số tiền gửi"))
// let soThangGui=Number(prompt("nhập vào số tháng gửi"))
// let laiSuat=0.007;//0.007 tương ứng với 0.7% lãi suất hàng tháng
// let tienLai;
//    for (i=1;i<=soThangGui;i++){
//        tienLai=tienGui*laiSuat;
//        tienGui=tienGui+tienLai;
//
//
//    }alert("tổng tiền sau gửi của bạn là :"+tienGui)
// alert("tiền lãi là :" + (tienGui-20000000))
