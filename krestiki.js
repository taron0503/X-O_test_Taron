$(document).ready(function(){
	var player;

    SelectPlayer();
	$('td').on('click', UserMove);

	function UserMove(){
		if($(this).text() == ''){
			$(this).text('X');
			if(CheckVictory()){
				$('td').off();
			}else{
				player = 'Computer';
				ComputerMove();
			}
		}
	}

	function ComputerMove(){
		var arr = Array();
		$('td').each(function(){
			if($(this).text() == '')
				arr.push($(this).attr('id'));
		})
		var item = arr[Math.floor(Math.random()*arr.length)];	
		$('#'+item).text('O');

		if(CheckVictory())
			$('td').off();
		else
			player = "User";
	}

	function CheckVictory(){
		if($('#1').text() != '' && $('#1').text() == $('#2').text() && $('#1').text() == $('#3').text() ||
		   $('#4').text() != '' && $('#4').text() == $('#5').text() && $('#4').text() == $('#6').text() ||
		   $('#7').text() != '' && $('#7').text() == $('#8').text() && $('#7').text() == $('#9').text() ||
		   $('#1').text() != '' && $('#1').text() == $('#4').text() && $('#1').text() == $('#7').text() ||
		   $('#2').text() != '' && $('#2').text() == $('#5').text() && $('#2').text() == $('#8').text() ||
		   $('#3').text() != '' && $('#3').text() == $('#6').text() && $('#3').text() == $('#9').text() ||
		   $('#1').text() != '' && $('#1').text() == $('#5').text() && $('#1').text() == $('#9').text() ||
		   $('#3').text() != '' && $('#3').text() == $('#5').text() && $('#3').text() == $('#7').text() ) {
			alert(player + " win");
			return true;
		}
		else if(CheckDraw()){
			alert('Draw');
			return true;
		}

		return false;
	}

	function CheckDraw(){
		var length = $('td').length;
		for(var i  = 0; i < length; i++){
			if($('td').eq(i).text() == '')
				return false
		}
		return true;
	}


	$('#restart').on('click',function restart(){
		$('td').each(function(){
			$(this).text('');
		})
		$('td').on('click', UserMove);
		SelectPlayer();
	})

	function SelectPlayer(){
		if(confirm("First move make computer") == true){
		player = "Computer";
		alert("Computer start!")
		ComputerMove();
		}else{
			player = "User";
			alert("User start!")
		}
	}
})