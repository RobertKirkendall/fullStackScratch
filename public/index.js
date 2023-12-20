$(document).ready(()=>{
    const randomOwner = Math.floor(Math.random() * 20) + 1;
   
    $('#button').on('click', ()=>{
        $.get('/api/owners', (data)=>{
            console.log('server response: ', data[randomOwner]);
            $("#nameField").text(`Full Name: ${data[randomOwner].first_name} ${data[randomOwner].last_name}`);
            $("#addressField").text(`Address: ${data[randomOwner].address}`);   
            $("#vehicleField").text('Vehicle: Feature unavailable');   

            if(data[randomOwner].warrant === true){
                $("#wantedField").text('Wanted Status: WANTED');
                $("#resultContainer").css('background-color:red');
                
            } else{
                $("#wantedField").text("Wanted Status: No Known Warrants");
            }
        });
    });

});