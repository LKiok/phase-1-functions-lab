const Hq =42

function distanceFromHqInBlocks (pickup){
    let response = pickup - Hq;
    if (response <0) {
        return response * -1;
    }
    return response;
}

let ft =264
function  distanceFromHqInFeet (distanceFeet){
    return distanceFromHqInBlocks(distanceFeet)*ft;
}


function distanceTravelledInFeet(start,destination){
    let response = (destination - start)*ft;
    if (response<0) {
        return response *-1
    }
    return response;
}

function calculatesFarePrice(start, destination){
    let distanceTravelled = distanceTravelledInFeet(start,destination);
     if(distanceTravelled <= 400){
        return 0;
     }else if (distanceTravelled > 400 && distanceTravelled <= 2000){
        return(distanceTravelled-400)* 0.02;l
     }else if(distanceTravelled > 2000 && distanceTravelled <= 2500){
        return 25;
     }else if(distanceTravelled > 2500){
        return 'cannot travel that far';
     }
}






