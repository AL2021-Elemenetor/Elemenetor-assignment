<?php

require_once 'popup.php';

class popup_handle extends popup
{
    public function handleRequest()
    {
        try {
            $lipsum = simplexml_load_file('http://www.lipsum.com/feed/xml?amount=1&short=1')->lipsum;
        } catch (Exception $err) {
            $lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis consequat dui, sed facilisis dui sagittis a. Etiam faucibus risus pretium posuere sagittis. Nulla suscipit ex eget mi dignissim pulvinar. Duis sodales ut dui ut scelerisque. Sed at nisl vitae massa aliquam accumsan quis in neque. Morbi eu mollis elit, at tempor risus.';
        }
        return $lipsum;
    }
}