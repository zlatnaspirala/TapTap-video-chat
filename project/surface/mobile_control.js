
var NUI_CONTROL_MOB = {
acceleration_g_x : 0,
acceleration_g_y : 0,
acceleration_g_z : 0,
};

if (window.DeviceMotionEvent) {
window.addEventListener('devicemotion', capture_acceleration, false);
} else {
console.log('This device does not support devicemotion');
}

function capture_acceleration (event) {
	
	NUI_CONTROL_MOB.acceleration_g_x = event.accelerationIncludingGravity.x;
	NUI_CONTROL_MOB.acceleration_g_y = event.accelerationIncludingGravity.y;
	NUI_CONTROL_MOB.acceleration_g_z = event.accelerationIncludingGravity.z;
	
	//--------------------------------------------
	//left
	if (NUI_CONTROL_MOB.acceleration_g_y < -1) {
	
 
	}else {
	
	 
	}
	
	
	//--------------------------------------------
	//right
	if (NUI_CONTROL_MOB.acceleration_g_y > 1) {
	
	 
	}else {
	
 
	}
	
	//--------------------------------------------
	//down
	if (NUI_CONTROL_MOB.acceleration_g_x > 1) {
	
 
	
	}else {
	
	 
	
	}
	
	//--------------------------------------------
	//up
	if (NUI_CONTROL_MOB.acceleration_g_x < -1) {
	
 
	
	}else {
	
 
	
	}
	
		
	//alert(acceleration_g_x  + "><><" +  acceleration_x);
}
