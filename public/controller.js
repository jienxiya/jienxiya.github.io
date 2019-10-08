  $(document).ready(function(){
    var connect = "wss://test.mosquitto.org:8081/mqtt";
    client = mqtt.connect(connect);
    $("#btnOn").click(function(e){
        e.preventDefault();    
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        var topic = 'maryjane/device/status';
        var payload = 'Turned On: ' +time
        client.publish(topic, payload);
        $("#status").html("The device is currently turned on");
    })
    $("#btnOff").click(function(e){
        e.preventDefault();
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        var topic = 'maryjane/device/status';
        var payload = 'Turned Off: ' +time
        client.publish(topic, payload);
        $("#status").html("The device is currently turned off");
    })
})
 
