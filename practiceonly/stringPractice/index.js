let ipAddress = "192.168.0.1";

// changedIpAddress = ipAddress.replaceAll("." , "-");

// console.log(changedIpAddress);

let subnets = ipAddress.split(".");
displaySubNets();

function displaySubNets(){
    console.log("First Subnet: " + subnets[0] + " Second Subnet: " + subnets[1]);
    console.log("Third Subnet: " + subnets[2]);
    console.log("Fourth Subnet: " + subnets[3]);
}

