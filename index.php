<?php

require_once('puzzle.php');

$config = new Config;

$pozadina = $config->getPuzzleImages();

?>
<!DOCTYPE html>
<html>
<head>
	<title>Puzzle game</title>
	<link rel="stylesheet" href="style.css" type="text/css">
	<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="main.js"></script>

</head>
<body>
    
    
    <div class="okvir">
        <table id="ploca"></table>
    </div>
    <br />
    <div class="button">   
        <select id="pozadinaa">
            <?php
            foreach($pozadina as $p) { ?>
                
                <option value="<?php echo $p['image']; ?>">
                <?php echo $p['title']; ?>
                </option>

            <?php
            }
            ?>
            
        </select>
        <script>
            
        </script>
        <button onClick=pozadina();>OK</button>
    </div>
    <div class="button">		
            <button onClick=mix();>New game</button>
    </div>
    <br /><br />
    <hr>
    <div class="tekst">Use  &larr; &uarr; &rarr; &darr; on your keyboard</div>
</body>