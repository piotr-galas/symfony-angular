<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;

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

    public function registerAction(Request $request)
    {
        var_dump($request->request->all());exit;
    }



}