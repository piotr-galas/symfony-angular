<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Animal;

use AppBundle\Form\Type\AnimalType;
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

    public function printAction(Request $request)
    {
        $animal = new Animal();
        $formType = new AnimalType();

        $form = $this->createForm($formType, $animal);
        $form->handleRequest($request);


        $view = $this->view(array(
                'animalForm' => $form->createView()
            ), 200)
            ->setTemplate("AppBundle:Partial:test.html.twig")
        ;
        return $this->handleView($view);
    }



}