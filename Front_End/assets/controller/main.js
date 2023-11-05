

//login function



    // function customerLogin(){
    //
    //
    //     var loginOb = {
    //         "username":$("#LoginUsername").val(),
    //         "password":$("#LoginPassword").val()
    //     }
    //
    //     $.ajax({
    //         url:baseUrl+"login",
    //         method:"post",
    //         contentType: 'application/json',
    //         data: JSON.stringify(loginOb),
    //         success: function(response) {
    //             console.log(response);
    //         }
    //     });
    //
    // }





$(document).ready(function() {
    $('#loginHeaderBtn').on('click', function() {
        $('#loginSection').show();
        $('#loginHeaderBtn').hide();
    });

    $('#closeWindowInLogin').on('click', function() {
        $('#loginSection,#loginBtn').hide();
        $('#loginHeaderBtn').show();
    });
});


//check role
$(document).ready(function() {
    $("#Role").on("change", function() {
        const selectedRole = $(this).val();

        if (selectedRole === "Admin") {
            $("#roleVidTow").prop("hidden", true);
        } else if (selectedRole === "Driver") {
            $("#disableForDriver").prop("hidden", true);
            $("#roleVidTow").prop("hidden", false);

        } else {
            $("#roleVidTow").prop("hidden", false);
            $("#disableForDriver").prop("hidden", false);
        }
    });
});






//const mainUrl = "http://localhost:8080/rent/";

var roal = undefined;

$("#btnReg").click(function (){

    var role = $("#Role").val();

    const selectedRole = $("#Role").val();
    if(selectedRole=="Admin"){
        addAdmin();


    }else if (selectedRole=="Customer"){
        addCustomer();

    }else{
        roal="driver";
    }

function addAdmin() {



    var admin = {
        "adminId": $("#attendId").val(),
        "name": $("#attendName").val(),
        "contact": $("#phoneNumber").val(),
        "email": $("#email").val(),
        "username": $("#username").val(),
        "password": $("#password").val()
    }


    $.ajax({
        url: baseUrl + "admin",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(admin),
        dataType: "json",
        success: function (resp) {
            alert(resp)
        },
        error: function (ob) {

        }

    });
}

    function addCustomer(){


        var formData = new FormData();

        var customerId = $("#attendId").val();
        var name = $("#attendName").val();
        var email = $("#email").val();
        var userName = $("#username").val();
        var password = $("#password").val();
        var licenceNo = $("#licenceNo").val();
        var nicNo = $("#nicNumber").val();
        var address = $("#address").val();
        var contactNo = $("#phoneNumber").val();


        formData.append("customerId", customerId);
        formData.append("name", name);
        formData.append("address",address);
        formData.append("contactNo",contactNo);
        formData.append("email",email);
        formData.append("nicNo",nicNo);
        formData.append("licenceNo",licenceNo);
        formData.append("userName",userName);
        formData.append("password",password);


        let imgBack = $("#idCardPhotoFront")[0].files[0];
        let imgBackName = $("#idCardPhotoFront")[0].files[0].name;
        formData.append("imgFrontFile", imgBack, imgBackName);

        let imgSide = $("#idCardPhotoBack")[0].files[0];
        let imgSideName = $("#idCardPhotoBack")[0].files[0].name;
        formData.append("imgBackFile", imgSide, imgSideName);

        let imgInside = $("#licencePhoto")[0].files[0];
        let imgInsideName = $("#licencePhoto")[0].files[0].name;
        formData.append("imgLicenceFile", imgInside, imgInsideName);


            $.ajax({
                url:baseUrl+"customer/saveImg",
                method: "post",
                data: formData,
                dataType: "json",
                async: true,
                contentType: false,
                processData: false,
                enctype: "multipart/form-data",
                success:function (resp) {
                    alert("successful Uploaded");
                    loadDataToLogin();
                },
                error:function (err){
                    console.log(err);
                }

            });


    }

});

                                                // fill login table

function loadDataToLogin(){


    var loginObject ={
            "password":$("#password").val(),
            "username":$("#username").val(),
            "role":  $("#Role").val()
    }

    $.ajax({
        url: baseUrl+"login",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(loginObject),
        dataType: "json",
        success: function (resp) {
            alert(resp)

        },
        error:function (error){
            alert("error");
        }


    });
}

$("#loginBtn").click(function (){

    $.ajax({
        url:baseUrl+"login/"+$("#LoginUsername").val(),
        method:"get",
        success:function (resp){
            console.log(resp);


                alert("successful login");

                    if ($("#LoginRole").val() === "Customer") {
                    }
                    if ($("#LoginRole").val() === "Admin") {

                        window.location.href="assets/admin/dashboard.html";

                    } if ($("#LoginRole").val() === "Driver") {

                window.location.href="assets/admin/driverdetails.html";


            }
        }
    });
});


////////////////// load all customer

