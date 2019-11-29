<?php



class Config {


	
	/*
	* Returns list of available puzzle images
	**/
	function getPuzzleImages()
	{
		return [[
				'title' => 'Normal',
				'image' => 'plain.png'
			],[
				'title' => 'Pokemon',
				'image' => 'pikachu.jpg'
			],[
				'title' => 'Flowers',
				'image' => 'flowers.jpg'
			],[
				'title' => 'Solving the puzzle you are, yes?',
				'image' => 'yoda.jpg'
			],[
				'title' => 'Bang!',
				'image' => 'bebop.jpg'
			],[
				'title' => 'Doggy style',
				'image' => 'dog-and-cat.jpg'
			]
		];
	}

}


