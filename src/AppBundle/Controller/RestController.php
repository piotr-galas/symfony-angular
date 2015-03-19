<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class RestController extends FOSRestController
{
    public function indexAction()
    {
        $view = $this->view(array('aa'=>'bb'), 200)
            ->setTemplate("AppBundle:Rest:index.html.twig")
        ;

        return $this->handleView($view);
    }
}