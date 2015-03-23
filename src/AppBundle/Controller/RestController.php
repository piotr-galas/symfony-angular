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

    public function dumpAction(Request $request)
    {
        var_dump($request->request->all());exit;
    }

    public function formInTwigProcessAction(Request $request)
    {
        $animal = new Animal();
        $formType = new AnimalType();



        $form = $this->createForm($formType, $animal);
        $form->handleRequest($request);


        $view = $this->view(array(
                'animalForm' => $form->createView()
            ), 200)
            ->setTemplate("AppBundle:Partial:test2.html.twig")
        ;
        return $this->handleView($view);


    }

    public function formInPartialAction(Request $request)
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

    public function formInTwigAction(Request $request)
    {

        $animal = new Animal();
        $formType = new AnimalType();

        $form = $this->createForm($formType, $animal);
        $form->handleRequest($request);

//        var_dump($form->get('name'));exit();

        $view = $this->view(array(
                'animalForm' => $form->createView()
            ), 200)
            ->setTemplate("AppBundle:Partial:test2.html.twig")
        ;
        return $this->handleView($view);
    }



}