loadCarsToDashboard=()=> {

    $.ajax({
        url: baseUrl+"car",
        method: "get",
        success:function (resp){
            for (let i of resp.data) {


                var registrationNO = i.registrationNO;
                var brand = i.brand;
                var type = i.type;
                var noOfPassengers = i.noOfPassengers;
                var transmissionType = i.transmissionType;
                var fuelType = i.fuelType;
                var color = i.color;
                var dailyRate = i.dailyRate;
                var monthlyRate = i.monthlyRate;
                var lossDamageWaiver = i.lossDamageWaiver;
                var priceForExtraKm = i.priceForExtraKm;
                var freeMileage = i.freeMileage;
                var frontViewImage = i.frontViewImage;
                var backView = i.backView;
                var sideView = i.sideView;
                var internalView = i.internalView;

                console.log(i);

                var addSection = `<div  class="carousel-item active">
                        <section class="ovrVehicleClass">
                            <h1>${type}</h1>
                            <h2>${brand}</h2>
                        </section>

                        <img src="${'assets/img/' + frontViewImage}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <div id="carDetails"  style="color: black">
                                <aside>
                                    <div>
                                        <img src="assets/img/seet.png" width="50">
                                    </div>
                                    <h6 id="textPassenger">${noOfPassengers}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <img src="assets/img/speed.png" width="50">
                                    </div>
                                    <h6>${priceForExtraKm}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <img src="assets/img/fule.png" width="50">
                                    </div>
                                    <h6>${fuelType}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <img src="assets/img/color.png" width="50">
                                    </div>
                                    <h6>${color}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <img src="assets/img/bumber.png" width="50">
                                    </div>
                                    <h6 id="regNumberH6">${registrationNO}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <img src="assets/img/type.png" width="50">
                                    </div>
                                    <h6>${transmissionType}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <button  id="btnPopUp" class="border-light rounded-circle shadow-none">
                                            <img src="assets/img/white.png" width="50">                                            
                                      </button>
                                    </div>
                                    <h6>Rent</h6>
                                </aside>
                            </div>
                        </div>
                        
                  
            
<!--                        //////////////////////////////////////////-->
                        
                        <div class="registrationModal" id="popUpdiv">
                        <div id="innerDiv" class="container">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <!-- Modal Header -->
                                    <div class="modal-header">
                                        <h6 id="rentId">R2f1r75</h6>
                                        <h4 class="modal-title">Rent Vehicle</h4>
                                        <a class="close" id="closeWindow" href="#">&times;</a>

                                    </div>

                                    <!-- Modal Body - Images and Form -->
                                    <div class="modal-body">
                                        <div class="container">
                                            <div class="row popImgContainer mt-5">
                                                <div class="col-md-4 popUpImg">
                                                    <img src="${'assets/img/' +internalView }" class="img-fluid" alt="Image 1">
                                                </div>
                                                <div class="col-md-4 popUpImg">
                                                    <img src="${'assets/img/' +backView }" class="img-fluid" alt="Image 2">
                                                </div>
                                                <div class="col-md-4 popUpImg">
                                                    <img src="${'assets/img/' + sideView}" class="img-fluid" alt="Image 3">
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Form -->
                                        <form id="registrationForm" >
                                            <div class="row mt-5">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="dalyRate">Daly Rate</label>
                                                        <input type="text" class="form-control" id="dalyRate" value="${dailyRate}" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="monthlyRate">Monthly rate</label>
                                                        <input type="text" class="form-control" id="monthlyRate" value="${monthlyRate}" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="bankSlip">Bank Slip</label>
                                                        <input type="file" class="form-control" id="bankSlip" name="bankSlip" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="customerId">CustomerId</label>
                                                        <input type="text" class="form-control" id="customerId"  required>
                                                    </div>

                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="lossDamage">Loss Damage</label>
                                                        <input type="text" class="form-control" id="lossDamage" value="${lossDamageWaiver}" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="status">status</label>
                                                        <input type="text" class="form-control" id="status" value="${dailyRate}" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="ReturnDate">Return Date</label>
                                                        <input type="date" class="form-control" id="ReturnDate" name="returnDate" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="picUpTime">PicUp Time</label>
                                                        <input type="date" class="form-control" id="picUpTime"  name="pickUpTime"required>
                                                    </div>

                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="priceForExtraKm">price For Extra Km</label>
                                                        <input type="text" class="form-control" id="priceForExtraKm" value="${priceForExtraKm}" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="freeMileage">free Mileage </label>
                                                        <input type="text" class="form-control" id="freeMileage" value="${freeMileage}" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="returnPlace">Return Place</label>
                                                        <input type="text" class="form-control" id="returnPlace" name="returnPlace" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="fw-bold" for="picUpPlace">picUp Place</label>
                                                        <input type="text" class="form-control" id="picUpPlace" name="picUpPlack" required>
                                                    </div>
                                                </div>

                                                <button type="button" id="btnCarRent" class="btn btn-primary mt-5 col-md-2">Rent Car</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                 </div>`;


                $("#viewImg").append(addSection);

                $(document).ready(function() {
                    $(document).on("click", "#btnPopUp", function() {
                        // Find and show the associated modal based on the structure of your HTML
                        $(this).closest('.carousel-item').find('.registrationModal').css("display", "block");
                    });
                });


                $(document).ready(function() {
                    // Close the modal when clicking the closeWindow element
                    $(document).on("click", "#closeWindow", function(e) {
                        e.preventDefault(); // Prevent the default action of the link
                        $(this).closest('.registrationModal').css("display", "none");
                    });
                });

                var currentDate = new Date();
                var localDate = currentDate.toLocaleDateString(); // Get local date as a string

//  booking a car







                $("#viewImg").on("click", "#btnCarRent", function() {

                   // var rentFormDate = new FormData();

                    let pickupDate = $("#picUpTime").val();
                     let returnDate = $("#ReturnDate").val();
                     let pickUpVenue = $("#picUpPlace").val();
                     let returnVenue = $("#returnPlace").val();
                     let customerId = $("#customerId").val();
                    let rentId = $("#viewImg").find("#rentId").text();
                    let date = localDate;
                    let status = "Pending";   // catch request
                    let registrationNO = $("#viewImg").find("#regNumberH6").text();


                    // rentFormDate.append("rentId", rentId);
                    // rentFormDate.append("date", date);
                    // rentFormDate.append("pickupDate", pickupDate);
                    // rentFormDate.append("returnDate", returnDate);
                    // rentFormDate.append("pickUpVenue", pickUpVenue);
                    // rentFormDate.append("returnVenue", returnVenue);
                    // rentFormDate.append("status", status);
                    // rentFormDate.append("registrationNO", registrationNO);
                    // rentFormDate.append("customerId", customerId);

                    var rent = {
                        "rentId":rentId,
                        "date":date,
                        "pickupDate":pickupDate,
                        "returnDate":returnDate,
                        "pickUpVenue":pickUpVenue,
                        "returnVenue":returnVenue,
                        "status":status,
                        "car": {
                            "registrationNO": registrationNO
                        },
                        "customer": {
                            "customerId": customerId
                        }
                    }

                    //  let imgFront = $("#frontView")[0].files[0];
                    //  let imgFrontName = $("#frontView")[0].files[0].name;
                    // rentFormDate.append("imgBankSlip", imgFront, imgFrontName);


                    $.ajax({
                        url:baseUrl+"addRent",
                        method:"post",
                        data: JSON.stringify(rent),
                        dataType: "json",
                        contentType:"application/json",
                        // async: true,
                        // contentType: false,
                        // processData: false,
                        // enctype: "multipart/form-data",
                        success:function (resp) {
                            alert("successful Uploaded");
                        },
                        error:function (err){
                            console.log("you must login or register");
                        }

                    });
                });

                }
        }
    });

}



