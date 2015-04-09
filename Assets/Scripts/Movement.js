#pragma strict
var speed = 500.0;
private var count = 0;
	
	function Start()
	{
		
	}
	
	function FixedUpdate()
	{
		var moveHorizontal : float = Input.GetAxis("Horizontal");
		var moveVertical : float = Input.GetAxis("Vertical");
		
		//var movement = Vector3(moveHorizontal, 0.0f, moveVertical);
		var movement = Vector3(moveHorizontal, 0.0f, moveVertical);
		//rb.AddForce(transform.forward * thrust);
		GetComponent.<Rigidbody>().AddForce(movement * speed * Time.deltaTime);
	}