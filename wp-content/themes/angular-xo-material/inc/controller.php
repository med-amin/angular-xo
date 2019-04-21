<?php

class MySampleApiController
{
    function __construct(Xo $Xo) { }

    public function Index() {
        return 'Hello World!';
    }

    public function Example() {
        return new XoApiAbstractResponse(true, 'A successful message!');
    }

    public function ExampleParams($params) {
        return $params;
    }
}