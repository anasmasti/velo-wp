<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'tp_wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'anasmasti' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'anasanas' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',GB-h3M;3I953K!*bZ!YXKE2+DRq}j8c%A~,a6rqocO=v(A}L@}}^F+1+^CWzwg0' );
define( 'SECURE_AUTH_KEY',  'I-_f4u{ktXxTt_l-no&Ql=~;DG!^1qTL%}Q** `laakCmI/KoHOo-dYQQ_i)3;DA' );
define( 'LOGGED_IN_KEY',    'a|kom95%3S$gY7gy$Z0qLqKiF%d~x1I*;+2d3~7:.QP^dr4U|3E-[$jG0y;X6GIe' );
define( 'NONCE_KEY',        '2O<xKp>RTbFJeUNLAg!4]+Nx@zZF;Z^WnO!CECEr4@AvUJ$5W/^}AIdbJUf&UO~u' );
define( 'AUTH_SALT',        '5&WV7Yp8 pgt4Iz{DjUMa=A?:+H!0#IKJtOcx~<SQ056I6z+nLaaFq&p.BV$7Ij7' );
define( 'SECURE_AUTH_SALT', '!leTGyhz4Af@TE.31&W_qPVsRzv&$+r,n1kERf S Wq09i;!K0X|Fhikn F&2R.)' );
define( 'LOGGED_IN_SALT',   '{lLS+4zF>[WQP_;R(ss`@<hS>j2<7:.)^,3<S7,fN:-_-9ghESv8KOJJUA (,y%j' );
define( 'NONCE_SALT',       'V%;b=7cQ/r]T/:i~1w~GE+joQdy7$oX/pS}DkVwaVdi?V3=eT_`0]FDi]f/`@)-R' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
