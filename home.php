<?php
/**
 * The all posts home page template file
 */

$post = new TimberPost();
if (isset($post->hero_image) && strlen($post->hero_image)){
    $post->hero_image = new TimberImage($post->hero_image);
}
$context = Timber::get_context();
$context[ 'post' ] = $post;
Timber::render( 'sessions.twig', $context );