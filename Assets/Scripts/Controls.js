#pragma strict


    var movementSpeed:float = 10;
    var turningSpeed:float = 60;
 
    function Update() {
        var horizontal:float = Input.GetAxis("Horizontal") * turningSpeed * Time.deltaTime;
        transform.Rotate(0, horizontal, 0);
         
        var vertical:float = Input.GetAxis("Vertical") * movementSpeed * Time.deltaTime;
        transform.Translate(0, 0, vertical);
    }

