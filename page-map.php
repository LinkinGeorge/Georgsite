<?php
/**
 * Template file for the Map
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
Timber::render( 'map.twig', $context );