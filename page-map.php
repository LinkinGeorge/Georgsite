<?php
/**
 * Template file for the Map
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$query = 'pagename=locations';
$context['locations'] = Timber::query_post($query);
Timber::render( 'map.twig', $context );