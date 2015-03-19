<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class RestController extends FOSRestController
{
    public function indexAction()
    {

        $sampleData = array(
            'aaaa' => 'bbbb',
            'cccc' => 'dddd'
        );





        $view = $this->view($sampleData, 200)
            ->setTemplate("AppBundle:Rest:index.html.twig")
        ;

        return $this->handleView($view);
    }
}