<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'arijit86' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<s8W2` C7:FI.!83I~/i|[k.d]20)c~YsoJ^Ts_}*z/!o5{09aa,FQ,@.dx Kp)4' );
define( 'SECURE_AUTH_KEY',  '7~ Ze;I8velKqIZapI5aecz;TpV8emG`zKr2%@GZW76^VKsJz|lXFTOAib;^1T2|' );
define( 'LOGGED_IN_KEY',    'TgJaDEMW55oC##^%&o6Wn_/,J!!5{oNk82)e:g[PVipWDnl{!L})e;m9{_dr<RdY' );
define( 'NONCE_KEY',        'cp)Q3sf*dc^Af;.C+E#;D[:<x>pLM0nUI-1P+:4`C9zY@KzSg!;idf^)rgR[c)(0' );
define( 'AUTH_SALT',        't]0HO7/tTbOLw1:-*|QIWm^gdGQmvDI)>gSh*$%wfooy2N!4!JD*Yty9A&H{jX!x' );
define( 'SECURE_AUTH_SALT', '<@cJ_I^X^_*q2A^4 TjQjXg+<VxE`PmY5dg&r;~l5hnkr;*YkgVIIFHnHZms>txg' );
define( 'LOGGED_IN_SALT',   'hyY2YuNMS9 oNG@x5W}7uFf<?ty]8vAoIMj/Ke[1ghvE;a.E+>JRty<U!/1]VD)1' );
define( 'NONCE_SALT',       '32ewIxr{nT-0z=#fh.W:HOl>~9W?ooDKB9#nPU,fHy8{4}&Fjd0Zu/&O1o(q6o;S' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'an86_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
