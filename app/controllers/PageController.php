<?php
	class PageController extends BaseController {

		public $layout = 'layouts.main';

		public function showIndex()
		{
			$this->layout->content = View::make('index');
		}

	}