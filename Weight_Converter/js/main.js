document.getElementById('output').style.visibility = 'hidden';
        document.getElementById('weightInput').addEventListener('input', function(e){
            document.getElementById('output').style.visibility = 'visible';
            let kilograms = e.target.value;
            document.getElementById('gramsOutput').innerHTML = kilograms*1000;
            document.getElementById('poundsOutput').innerHTML = kilograms/0.45359237;
            document.getElementById('ouncesOutput').innerHTML = kilograms/0.02834952;
        });