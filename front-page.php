<?php
/**
 * The front page template file
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
Timber::render( 'home.twig', $context );