//     $(document).on("click","#btnCarRent",function (){
//     var rentFormDate = new FormData();
//     var rentId = document.getElementById("rentId").textContent;
//     var date = localDate;
//     var pickupDate = document.getElementById("picUpTime").value;
//     var returnDate = document.getElementById("ReturnDate").value;
//     var pickUpVenue = document.getElementById("picUpPlace").value;
//     var returnVenue = document.getElementById("returnPlace").value;
//     var status = "Pending"; // catch request
//     var registrationNO = document.getElementById("regNumberH6").textContent;
//     var customerId = document.getElementById("customerId").value;
//
//     rentFormDate.append("rentId", rentId);
//     rentFormDate.append("date", date);
//     rentFormDate.append("pickupDate", pickupDate);
//     rentFormDate.append("returnDate", returnDate);
//     rentFormDate.append("pickUpVenue", pickUpVenue);
//     rentFormDate.append("returnVenue", returnVenue);
//     rentFormDate.append("status", status);
//     rentFormDate.append("registrationNO", registrationNO);
//     rentFormDate.append("customerId", customerId);
//
//         var imgFront = document.getElementById("bankSlip");
//         if (imgFront.files.length > 0) {
//             var imgFrontFile = imgFront.files[0];
//             var imgFrontName = imgFront.files[0].name;
//             rentFormDate.append("imgBankSlip", imgFrontFile, imgFrontName);
//         } else {
//             console.error("No file selected");
//             return;
//         }
//
//
//         var xhr = new XMLHttpRequest();
//     xhr.open("POST", baseUrl + "addRent/addBooking");
//     xhr.send(rentFormDate);
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             alert("Successfully Uploaded");
//         } else {
//             console.error(xhr.responseText);
//         }
//     };
//     xhr.onerror = function () {
//         console.error(xhr.statusText);
//     };
// });
//
