function rotate_cube() {
    var angle = ['90', '180', '270', '360'];
    var i=-1;
    setInterval(
        function () {
            if(i < angle.length-1){
                i++;
            }
            else{
                i=0;
            }
            document.getElementById('cube').style = `transform: rotateY(${angle[i]}deg);`
        }
        , 3000
    );
}