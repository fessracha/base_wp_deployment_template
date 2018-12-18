<?php
/**
 * Шаблон шапки (header.php)
 * @package WordPress
 * @subpackage Base WP Template
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Base WP Template</title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/core.min.css">
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/core.min.js"></script>
    <?php wp_head(); ?>
</head>
<body>


